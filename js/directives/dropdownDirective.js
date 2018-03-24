//********** emitLastRepeaterElement
app.directive('dropdownDirective', [function($rootScope, $log) {
	$log.info('dropDown');
    return {
        restrict : 'E',
        scope: {
        	dropdownlist: '=',
        	dropdownid: '=',
        	dropdownlabel: '=',
        	dropdownclass: '=',
        	dropdownfieldselect: '='
        },
        templateUrl: '../views/dropdown.html',
        controller: function($scope, $rootScope){
        	app.boot();
        		$scope.selectInFieldDD = function(id){
        			$rootScope.selectInField($scope.dropdownfieldselect, id);
        		};

        		$scope.dropDownFunctionProva = function(b) {
        			$rootScope.dropDownFunction('toggle', b);
        		};
				app.createList({
					"qDef": {
						"qFieldDefs": [
						$scope.dropdownlist
						]
					},
					"qInitialDataFetch": [{
						qTop : 0,
						qLeft : 0,
						qHeight : 100,
						qWidth : 1
						}]
					}, function(reply) {
						$scope.ABC = reply.qListObject.qDataPages["0"].qMatrix;
				});
      	
        }
    };
}]);
//********** End emitLastRepeaterElement