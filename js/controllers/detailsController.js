//********** home Controllers
app.controller('detailsController', function ($scope, $log, $rootScope, chartService, qlikRegister) {
	$log.info('detailsController');

	$(document).ready(function () {
		//highlight this as the selected page
		$("#P1").addClass("active");
		$("#P1").siblings().removeClass("active");
	});

	$scope.$on('LastRepeaterElement', function(){
		chartService.getObject($rootScope.arrayObjectsPageOne);	
		chartService.modelKPI($rootScope.arrayKPIsCommon);
	});

	$scope.Level3Category = [
		{ Title: "Timeliness", Class: "L3BoxGreen L3Box", id: "DW01", qsListField: '=if(LEVEL4_Timeliness=1,LEVEL4_MeasureName)', qsFileldSelect: 'LEVEL4_MeasureName' },
		{ Title: "Completeness", Class: "L3BoxGreen L3Box", id: "DW02", qsListField: '=if(LEVEL4_Completeness=1,LEVEL4_MeasureName)', qsFileldSelect: 'LEVEL4_MeasureName' },
		{ Title: "Process Quality", Class: "L3BoxGreen L3Box", id: "DW03", qsListField: '=if([LEVEL4_Process Quality]=1,LEVEL4_MeasureName)', qsFileldSelect: 'LEVEL4_MeasureName' },
		{ Title: "Productivity", Class: "L3BoxGreen L3Box", id: "DW04", qsListField: '=if(LEVEL4_Productivity=1,LEVEL4_MeasureName)', qsFileldSelect: 'LEVEL4_MeasureName' },
		{ Title: "Capacity", Class: "L3BoxGreen L3Box", id: "DW05", qsListField: '=if(LEVEL4_Capacity=1,LEVEL4_MeasureName)', qsFileldSelect: 'LEVEL4_MeasureName' },
		{ Title: "Cost", Class: "L3BoxGreen L3Box", id: "DW06", qsListField: '=if(LEVEL4_Cost=1,LEVEL4_MeasureName)', qsFileldSelect: 'LEVEL4_MeasureName' },
		{ Title: "Volume", Class: "L3BoxGreen L3Box", id: "DW07", qsListField: '=if(LEVEL4_Volume=1,LEVEL4_MeasureName)', qsFileldSelect: 'LEVEL4_MeasureName' },
		{ Title: "People", Class: "L3BoxGreen L3Box", id: "DW08", qsListField: '=if(LEVEL4_People=1,LEVEL4_MeasureName)', qsFileldSelect: 'LEVEL4_MeasureName' }
	];

	$scope.driverObjects = qlikRegister.drivers;

	var selState = app.qlikDoc.selectionState();
    var onSelState = function () {
    	var driversSelected = 0;

        selections = this.selections;
        if (selections.length > 0) {
            $.each(selections, function (idx, val) {
                if(val.fieldName === 'LEVEL4_MeasureName'){
                	driversSelected = val.selectedCount;
                }
            });
        }

        $scope.totalDriversSelected = driversSelected;
    }

    selState.OnData.bind(onSelState);

	$scope.resetFilters = function(){
		$scope.setDisplay('chart');
		chartService.clear('LEVEL4_MeasureName');
	}

	$scope.setDisplay = function(type){
		$scope.displayMode = type;
	}

	$scope.resetFilters();
});
//********** End Summary Controllers