angular.module('myApp').controller('mainCtrl', function($scope, mainService){

$scope.getPoke = function(){
    mainService.getPoke().then(function(response){
        $scope.data = response.data.results;
    })
}

$scope.getPoke();



});