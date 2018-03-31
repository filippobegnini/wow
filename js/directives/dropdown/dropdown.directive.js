app.directive('dropDown', ["$rootScope", "$log", function($rootScope, $log) {
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
        controller: function($scope, chartService){
			
			$scope.selectInFieldDD = function(e, field){
				e.stopPropagation();
				
				$scope.$emit('SELECT_FIELD', {
					'name': $scope.dropdownfieldselect,
					'value': field.qText,
					'isSelected': field.qState === 'O'
				});
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