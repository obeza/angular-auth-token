<?

require_once '../../vendor/idiorm.php';
require 'dbase_config.php';


require '../../vendor/autoload.php';
require '../../vendor/gump.php';


require 'middleware_auth.php';

$app = new \Slim\Slim(array(
    'mode' => 'development'
));

require 'ctrl/controller_utilisateur.php';

require 'ctrl/controller_login.php';


$app->get('/hello', function () {
    
    echo "bonjour";

});

$app->run();