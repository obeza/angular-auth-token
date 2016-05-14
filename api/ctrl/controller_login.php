<?

$app->post('/login', function () use ($app) {
 
	$data = json_decode(file_get_contents("php://input"));
	//echo ($data->nom);

	// vérifier si email et mot de passe correspondent
	$utilisateur = ORM::for_table('utilisateurs')
					->where('email', $data->email)
					->where('passe', sha1($data->passe))
					->find_one();

	if ( $utilisateur ){

		$token = hash('sha1', mt_rand());
		$utilisateur->token = $token;
		$utilisateur->save();

		$msg = array( 
			"msg"=>"ok",
			"token"=>$token
		);

	} else {

		$msg = array( 
			"msg"=>"erreur"
		);

	}

	header('Content-type: application/json');
	echo json_encode($msg);

});
