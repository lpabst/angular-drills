angular.module('app')
.directive('imageDir', function() {

return {
    retrict: 'E',
    template: "<img ng-src='{{ url }}'/>",
    scope: {
        url: '@'
    }
};




    
})