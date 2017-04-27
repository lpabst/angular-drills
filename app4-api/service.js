angular.module('app').service('service', function($http){

this.getData = function(){
    return $http.get('http://pokeapi.co/api/v2/pokemon');
}


});