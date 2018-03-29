app.directive('filterSelect', ["$rootScope", "$log", function($rootScope, $log) {
    $log.info('dropDown');
    return {
        restrict : 'E',
        replace: true,
        scope: {
            fieldName: '@',
            label: '@?'
        },
        templateUrl: 'js/directives/filter/filter.html',
        controller: function($scope, chartService){

            var fieldName = $scope.fieldName;
            $scope.defaultSelection = 'Please select';
            
            $scope.selectField = function(e, fieldValue){
                app.qlikDoc.field(fieldName).selectValues([fieldValue], false, true);
            };

            $scope.clear = function(){
                chartService.clear(fieldName);
            }
            
            app.qlikDoc.createList({
                "qDef": {
                    "qFieldDefs": [fieldName]
                },
                "qInitialDataFetch": [{
                    qTop : 0,
                    qLeft : 0,
                    qHeight : 100,
                    qWidth : 1}]
                }, function(reply) {
                    var fieldValues = reply.qListObject.qDataPages[0].qMatrix;
                    
                    $scope.fieldValues = fieldValues;
                    $scope.label = $scope.label || '';

                    var selected = $.grep(fieldValues, function (obj, idx) {
                        return obj[0].qState === 'S';
                    });

                    $scope.selected = selected.length > 0 ? selected[0][0].qText : '';
            });
        
        }
    };
}]);