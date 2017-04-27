angular.module('myApp').service('mainService', function($http){

this.getData = function(){

return $http.get('http://smurfs.devmounta.in/smurfs/');

};

this.test = 'words';




});