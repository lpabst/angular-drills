angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
    .state('home', {
        url: '/',
        template: '<h1>Home</h1>'
    })
    .state('signup', {
        url: '/signup',
        template: '<h1>signup</h1>'
    })
    .state('details', {
        url: '/details',
        templateUrl: 'details.html',
        controller: 'detailsCtrl',
        
    })

    $urlRouterProvider.otherwise('/');



})