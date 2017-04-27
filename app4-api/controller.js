angular.module('myApp').controller('mainCtrl', function($scope, mainService){


$scope.getData = function(){
    mainService.getData().then(function(response){
        $scope.smurfs = response.data; 
    });
}

$scope.getData();


});