angular.module('app').service('pokeService', function($http){

var num = 0;

this.getPoke = function(){
    return $http.get('http://pokeapi.co/api/v2/pokemon');
}

this.getNext = function(){
    num += 20;
    return $http.get('http://pokeapi.co/api/v2/pokemon/?offset=' + num);
}

this.getPrevious = function(){
    if (num < 0){
        num = 0;
    }else{
          num -= 20;
    }
    return $http.get('http://pokeapi.co/api/v2/pokemon/?offset=' + num);
}

this.getInfo = function(url){
    return $http.get(url);
}

})