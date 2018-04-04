app.directive('dropDown', ["$rootScope", "$log", function($rootScope, $log) {
    return {
        restrict : 'E',
        scope: {
        	label: '=',
			fieldName: '=',
			color: '=',
			selected: '='
        },
        templateUrl: 'js/directives/dropdown/dropdown.html',
        controller: function($scope, chartService){

			var label, fieldName;

			label = $scope.label;
			fieldName = $scope.fieldName;
			
			$scope.selectInFieldDD = function(e, field){
				e.stopPropagation();
				
				$scope.$emit('SELECT_FIELD', {
					'name': fieldName,
					'value': field.qText,
					'isSelected': field.qState === 'O'
				});
			};

			var qFieldDefs = '=if([LEVEL4_'+label+']=1,'+fieldName+')';

			app.qlikDoc.createList({
				"qDef": {
					"qFieldDefs": [qFieldDefs]
				},
				"qInitialDataFetch": [{
					qTop : 0,
					qLeft : 0,
					qHeight : 500,
					qWidth : 5
					}]
				}, function(reply) {
					$scope.ABC = reply.qListObject.qDataPages[0].qMatrix;

					var count = _.countBy(_.flatten($scope.ABC), 'qState');

					console.log('list',label, $scope.ABC, 'count',count, 'selected',$scope.selected);
					
					$scope.totalSelected = Object.keys(count).length > 1 ? count.O : 0;
			});
        }
    };
}]);