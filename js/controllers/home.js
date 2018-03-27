//********** home Controllers
app.obj.mashupTemplateApp.controller( 'homeCtrl', function($scope, $rootScope, servicesLibrary, setUp) {		
	console.log('home');

	$(document).ready(function(){
		//highlight this as the selected page
		$("#P0").addClass("active");
		$("#P0").siblings().removeClass("active"); 

		//clear selections from the detail page
		servicesLibrary.clear('LEVEL4_MeasureName');

		//show toggle buttons
		$("#toggleButtons").show();
	});	

	$scope.$on('LastRepeaterElement', function(){
		servicesLibrary.modelKPI($rootScope.arrayKPIs);
		servicesLibrary.modelKPI($rootScope.arrayKPIsCommon);
		servicesLibrary.getObject($rootScope.arrayObjects);	
		servicesLibrary.coloursKPI($rootScope.arrayColoursKPI);
	});	

	$rootScope.Summary = [
		{
	      Title:"qsKPIhome100_Title",     
	      MetricTitle:"qsKPIhome100_SubTitle",
	      MetricLabel:"qsKPIhome100_0Title",
	      Metric:"qsKPIhome100_0",
	      MetricDial:"qsObjectHome101",
	      MetricClass:"qsKPIhome100Class_1",  
	      MetricClassObj:"qsKPIhome100Class",   
	      Obj:"qsKPIhome100",

	      MetricTarget:"qsKPIhome101_0",
	      ObjTarget:"qsKPIhome101",
	      MetricTargetChange:"qsKPIhome101_1",  

	      MetricPCP:"qsKPIhome102_0",
	      ObjPCP:"qsKPIhome102",
	      MetricPCPChange:"qsKPIhome102_1",
	      MetricPCPVis:"qsObjectHome102",

	      IMG:"IMG/IMGcost.png",
	      Trend:"qsObjectHome100",
	      MetricClick:"0",
			SubMetric:[
				{
					SubMetricTitle:"qsKPIhome110_Title",
					SubMetric:"qsKPIhome110_0", 
					SubMetricObj:"qsKPIhome110",
					SubMetricTrend:"qsObjecthome110",
					SubMetricTargetClass:"qsKPIhome110Class_1",
					SubMetricTargetClassObj:"qsKPIhome110Class",          

					SubMetricTarget:"qsKPIhome111_0",
					SubMetricObjTarget:"qsKPIhome111",
					SubMetricTargetChange:"qsKPIhome111_1",

					SubMetricPCP:"qsKPIhome112_0",
					SubMetricObjPCP:"qsKPIhome112",
					SubMetricPCPChange:"qsKPIhome112_1",

					SubMetricClick:"5",
				},
				{
					SubMetricTitle:"qsKPIhome120_Title",
					SubMetric:"qsKPIhome120_0", 
					SubMetricObj:"qsKPIhome120",
					SubMetricTrend:"qsObjecthome120",
					SubMetricTargetClass:"qsKPIhome120Class_1",
					SubMetricTargetClassObj:"qsKPIhome120Class",          

					SubMetricTarget:"qsKPIhome121_0",
					SubMetricObjTarget:"qsKPIhome121",
					SubMetricTargetChange:"qsKPIhome121_1",

					SubMetricPCP:"qsKPIhome122_0",
					SubMetricObjPCP:"qsKPIhome122",
					SubMetricPCPChange:"qsKPIhome122_1",

					SubMetricClick:"5",
				},
			],
			boxClass:"boxSafety",
		},	
	    {
	      Title:"qsKPIhome200_Title",     
	      MetricTitle:"qsKPIhome200_SubTitle",
	      MetricLabel:"qsKPIhome200_0Title",
	      Metric:"qsKPIhome200_0",
	      MetricDial:"qsObjectHome201",
	      MetricClass:"qsKPIhome200Class_1",  
	      MetricClassObj:"qsKPIhome200Class",   
	      Obj:"qsKPIhome200",

	      MetricTarget:"qsKPIhome201_0",
	      ObjTarget:"qsKPIhome201",
	      MetricTargetChange:"qsKPIhome201_1",  

	      MetricPCP:"qsKPIhome202_0",
	      ObjPCP:"qsKPIhome202",
	      MetricPCPChange:"qsKPIhome202_1",
	      MetricPCPVis:"qsObjectHome202",

	      IMG:"IMG/IMGcost.png",
	      Trend:"qsObjectHome200",
	      MetricClick:"1",
	      SubMetric:[
		        {
		          SubMetricTitle:"qsKPIhome210_Title",
		          SubMetric:"qsKPIhome210_0", 
		          SubMetricObj:"qsKPIhome210",
		          SubMetricTrend:"qsObjecthome210",
		          SubMetricTargetClass:"qsKPIhome210Class_1",
		          SubMetricTargetClassObj:"qsKPIhome210Class",          

		          SubMetricTarget:"qsKPIhome211_0",
		          SubMetricObjTarget:"qsKPIhome211",
		          SubMetricTargetChange:"qsKPIhome211_1",

		          SubMetricPCP:"qsKPIhome212_0",
		          SubMetricObjPCP:"qsKPIhome212",
		          SubMetricPCPChange:"qsKPIhome212_1",
		          
		          SubMetricClick:"5",
		        },
		        {
		          SubMetricTitle:"qsKPIhome220_Title",
		          SubMetric:"qsKPIhome220_0", 
		          SubMetricObj:"qsKPIhome220",
		          SubMetricTrend:"qsObjecthome220",
		          SubMetricTargetClass:"qsKPIhome220Class_1",
		          SubMetricTargetClassObj:"qsKPIhome220Class",          

		          SubMetricTarget:"qsKPIhome221_0",
		          SubMetricObjTarget:"qsKPIhome221",
		          SubMetricTargetChange:"qsKPIhome221_1",

		          SubMetricPCP:"qsKPIhome222_0",
		          SubMetricObjPCP:"qsKPIhome222",
		          SubMetricPCPChange:"qsKPIhome222_1",
		          
		          SubMetricClick:"5",
		        },
		        {
		          SubMetricTitle:"qsKPIhome230_Title",
		          SubMetric:"qsKPIhome230_0", 
		          SubMetricObj:"qsKPIhome230",
		          SubMetricTrend:"qsObjecthome230",
		          SubMetricTargetClass:"qsKPIhome230Class_1",
		          SubMetricTargetClassObj:"qsKPIhome230Class",          

		          SubMetricTarget:"qsKPIhome231_0",
		          SubMetricObjTarget:"qsKPIhome231",
		          SubMetricTargetChange:"qsKPIhome231_1",

		          SubMetricPCP:"qsKPIhome232_0",
		          SubMetricObjPCP:"qsKPIhome232",
		          SubMetricPCPChange:"qsKPIhome232_1",
		          
		          SubMetricClick:"5",
		        },
		        {
		          SubMetricTitle:"qsKPIhome240_Title",
		          SubMetric:"qsKPIhome240_0", 
		          SubMetricObj:"qsKPIhome240",
		          SubMetricTrend:"qsObjecthome240",
		          SubMetricTargetClass:"qsKPIhome240Class_1",
		          SubMetricTargetClassObj:"qsKPIhome240Class",          

		          SubMetricTarget:"qsKPIhome241_0",
		          SubMetricObjTarget:"qsKPIhome241",
		          SubMetricTargetChange:"qsKPIhome241_1",

		          SubMetricPCP:"qsKPIhome242_0",
		          SubMetricObjPCP:"qsKPIhome242",
		          SubMetricPCPChange:"qsKPIhome242_1",
		          
		          SubMetricClick:"5",
		        },
		        {
					SubMetricTitle:"qsKPIhome250_Title",
					SubMetric:"qsKPIhome250_0", 
					SubMetricObj:"qsKPIhome250",
					SubMetricTrend:"qsObjecthome250",
					SubMetricTargetClass:"qsKPIhome250Class_1",
					SubMetricTargetClassObj:"qsKPIhome250Class",          

					SubMetricTarget:"qsKPIhome251_0",
					SubMetricObjTarget:"qsKPIhome251",
					SubMetricTargetChange:"qsKPIhome251_1",

					SubMetricPCP:"qsKPIhome252_0",
					SubMetricObjPCP:"qsKPIhome252",
					SubMetricPCPChange:"qsKPIhome252_1",

					SubMetricClick:"5",
		        },                      
	      ],
	    },	
		{
	      Title:"qsKPIhome300_Title",     
	      MetricTitle:"qsKPIhome300_SubTitle",
	      MetricLabel:"qsKPIhome300_0Title",
	      Metric:"qsKPIhome300_0",
	      MetricDial:"qsObjectHome301",
	      MetricClass:"qsKPIhome300Class_1",  
	      MetricClassObj:"qsKPIhome300Class",   
	      Obj:"qsKPIhome300",

	      MetricTarget:"qsKPIhome301_0",
	      ObjTarget:"qsKPIhome301",
	      MetricTargetChange:"qsKPIhome301_1",  

	      MetricPCP:"qsKPIhome302_0",
	      ObjPCP:"qsKPIhome302",
	      MetricPCPChange:"qsKPIhome302_1",
	      MetricPCPVis:"qsObjectHome302",

	      IMG:"IMG/IMGcost.png",
	      Trend:"qsObjectHome300",
	      MetricClick:"0",
			SubMetric:[
		        {
					SubMetricTitle:"qsKPIhome310_Title",
					SubMetric:"qsKPIhome310_0", 
					SubMetricObj:"qsKPIhome310",
					SubMetricTrend:"qsObjecthome310",
					SubMetricTargetClass:"qsKPIhome310Class_1",
					SubMetricTargetClassObj:"qsKPIhome310Class",          

					SubMetricTarget:"qsKPIhome311_0",
					SubMetricObjTarget:"qsKPIhome311",
					SubMetricTargetChange:"qsKPIhome311_1",

					SubMetricPCP:"qsKPIhome312_0",
					SubMetricObjPCP:"qsKPIhome312",
					SubMetricPCPChange:"qsKPIhome312_1",

					SubMetricClick:"5",
		        },
				{
					SubMetricTitle:"qsKPIhome320_Title",
					SubMetric:"qsKPIhome320_0", 
					SubMetricObj:"qsKPIhome320",
					SubMetricTrend:"qsObjecthome320",
					SubMetricTargetClass:"qsKPIhome320Class_1",
					SubMetricTargetClassObj:"qsKPIhome320Class",          

					SubMetricTarget:"qsKPIhome321_0",
					SubMetricObjTarget:"qsKPIhome321",
					SubMetricTargetChange:"qsKPIhome321_1",

					SubMetricPCP:"qsKPIhome322_0",
					SubMetricObjPCP:"qsKPIhome322",
					SubMetricPCPChange:"qsKPIhome322_1",

					SubMetricClick:"5",
				},
				{
					SubMetricTitle:"qsKPIhome330_Title",
					SubMetric:"qsKPIhome330_0", 
					SubMetricObj:"qsKPIhome330",
					SubMetricTrend:"qsObjecthome330",
					SubMetricTargetClass:"qsKPIhome330Class_1",
					SubMetricTargetClassObj:"qsKPIhome330Class",          

					SubMetricTarget:"qsKPIhome331_0",
					SubMetricObjTarget:"qsKPIhome331",
					SubMetricTargetChange:"qsKPIhome331_1",

					SubMetricPCP:"qsKPIhome332_0",
					SubMetricObjPCP:"qsKPIhome332",
					SubMetricPCPChange:"qsKPIhome332_1",

					SubMetricClick:"5",
				},
			],
			boxClass:"boxService",
		},									
	];		

	$rootScope.HomePopUpCharts = [
		{ChartID:"qsObjectHomePopUpDC", ChartDropDown:"hidden", CustomLegend:"hidden", id:""},
		{ChartID:"qsObjectHomePopUpMonthly", ChartDropDown:"hidden", CustomLegend:"hidden", id:""},
		{ChartID:"qsObjectHomePopUpWeekly", ChartDropDown:"hidden", CustomLegend:"hidden", id:""},
		{ChartID:"qsObjectHomePopUpDrivers", ChartDropDown:"show", CustomLegend:"show", id:"DW00"},		
	];

	$("#sidebarCollapse").click(function(){
		servicesLibrary.resize();
	});

	// //This function select the MeasureID, open the modal, and resize the objects
	// $scope.HomePopUp = function (objectID) {
	// 	servicesLibrary.selectValues('MeasureID', objectID);			
	// 	$('#myModalHome').modal('toggle');
	// 	servicesLibrary.resize();
	// 	servicesLibrary.driversSelector();
	// 	$rootScope.ModalChartSelector(1);
	// };
	//End

	// //This function toggle between Target and PCP
	// $rootScope.ToggleTgPCP =function (id) {
	// 	servicesLibrary.setStringValue('vComp',id);
	// 	$(document).ready(function(){
	// 		$(".btn").click(function(){
	// 			$(this).addClass("active");
	// 			$(this).siblings().removeClass("active");    	
	// 		});
	// 	});
	// };



	// $('#myModalHome').on('hidden.bs.modal', function () {
	// 	servicesLibrary.clear('MeasureID');
	// 	servicesLibrary.clear('DRIVERS_MeasureName');
	// });

	//This function show and hide the detail kpi section
	$rootScope.showDetailKPI = function() {
		$scope.L3kpi = $scope.L3kpi ? false : true;
	};

	$rootScope.goToKRA = function(id) {
		console.log(id);
		$rootScope.kraID = id;
	};	
});
//********** End Summary Controllers
