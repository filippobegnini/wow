//********** home Controllers
app.controller( 'kraCtrl', function($scope, $rootScope, chartService, $location, setUpService) {		
	$rootScope.controllerName = 'kraCtrl';
	console.log('kra');

	$scope.$on('LastRepeaterElement', function(){
		chartService.modelKPI($rootScope.arrayKPIsKRA);
		chartService.modelKPI($rootScope.arrayKPIsCommon);
		chartService.getObject($rootScope.arrayObjectsKRA);
		chartService.coloursKPI($rootScope.arrayColoursKPI);		
	});	
	
	console.log($rootScope.kraID);

	if ($rootScope.kraID == 99) {
		$location.path('home');
	};	

	chartService.clear('LEVEL4_MeasureName');
	chartService.clear('LEVEL4_MeasureID');		
	chartService.clear('MeasureID');

	$rootScope.togglePeriodShow = true;
	$rootScope.summaryBreadCrub = true;
	$rootScope.breadcrumb = [
		{show:true, value:"KRA[kraID].MetricLabel"},
		{show:false, value:""},
	];	

$rootScope.KRA = [
		{
			MetricTitle:"qsKPIkra100_SubTitle",
			MetricLabel:"qsKPIkra100_Title",
			Metric:"qsKPIkra100_0",
			MetricClass:"qsKPIhome100Class_1",	
			MetricClassObj:"qsKPIhome300Class",		
			Obj:"qsKPIkra100",

			MetricTarget:"qsKPIkra101_0",
			ObjTarget:"qsKPIkra101",
			MetricTargetChange:"qsKPIkra101_1",	

			MetricPCP:"qsKPIkra102_0",
			ObjPCP:"qsKPIkra102",
			MetricPCPChange:"qsKPIkra102_1",

			IMG:"IMG/IMGsafety.png",
			Trend:"qsObjectKRA100",
			SubMetric:[
				{
					SubMetricTitle:"qsKPIkra110_Title",
					SubMetric:"qsKPIkra110_0", 
					SubMetricObj:"qsKPIkra110",
					SubMetricTrend:"qsObjectKRA110",
					SubMetricTargetClass:"qsKPIhome110Class_1",
					SubMetricTargetClassObj:"qsKPIhome110Class",					

					SubMetricTarget:"qsKPIkra111_0",
					SubMetricObjTarget:"qsKPIkra111",
					SubMetricTargetChange:"qsKPIkra111_1",

					SubMetricPCP:"qsKPIkra112_0",
					SubMetricObjPCP:"qsKPIkra112",
					SubMetricPCPChange:"qsKPIkra112_1",
					
					SubMetricClick:"11",
				},
				{
					SubMetricTitle:"qsKPIkra120_Title",
					SubMetric:"qsKPIkra120_0", 
					SubMetricObj:"qsKPIkra120",
					SubMetricTrend:"qsObjectKRA120",
					SubMetricTargetClass:"qsKPIhome120Class_1",
					SubMetricTargetClassObj:"qsKPIhome120Class",					

					SubMetricTarget:"qsKPIkra121_0",
					SubMetricObjTarget:"qsKPIkra121",
					SubMetricTargetChange:"qsKPIkra121_1",

					SubMetricPCP:"qsKPIkra122_0",
					SubMetricObjPCP:"qsKPIkra122",
					SubMetricPCPChange:"qsKPIkra122_1",
					
					SubMetricClick:"10",
				},
			],
			boxClass:"boxSafety",
		},	
		{
			Title:"qsKPIkra200_Title",			
			MetricTitle:"qsKPIkra200_SubTitle",
			MetricLabel:"qsKPIkra200_Title",
			Metric:"qsKPIkra200_0",
			MetricClass:"qsKPIhome200Class_1",	
			MetricClassObj:"qsKPIhome200Class",		
			Obj:"qsKPIkra200",

			MetricTarget:"qsKPIkra201_0",
			ObjTarget:"qsKPIkra201",
			MetricTargetChange:"qsKPIkra201_1",	

			MetricPCP:"qsKPIkra202_0",
			ObjPCP:"qsKPIkra202",
			MetricPCPChange:"qsKPIkra202_1",

			IMG:"IMG/IMGcost.png",
			Trend:"qsObjectKRA200",
			MetricClick:"",
			SubMetric:[
				{
					SubMetricTitle:"qsKPIkra210_Title",
					SubMetric:"qsKPIkra210_0", 
					SubMetricObj:"qsKPIkra210",
					SubMetricTrend:"qsObjectKRA210",
					SubMetricTargetClass:"qsKPIhome210Class_1",
					SubMetricTargetClassObj:"qsKPIhome210Class",					

					SubMetricTarget:"qsKPIkra211_0",
					SubMetricObjTarget:"qsKPIkra211",
					SubMetricTargetChange:"qsKPIkra211_1",

					SubMetricPCP:"qsKPIkra212_0",
					SubMetricObjPCP:"qsKPIkra212",
					SubMetricPCPChange:"qsKPIkra212_1",
					
					SubMetricClick:"5",
				},
				{
					SubMetricTitle:"qsKPIkra220_Title",
					SubMetric:"qsKPIkra220_0", 
					SubMetricObj:"qsKPIkra220",
					SubMetricTrend:"qsObjectKRA220",
					SubMetricTargetClass:"qsKPIhome220Class_1",
					SubMetricTargetClassObj:"qsKPIhome220Class",					

					SubMetricTarget:"qsKPIkra221_0",
					SubMetricObjTarget:"qsKPIkra221",
					SubMetricTargetChange:"qsKPIkra221_1",

					SubMetricPCP:"qsKPIkra222_0",
					SubMetricObjPCP:"qsKPIkra222",
					SubMetricPCPChange:"qsKPIkra222_1",
					
					SubMetricClick:"6",
				},
				{
					SubMetricTitle:"qsKPIkra230_Title",
					SubMetric:"qsKPIkra230_0", 
					SubMetricObj:"qsKPIkra230",
					SubMetricTrend:"qsObjectKRA230",
					SubMetricTargetClass:"qsKPIhome230Class_1",
					SubMetricTargetClassObj:"qsKPIhome230Class",					

					SubMetricTarget:"qsKPIkra231_0",
					SubMetricObjTarget:"qsKPIkra231",
					SubMetricTargetChange:"qsKPIkra231_1",

					SubMetricPCP:"qsKPIkra232_0",
					SubMetricObjPCP:"qsKPIkra232",
					SubMetricPCPChange:"qsKPIkra232_1",
					
					SubMetricClick:"7",
				},
				{
					SubMetricTitle:"qsKPIkra240_Title",
					SubMetric:"qsKPIkra240_0", 
					SubMetricObj:"qsKPIkra240",
					SubMetricTrend:"qsObjectKRA240",
					SubMetricTargetClass:"qsKPIhome240Class_1",
					SubMetricTargetClassObj:"qsKPIhome240Class",					

					SubMetricTarget:"qsKPIkra241_0",
					SubMetricObjTarget:"qsKPIkra241",
					SubMetricTargetChange:"qsKPIkra241_1",

					SubMetricPCP:"qsKPIkra242_0",
					SubMetricObjPCP:"qsKPIkra242",
					SubMetricPCPChange:"qsKPIkra242_1",
					
					SubMetricClick:"8",
				},
				{
					SubMetricTitle:"qsKPIkra250_Title",
					SubMetric:"qsKPIkra250_0", 
					SubMetricObj:"qsKPIkra250",
					SubMetricTrend:"qsObjectKRA250",
					SubMetricTargetClass:"qsKPIhome250Class_1",
					SubMetricTargetClassObj:"qsKPIhome250Class",					

					SubMetricTarget:"qsKPIkra251_0",
					SubMetricObjTarget:"qsKPIkra251",
					SubMetricTargetChange:"qsKPIkra251_1",

					SubMetricPCP:"qsKPIkra252_0",
					SubMetricObjPCP:"qsKPIkra252",
					SubMetricPCPChange:"qsKPIkra252_1",
					
					SubMetricClick:"9",
				},											
			],
		},	
		{
			MetricTitle:"qsKPIkra300_SubTitle",
			MetricLabel:"qsKPIkra300_Title",
			Metric:"qsKPIkra300_0",
			MetricClass:"qsKPIhome300Class_1",	
			MetricClassObj:"qsKPIhome300Class",		
			Obj:"qsKPIkra300",

			MetricTarget:"qsKPIkra301_0",
			ObjTarget:"qsKPIkra301",
			MetricTargetChange:"qsKPIkra301_1",	

			MetricPCP:"qsKPIkra302_0",
			ObjPCP:"qsKPIkra302",
			MetricPCPChange:"qsKPIkra302_1",

			IMG:"IMG/IMGservice.png",
			Trend:"qsObjectKRA300",
			SubMetric:[
				{
					SubMetricTitle:"qsKPIkra310_Title",
					SubMetric:"qsKPIkra310_0", 
					SubMetricObj:"qsKPIkra310",
					SubMetricTrend:"qsObjectKRA310",
					SubMetricTargetClass:"qsKPIhome310Class_1",
					SubMetricTargetClassObj:"qsKPIhome310Class",					

					SubMetricTarget:"qsKPIkra311_0",
					SubMetricObjTarget:"qsKPIkra311",
					SubMetricTargetChange:"qsKPIkra311_1",

					SubMetricPCP:"qsKPIkra312_0",
					SubMetricObjPCP:"qsKPIkra312",
					SubMetricPCPChange:"qsKPIkra312_1",
					
					SubMetricClick:"12",
				},
				{
					SubMetricTitle:"qsKPIkra320_Title",
					SubMetric:"qsKPIkra320_0", 
					SubMetricObj:"qsKPIkra320",
					SubMetricTrend:"qsObjectKRA320",
					SubMetricTargetClass:"qsKPIhome320Class_1",
					SubMetricTargetClassObj:"qsKPIhome320Class",					

					SubMetricTarget:"qsKPIkra321_0",
					SubMetricObjTarget:"qsKPIkra321",
					SubMetricTargetChange:"qsKPIkra321_1",

					SubMetricPCP:"qsKPIkra322_0",
					SubMetricObjPCP:"qsKPIkra322",
					SubMetricPCPChange:"qsKPIkra322_1",
					
					SubMetricClick:"13",
				},
				{
					SubMetricTitle:"qsKPIkra330_Title",
					SubMetric:"qsKPIkra330_0", 
					SubMetricObj:"qsKPIkra330",
					SubMetricTrend:"qsObjectKRA330",
					SubMetricTargetClass:"qsKPIhome330Class_1",
					SubMetricTargetClassObj:"qsKPIhome330Class",					

					SubMetricTarget:"qsKPIkra331_0",
					SubMetricObjTarget:"qsKPIkra331",
					SubMetricTargetChange:"qsKPIkra331_1",

					SubMetricPCP:"qsKPIkra332_0",
					SubMetricObjPCP:"qsKPIkra332",
					SubMetricPCPChange:"qsKPIkra332_1",
					
					SubMetricClick:"14",
				},
			],
			boxClass:"boxService",
		},									
	];			

});
//********** End Summary Controllers