<?

$app->get('/utilisateur', 'authToken', function () use ($app) {

	$utilisateurs = ORM::for_table('utilisateurs')
					->select_many(
						'id', 
						'email'
					)
					->find_array();

	echo json_encode($utilisateurs);

});

$app->post('/utilisateur', function () use ($app) {
 
	$data = json_decode(file_get_contents("php://input"), true);

    // GUMP est une class qui va checker les validations
	$validated = GUMP::is_valid($data, array(
    	'email' => 'required|valid_email',
    	'passe' => 'required|alpha_numeric'

	));

	if($validated === true) {
		$data = json_decode(file_get_contents("php://input"));

	    // check si existe email :
	    $checkEmail = ORM::for_table('utilisateurs')->where('email', $data->email)->count();

	    if ($checkEmail>0){
	    	$msg = array("msg"=>"email");
	    	
	    } else {

		    $fiche = ORM::for_table('utilisateurs')->create();

		    // on encode le mot de passe avec sha1
		    $fiche->passe = sha1($data->passe);
		    $fiche->email = $data->email;

		    $fiche->save();

		    $msg = array("msg"=>"ok");

		}

	} else {
	    // print_r($is_valid);
	    $msg = array("msg"=>"erreur");
		
	}
	echo json_encode($msg);
});
