//********** home Controllers
app.controller( 'metricanalysisCtrl', function($scope, $rootScope, chartService) {		
	console.log('metricanalysis');

	chartService.modelKPI($rootScope.arrayKPIsMetricAnalysis);
	chartService.modelKPI($rootScope.arrayKPIsCommon);
	
	// $rootScope.MetricAnalysis = [
	// 		{
	// 			MetricTitle:"qsKPIma100_SubTitle",
	// 			MetricLabel:"qsKPIma100_0Title",
	// 			Metric:"qsKPIma100_0",
	// 			MetricClass:"qsKPIma100Class_1",	
	// 			MetricClassObj:"qsKPIma100Class",		
	// 			Obj:"qsKPIma100",

	// 			MetricTarget:"qsKPIma101_0",
	// 			ObjTarget:"qsKPIma101",
	// 			MetricTargetChange:"qsKPIma101_1",	

	// 			MetricPCP:"qsKPIma102_0",
	// 			ObjPCP:"qsKPIma102",
	// 			MetricPCPChange:"qsKPIma102_1",

	// 			IMG:"IMG/IMGsafety.png",	
	// 		}
	// ];

});
//********** End Summary Controllers