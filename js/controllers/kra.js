//********** home Controllers
app.obj.mashupTemplateApp.controller( 'kraCtrl', function($scope, $rootScope, servicesLibrary, setUp) {		
	console.log('kra');

	$scope.$on('LastRepeaterElement', function(){
		servicesLibrary.modelKPI($rootScope.arrayKPIsKRA);
		servicesLibrary.modelKPI($rootScope.arrayKPIsCommon);
		servicesLibrary.getObject($rootScope.arrayObjectsKRA);
		servicesLibrary.coloursKPI($rootScope.arrayColoursKPI);		
	});		


$rootScope.KRA = [
		{
			MetricTitle:"qsKPIkra100_SubTitle",
			MetricLabel:"qsKPIkra100_0Title",
			Metric:"qsKPIkra100_0",
			MetricClass:"qsKPIkra100Class_1",	
			MetricClassObj:"qsKPIkra100Class",		
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
					SubMetricTitle:"qsKPIhome110_Title",
					SubMetricLabel:"qsKPIhome110_0Title",
					SubMetric:"qsKPIhome110_0", 
					SubMetricClass:"qsKPIhome110Class_1",			
					SubMetricObj:"qsKPIhome110",
					SubMetricClassObj:"qsKPIhome110Class",
					SubMetricCompareLabel:"qsKPIhome111_0Title",
					SubMetricCompare:"qsKPIhome111_0",
					SubMetricObjCompare:"qsKPIhome111",
					SubMetricDeltaLabel:"qsKPIhome111_1Title",
					SubMetricDelta:"qsKPIhome111_1",						
					SubMetricClick:"11"
				},
				{
					SubMetricTitle:"qsKPIhome120_Title",
					SubMetricLabel:"qsKPIhome120_0Title",
					SubMetric:"qsKPIhome120_0", 
					SubMetricClass:"qsKPIhome120Class_1",			
					SubMetricObj:"qsKPIhome120",
					SubMetricClassObj:"qsKPIhome120Class",
					SubMetricCompareLabel:"qsKPIhome121_0Title",
					SubMetricCompare:"qsKPIhome121_0",
					SubMetricObjCompare:"qsKPIhome121",
					SubMetricDeltaLabel:"qsKPIhome121_1Title",
					SubMetricDelta:"qsKPIhome121_1",						
					SubMetricClick:"38"
				},
			],
			boxClass:"boxSafety",
		},	
		{
			Title:"qsKPIkra200_Title",			
			MetricTitle:"qsKPIkra200_SubTitle",
			MetricLabel:"qsKPIkra200_0Title",
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
					
					SubMetricClick:"5",
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
					
					SubMetricClick:"5",
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
					
					SubMetricClick:"5",
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
					
					SubMetricClick:"5",
				},											
			],
		},	
		{
			MetricTitle:"qsKPIkra300_SubTitle",
			MetricLabel:"qsKPIkra300_0Title",
			Metric:"qsKPIkra300_0",
			MetricClass:"qsKPIkra300Class_1",	
			MetricClassObj:"qsKPIkra300Class",		
			Obj:"qsKPIkra300",

			MetricTarget:"qsKPIkra301_0",
			ObjTarget:"qsKPIkra301",
			MetricTargetChange:"qsKPIkra301_1",	

			MetricPCP:"qsKPIkra302_0",
			ObjPCP:"qsKPIkra302",
			MetricPCPChange:"qsKPIkra302_1",

			IMG:"IMG/IMGservice.png",
			SubMetric:[
				{
					SubMetricTitle:"qsKPIkra310_Title",
					SubMetricLabel:"qsKPIkra310_0Title",
					SubMetric:"qsKPIkra310_0", 
					SubMetricClass:"qsKPIkra310Class_1",			
					SubMetricObj:"qsKPIkra310",
					SubMetricClassObj:"qsKPIkra310Class",
					SubMetricCompareLabel:"qsKPIkra311_0Title",
					SubMetricCompare:"qsKPIkra311_0",
					SubMetricObjCompare:"qsKPIkra311",
					SubMetricDeltaLabel:"qsKPIkra311_1Title",
					SubMetricDelta:"qsKPIkra311_1",						
					SubMetricClick:"12"
				},
				{
					SubMetricTitle:"qsKPIkra320_Title",
					SubMetricLabel:"qsKPIkra320_0Title",
					SubMetric:"qsKPIkra320_0", 
					SubMetricClass:"qsKPIkra320Class_1",			
					SubMetricObj:"qsKPIkra320",
					SubMetricClassObj:"qsKPIkra320Class",
					SubMetricCompareLabel:"qsKPIkra321_0Title",
					SubMetricCompare:"qsKPIkra321_0",
					SubMetricObjCompare:"qsKPIkra321",
					SubMetricDeltaLabel:"qsKPIkra321_1Title",
					SubMetricDelta:"qsKPIkra321_1",						
					SubMetricClick:"13"
				},
				{
					SubMetricTitle:"qsKPIkra330_Title",
					SubMetricLabel:"qsKPIkra330_0Title",
					SubMetric:"qsKPIkra330_0", 
					SubMetricClass:"qsKPIkra330Class_1",			
					SubMetricObj:"qsKPIkra330",
					SubMetricClassObj:"qsKPIkra330Class",
					SubMetricCompareLabel:"qsKPIkra331_0Title",
					SubMetricCompare:"qsKPIkra331_0",
					SubMetricObjCompare:"qsKPIkra331",					
					SubMetricDeltaLabel:"qsKPIkra331_1Title",
					SubMetricDelta:"qsKPIkra331_1",						
					SubMetricClick:"14"
				},
			],
			boxClass:"boxService",
		},									
	];			

});
//********** End Summary Controllers