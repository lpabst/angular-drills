angular.module('app')
.directive('mainDir', function(){

return {
    restrict: 'EA',
    templateUrl: './mainDir.html',
    controller: 'mainCtrl'
}


})