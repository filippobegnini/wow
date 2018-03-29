//********** home Controllers
app.controller( 'metricanalysisCtrl', function($scope, $rootScope, chartService, setUpService,$timeout) {		
	console.log('metricanalysis');

	chartService.modelKPI($rootScope.arrayKPIsMetricAnalysis);
	chartService.modelKPI($rootScope.arrayKPIsCommon);
	chartService.getObjectAndText($rootScope.arrayObjectMetricAnalysis[0].Type);

	$rootScope.summaryBreadCrub = true;
	$rootScope.breadcrumb = [
		{show:true, value:$rootScope.kraID},
		{show:true, value:"qsKPIma100_SubTitle"},
	];	

	$scope.chartActive = 'active';
	$scope.tableActive = '';
	$scope.weekActive = 'active';
	$scope.monthActive = '';
	var toggleWeekMonth='W';
	var toggleChartTable='C';
	$scope.DCsFullSize = $rootScope.arrayObjectMetricAnalysis[0].Type[1].qsObject;
	$scope.TrendFullSize = $rootScope.arrayObjectMetricAnalysis[0].Type[0].qsObject;	

	$scope.Toggle = function(id) {
		if (id == 'C') {
			if (toggleWeekMonth == 'W') {
				chartService.getObjectAndText($rootScope.arrayObjectMetricAnalysis[0].Type);
				$scope.chartActive = 'active';
				$scope.tableActive = '';
				$scope.weekActive = 'active';
				$scope.monthActive = '';
				$scope.DCsFullSize = $rootScope.arrayObjectMetricAnalysis[0].Type[1].qsObject;
				$scope.TrendFullSize = $rootScope.arrayObjectMetricAnalysis[0].Type[0].qsObject;
			};
			if (toggleWeekMonth == 'M') {
				chartService.getObjectAndText($rootScope.arrayObjectMetricAnalysis[2].Type);
				$scope.chartActive = 'active';
				$scope.tableActive = '';
				$scope.weekActive = '';
				$scope.monthActive = 'active';
				$scope.DCsFullSize = $rootScope.arrayObjectMetricAnalysis[2].Type[1].qsObject;
				$scope.TrendFullSize = $rootScope.arrayObjectMetricAnalysis[2].Type[0].qsObject;				
			};		
			toggleChartTable = id;	
		};
		if (id == 'T') {
			if (toggleWeekMonth == 'W') {
				chartService.getObjectAndText($rootScope.arrayObjectMetricAnalysis[1].Type);
				$scope.chartActive = '';
				$scope.tableActive = 'active';
				$scope.weekActive = 'active';
				$scope.monthActive = '';
				$scope.DCsFullSize = $rootScope.arrayObjectMetricAnalysis[1].Type[1].qsObject;
				$scope.TrendFullSize = $rootScope.arrayObjectMetricAnalysis[1].Type[0].qsObject;
			};
			if (toggleWeekMonth == 'M') {
				chartService.getObjectAndText($rootScope.arrayObjectMetricAnalysis[3].Type);
				$scope.chartActive = '';
				$scope.tableActive = 'active';
				$scope.weekActive = '';
				$scope.monthActive = 'active';
				$scope.DCsFullSize = $rootScope.arrayObjectMetricAnalysis[3].Type[1].qsObject;
				$scope.TrendFullSize = $rootScope.arrayObjectMetricAnalysis[3].Type[0].qsObject;
			};	
			toggleChartTable = id;		
		};	

		if (id == 'W') {
			if (toggleChartTable == 'C') {
				chartService.getObjectAndText($rootScope.arrayObjectMetricAnalysis[0].Type);
				$scope.chartActive = 'active';
				$scope.tableActive = '';
				$scope.weekActive = 'active';
				$scope.monthActive = '';
				$scope.DCsFullSize = $rootScope.arrayObjectMetricAnalysis[0].Type[1].qsObject;
				$scope.TrendFullSize = $rootScope.arrayObjectMetricAnalysis[0].Type[0].qsObject;
			};
			if (toggleChartTable == 'T') {
				chartService.getObjectAndText($rootScope.arrayObjectMetricAnalysis[1].Type);
				$scope.chartActive = '';
				$scope.tableActive = 'active';
				$scope.weekActive = 'active';
				$scope.monthActive = '';
				$scope.DCsFullSize = $rootScope.arrayObjectMetricAnalysis[1].Type[1].qsObject;
				$scope.TrendFullSize = $rootScope.arrayObjectMetricAnalysis[1].Type[0].qsObject;
			};		
			toggleWeekMonth = id;	
		};
		if (id == 'M') {
			if (toggleChartTable == 'C') {
				chartService.getObjectAndText($rootScope.arrayObjectMetricAnalysis[2].Type);
				$scope.chartActive = 'active';
				$scope.tableActive = '';
				$scope.weekActive = '';
				$scope.monthActive = 'active';
				$scope.DCsFullSize = $rootScope.arrayObjectMetricAnalysis[2].Type[1].qsObject;
				$scope.TrendFullSize = $rootScope.arrayObjectMetricAnalysis[2].Type[0].qsObject;
			};
			if (toggleChartTable == 'T') {
				chartService.getObjectAndText($rootScope.arrayObjectMetricAnalysis[3].Type);
				$scope.chartActive = '';
				$scope.tableActive = 'active';
				$scope.weekActive = '';
				$scope.monthActive = 'active';
				$scope.DCsFullSize = $rootScope.arrayObjectMetricAnalysis[3].Type[1].qsObject;
				$scope.TrendFullSize = $rootScope.arrayObjectMetricAnalysis[3].Type[0].qsObject;
			};	
			toggleWeekMonth = id;		
		};				
	};	

	$scope.maFullScreen = function(id) {
		console.log(id);
		$scope.fullScrrenArray = [
			{qsObjectID:'qsObjectFullScreen',	qsObject:id},
		];
		chartService.getObjectAndText($scope.fullScrrenArray);
		$timeout(function() { 
			$scope.displayErrorMsg = false;
			chartService.resize();
		}, 1000);
	};

});
//********** End Summary Controllers