app.controller('mainController', function ($scope, $rootScope) {

    var megamenuVisibility = false;

    $scope.$on('NOTIFICATION', function(e, toast){
        $scope.toast = toast;
    });

    $scope.toggleKpiMegamenu = function(){
        $rootScope.megamenuVisibility = !$scope.megamenuVisibility;
    }
});