//********** home Controllers
app.controller('detailsController', function ($scope, $log, $rootScope, defaults, chartService, qlikRegister, ToastEnum, setUpService) {
	$rootScope.controllerName = 'detailsController';

	var L4MeasureFieldName;

	L4MeasureFieldName = qlikRegister.fields.L4MeasureFieldName;
	
	$(document).ready(function () {
		//highlight this as the selected page
		$("#P1").addClass("active");
		$("#P1").siblings().removeClass("active");
	});

	$scope.$on('LastRepeaterElement', function(){
		// chartService.getObject($rootScope.arrayObjectsPageOne);	
		
	});
	chartService.modelKPI($rootScope.arrayKPIsCommon);
	

	$rootScope.togglePeriodShow = false;
	$rootScope.summaryBreadCrub = true;

	if ($rootScope.kraID == 99) {
		$rootScope.summaryBreadCrub = false;		
	};

	chartService.getDataField('MeasureID', function(res){
		if (res.stateCounts.qSelected == 0 && $rootScope.controllerName == 'detailsController') {
			$rootScope.summaryBreadCrub = false;		
		};
	});

	if ($rootScope.kraID == 98) {
		$rootScope.breadcrumb = [
			{show:false, value:"KRA[kraID].MetricLabel"},			
			{show:true, value:"qsKPIma100_SubTitle"},
		];		
	} else {
		$rootScope.breadcrumb = [
			{show:true, value:"KRA[kraID].MetricLabel"},			
			{show:true, value:"qsKPIma100_SubTitle"},
		];
	};	

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

	chartService.getTable('qs-driver-table-colour', 'DpukYjD', function(res){
		$scope.Level3Category = $.map(res, function(item){
			return {
				Title: item[0].qText,
				Color: item[1].qText
			}
		});
	});

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