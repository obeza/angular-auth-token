<?

 function authToken() {

	$app = \Slim\Slim::getInstance();

	$token =  $app->request->headers->get('token');
	//echo $token;

	if(!$token){
		$app->halt(401);
	}

	$liste = ORM::for_table('utilisateurs')
		->where('token', $token)
		->find_array();
	
	if ( $liste ){
		//$app->response()->header("Content-Type", "application/json");
		//echo json_encode($liste[0]);
	} else {

		$app->halt(401);

	} 
};