app.directive('senseObject', [function () {
    return {
        restrict: 'E',
        replace: 'true',
        templateUrl: 'js/directives/sense-object/sense-object.html',
        scope: {
            objectId: '<',
            noSelections: '@',
            noInteraction: '@'
        },
        link: function (scope, element, attrs) {

            var noSelections = scope.noSelections == 'true' ? true : false;
            var noInteraction = scope.noInteraction == 'true' ? true : false;

            app.qlikDoc.visualization.get(scope.objectId).then(function(viz){
                viz.show(attrs.id);
            });
        }
    }
}]);