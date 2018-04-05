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

				if(field){
					$scope.$emit('SELECT_FIELD', {
						'name': fieldName,
						'value': field.qText,
						'isSelected': field.qState === 'O'
					});
				}
			};

			app.qlikDoc.createCube({
				'qInitialDataFetch': [{
				  'qHeight': 50,
				  'qWidth': 2
				}],
				'qDimensions': [{
					'qDef': {
					  'qFieldDefs': [fieldName]
					},
					'qNullSuppression': true,
				  }],
				'qMeasures': [{
					'qDef': {
					  'qDef': 'count( {1< [LEVEL4_'+label+'] = {"1"} >} '+fieldName+')'
					}
				  }]
			  }, function(reply){
				  	$scope.listItems = reply.qHyperCube.qDataPages[0].qMatrix;
					
					  var count = _.countBy(_.flatten($scope.listItems), 'qState');
					$scope.totalSelected = count.S || 0;
			  });
        }
    };
}]);