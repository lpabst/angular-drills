angular.module('app').controller('detailsCtrl', function($scope, pokeService){


$scope.getPoke = function(){
    pokeService.getPoke().then(function(response){
        $scope.pokemon = response.data.results;
        console.log(response.data);
    })
}

$scope.getPoke();

$scope.next = function(){
    pokeService.getNext().then(function(response){
        $scope.pokemon = response.data.results;
    })
}

$scope.previous = function(){
    pokeService.getPrevious().then(function(response){
        $scope.pokemon = response.data.results;
    })
}

$scope.getInfo = function(i){
    var url = $scope.pokemon[i].url;
    pokeService.getInfo(url).then(function(response){
        $scope.info = response.data;
    })
}





})