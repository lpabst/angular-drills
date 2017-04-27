angular.module('myApp').service('mainService', function($http){



this.getPokemon = function(){
    return $http({
        method: 'GET',
        url: 'http://pokeapi.co/api/v2/pokemon'
    })
};













});