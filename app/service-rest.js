app.factory('RestService', ['$resource', function($resource){


return $resource(
        "http://localhost:8888/laboratoire/auth-token/api/:controller/:id",
        {
        	id: '@id',
        	controller:'@controller'
        },
        { 'update': {method: 'PUT' }}
        
    );

}]);