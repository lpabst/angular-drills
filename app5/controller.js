angular.module('myApp').controller('mainCtrl', function($scope, mainService){

    $scope.poke1;
    $scope.poke2;
    $scope.winner;

    $scope.getPokemon = function() {
      mainService.getPokemon()
      .then(function(response) {
        $scope.pokemon = response.data.results;
      });
    };
    $scope.getPokemon();

    $scope.setPoke1 = function(pokemon) {
      $scope.poke1 = pokemon;
    };

    $scope.setPoke2 = function(pokemon) {
      $scope.poke2 = pokemon;
    };

    $scope.fight = function() {
      if(!$scope.poke1 || !$scope.poke2 || $scope.poke1.name === $scope.poke2.name) {
        return alert('No contest');
      }

      var num = Math.floor(Math.random() * (2)) + 1;

      if (num === 1) {
        $scope.winner = $scope.poke1;
      } else {
        $scope.winner = $scope.poke2;
      }


    };


});