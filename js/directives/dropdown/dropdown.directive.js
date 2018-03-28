//********** emitLastRepeaterElement
app.directive('dropDown', ["$rootScope", "$log", function($rootScope, $log) {
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
        templateUrl: 'js/directives/dropdown/dropdown.html',
        controller: function($scope, $rootScope){
			
			$scope.selectInFieldDD = function(e, id){
				e.stopPropagation()
				$rootScope.selectInField($scope.dropdownfieldselect, id);
			};

			$scope.dropDownFunctionProva = function(b) {
				$rootScope.dropDownFunction('toggle', b);
			};
			
			app.qlikDoc.createList({
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
					$scope.ABC = reply.qListObject.qDataPages[0].qMatrix;

					var count = _.countBy(_.flatten($scope.ABC), 'qState');
					$scope.totalSelected = Object.keys(count).length > 1 ? count.O : 0;
			});
      	
        }
    };
}]);


//********** End emitLastRepeaterElement