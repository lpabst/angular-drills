angular.module('myApp').service('mainService', function($http){


this.getPoke = function(){
    return $http.get('http://pokeapi.co/api/v2/pokemon');
}



});