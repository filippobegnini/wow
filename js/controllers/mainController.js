app.controller('mainController', function ($scope) {

    $scope.$on('NOTIFICATION', function(e, toast){
        $scope.toast = toast;
    });

});