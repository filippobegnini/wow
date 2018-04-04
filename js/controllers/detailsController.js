//********** home Controllers
app.controller('detailsController', function ($scope, $log, $rootScope, defaults, chartService, qlikRegister, ToastEnum) {

	var L4MeasureFieldName;

	L4MeasureFieldName = qlikRegister.fields.L4MeasureFieldName;
	
	$(document).ready(function () {
		//highlight this as the selected page
		$("#P1").addClass("active");
		$("#P1").siblings().removeClass("active");
	});

	$scope.$on('LastRepeaterElement', function(){
		chartService.getObject($rootScope.arrayObjectsPageOne);	
		chartService.modelKPI($rootScope.arrayKPIsCommon);
	});

	$rootScope.togglePeriodShow = false;
	$rootScope.summaryBreadCrub = false;

	$scope.$on('SELECT_FIELD', function(e, field){
		if($scope.totalDriversSelected < defaults.metricCompareLimit || field.isSelected) {
			chartService.selectValues(field.name, field.value);
		} else {
			var metricLimitToast = {
				title: 'Warning!',
				message: 'You have reached the maximum of metrics allowed. Please unselect a metric to compare against a new one.',
				type: ToastEnum.WARNING,
				options: {
					closeDelay: 5000
				}
			}

			$scope.$emit('NOTIFICATION', metricLimitToast);
		}
	});

	$scope.driverObjects = qlikRegister.drivers;
	$scope.metricCompareLimit = defaults.metricCompareLimit;
	$scope.L4MeasureFieldName = L4MeasureFieldName;

	/*************************************************************
	// START - Uncomment when Drivers table is ready in application
	*************************************************************/
	// chartService.getTable('qs-driver-table', 'tDfFG', function(res){
	// 	$scope.Level3Category = $.map(res, function(item){
	// 		return {
	// 			Title: item[0].qText,
	// 			Color: item[1].qText
	// 		}
	// 	});
	// });
	/*************************************************************
	// END - Uncomment when Drivers table is ready in application
	*************************************************************/

	/*************************************************************
	// START - Delete when Drivers table is ready in application
	*************************************************************/
	var mockResponseGetTableDrivers = [
		[
			{qText: "Timeliness", qNum: "NaN", qElemNumber: 33, qState: "O"},
			{qText: "#94c548", qNum: "NaN", qElemNumber: 33, qState: "O"}
		],
		[
			{qText: "Completeness", qNum: "NaN", qElemNumber: 34, qState: "O"},
			{qText: "#94c548", qNum: "NaN", qElemNumber: 34, qState: "O"}
		],
		[
			{qText: "Process Quality", qNum: "NaN", qElemNumber: 35, qState: "O"},
			{qText: "#e43644", qNum: "NaN", qElemNumber: 35, qState: "O"}
		],
		[
			{qText: "Productivity", qNum: "NaN", qElemNumber: 36, qState: "O"},
			{qText: "#f59735", qNum: "NaN", qElemNumber: 36, qState: "O"}
		],
		[
			{qText: "Capacity", qNum: "NaN", qElemNumber: 37, qState: "O"},
			{qText: "#e43644", qNum: "NaN", qElemNumber: 37, qState: "O"}
		],
		[
			{qText: "Cost", qNum: "NaN", qElemNumber: 38, qState: "O"},
			{qText: "#94c548", qNum: "NaN", qElemNumber: 38, qState: "O"}
		],
		[
			{qText: "Volume", qNum: "NaN", qElemNumber: 39, qState: "O"},
			{qText: "#f59735", qNum: "NaN", qElemNumber: 39, qState: "O"}
		],
		[
			{qText: "People", qNum: "NaN", qElemNumber: 40, qState: "O"},
			{qText: "#94c548", qNum: "NaN", qElemNumber: 40, qState: "O"}
		]
	]

	$scope.Level3Category = $.map(mockResponseGetTableDrivers, function(item){
		return {
			Title: item[0].qText,
			Color: item[1].qText
		}
	});

	/*************************************************************
	// END - Delete when Drivers table is ready in application
	*************************************************************/

	var selState = app.qlikDoc.selectionState();
    var onSelState = function () {
    	var driversSelected = 0;

        selections = this.selections;
        if (selections.length > 0) {
            $.each(selections, function (idx, val) {
                if(val.fieldName === L4MeasureFieldName){
                	driversSelected = val.selectedCount;
                }
            });
        }

		$scope.totalDriversSelected = driversSelected;
		app.qlik.resize();
    }

    selState.OnData.bind(onSelState);

	$scope.resetFilters = function(){
		$scope.setDisplay('chart');
		chartService.clear(L4MeasureFieldName);
	}

	$scope.setDisplay = function(type){
		$scope.displayMode = type;
	}

	$scope.setDisplay('chart');
});
//********** End Summary Controllers