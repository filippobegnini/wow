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
			MetricClass:"qsKPIhome100Class_1",
			Obj:"qsKPIhome100",
			MetricCompareLabel:"qsKPIhome101_0Title",
			MetricCompare:"qsKPIhome101_0",
			ObjCompare:"qsKPIhome101",
			MetricDeltaLabel:"qsKPIhome101_1Title",
			MetricDelta:"qsKPIhome101_1",				
			IMG:"IMG/IMGsafety.png",
			Trend:"qsObjectHome100",
			MetricClick:"3",
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
			Title:"qsKPIhome200_Title",
			MetricTitle:"qsKPIhome200_SubTitle",
			MetricLabel:"qsKPIhome200_0Title",
			Metric:"qsKPIhome200_0",
			MetricClass:"qsKPIhome200Class_1",			
			Obj:"qsKPIhome200",
			MetricCompareLabel:"qsKPIhome201_0Title",
			MetricCompare:"qsKPIhome201_0",
			ObjCompare:"qsKPIhome201",
			MetricDeltaLabel:"qsKPIhome201_1Title",
			MetricDelta:"qsKPIhome201_1",				
			IMG:"IMG/IMGcost.png",
			Trend:"qsObjectHome200",
			MetricClick:"2",
			SubMetric:[
				{
					SubMetricTitle:"qsKPIhome210_Title",
					SubMetricLabel:"qsKPIhome210_0Title",
					SubMetric:"qsKPIhome210_0", 
					SubMetricClass:"qsKPIhome210Class_1",			
					SubMetricObj:"qsKPIhome210",
					SubMetricClassObj:"qsKPIhome210Class",
					SubMetricCompareLabel:"qsKPIhome211_0Title",
					SubMetricCompare:"qsKPIhome211_0",
					SubMetricObjCompare:"qsKPIhome211",
					SubMetricDeltaLabel:"qsKPIhome211_1Title",
					SubMetricDelta:"qsKPIhome211_1",						
					SubMetricClick:"5"
				},
				{
					SubMetricTitle:"qsKPIhome220_Title",
					SubMetricLabel:"qsKPIhome220_0Title",
					SubMetric:"qsKPIhome220_0", 
					SubMetricClass:"qsKPIhome220Class_1",			
					SubMetricObj:"qsKPIhome220",
					SubMetricClassObj:"qsKPIhome220Class",
					SubMetricCompareLabel:"qsKPIhome221_0Title",
					SubMetricCompare:"qsKPIhome221_0",
					SubMetricObjCompare:"qsKPIhome221",
					SubMetricDeltaLabel:"qsKPIhome221_1Title",
					SubMetricDelta:"qsKPIhome221_1",						
					SubMetricClick:"6"
				},
				{
					SubMetricTitle:"qsKPIhome230_Title",
					SubMetricLabel:"qsKPIhome230_0Title",
					SubMetric:"qsKPIhome230_0", 
					SubMetricClass:"qsKPIhome230Class_1",			
					SubMetricObj:"qsKPIhome230",
					SubMetricClassObj:"qsKPIhome230Class",
					SubMetricCompareLabel:"qsKPIhome231_0Title",
					SubMetricCompare:"qsKPIhome231_0",
					SubMetricObjCompare:"qsKPIhome231",
					SubMetricDeltaLabel:"qsKPIhome231_1Title",
					SubMetricDelta:"qsKPIhome231_1",						
					SubMetricClick:"7"
				},
				{
					SubMetricTitle:"qsKPIhome240_Title",
					SubMetricLabel:"qsKPIhome240_0Title",
					SubMetric:"qsKPIhome240_0", 
					SubMetricClass:"qsKPIhome240Class_1",			
					SubMetricObj:"qsKPIhome240",
					SubMetricClassObj:"qsKPIhome240Class",
					SubMetricCompareLabel:"qsKPIhome241_0Title",
					SubMetricCompare:"qsKPIhome241_0",
					SubMetricObjCompare:"qsKPIhome241",
					SubMetricDeltaLabel:"qsKPIhome241_1Title",
					SubMetricDelta:"qsKPIhome241_1",						
					SubMetricClick:"8"
				},
				{
					SubMetricTitle:"qsKPIhome250_Title",
					SubMetricLabel:"qsKPIhome250_0Title",
					SubMetric:"qsKPIhome250_0", 
					SubMetricClass:"qsKPIhome250Class_1",			
					SubMetricObj:"qsKPIhome250",
					SubMetricClassObj:"qsKPIhome250Class",
					SubMetricCompareLabel:"qsKPIhome251_0Title",
					SubMetricCompare:"qsKPIhome251_0",
					SubMetricObjCompare:"qsKPIhome251",
					SubMetricDeltaLabel:"qsKPIhome251_1Title",
					SubMetricDelta:"qsKPIhome251_1",						
					SubMetricClick:"9"
				},											
			],
			boxClass:"boxCost",
		},	
		{
			Title:"qsKPIhome300_Title",
			MetricTitle:"qsKPIhome300_SubTitle",
			MetricLabel:"qsKPIhome300_0Title",
			Metric:"qsKPIhome300_0",
			MetricClass:"qsKPIhome300Class_1",			
			Obj:"qsKPIhome300",			
			MetricCompareLabel:"qsKPIhome301_0Title",
			MetricCompare:"qsKPIhome301_0",
			ObjCompare:"qsKPIhome301",
			MetricDeltaLabel:"qsKPIhome301_1Title",
			MetricDelta:"qsKPIhome301_1",				
			IMG:"IMG/IMGservice.png",
			Trend:"qsObjectHome300",
			MetricClick:"4",
			SubMetric:[
				{
					SubMetricTitle:"qsKPIhome310_Title",
					SubMetricLabel:"qsKPIhome310_0Title",
					SubMetric:"qsKPIhome310_0", 
					SubMetricClass:"qsKPIhome310Class_1",			
					SubMetricObj:"qsKPIhome310",
					SubMetricClassObj:"qsKPIhome310Class",
					SubMetricCompareLabel:"qsKPIhome311_0Title",
					SubMetricCompare:"qsKPIhome311_0",
					SubMetricObjCompare:"qsKPIhome311",
					SubMetricDeltaLabel:"qsKPIhome311_1Title",
					SubMetricDelta:"qsKPIhome311_1",						
					SubMetricClick:"12"
				},
				{
					SubMetricTitle:"qsKPIhome320_Title",
					SubMetricLabel:"qsKPIhome320_0Title",
					SubMetric:"qsKPIhome320_0", 
					SubMetricClass:"qsKPIhome320Class_1",			
					SubMetricObj:"qsKPIhome320",
					SubMetricClassObj:"qsKPIhome320Class",
					SubMetricCompareLabel:"qsKPIhome321_0Title",
					SubMetricCompare:"qsKPIhome321_0",
					SubMetricObjCompare:"qsKPIhome321",
					SubMetricDeltaLabel:"qsKPIhome321_1Title",
					SubMetricDelta:"qsKPIhome321_1",						
					SubMetricClick:"13"
				},
				{
					SubMetricTitle:"qsKPIhome330_Title",
					SubMetricLabel:"qsKPIhome330_0Title",
					SubMetric:"qsKPIhome330_0", 
					SubMetricClass:"qsKPIhome330Class_1",			
					SubMetricObj:"qsKPIhome330",
					SubMetricClassObj:"qsKPIhome330Class",
					SubMetricCompareLabel:"qsKPIhome331_0Title",
					SubMetricCompare:"qsKPIhome331_0",
					SubMetricObjCompare:"qsKPIhome331",					
					SubMetricDeltaLabel:"qsKPIhome331_1Title",
					SubMetricDelta:"qsKPIhome331_1",						
					SubMetricClick:"14"
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

	//This function select the MeasureID, open the modal, and resize the objects
	$scope.HomePopUp = function (objectID) {
		servicesLibrary.selectValues('MeasureID', objectID);			
		$('#myModalHome').modal('toggle');
		servicesLibrary.resize();
		servicesLibrary.driversSelector();
		$rootScope.ModalChartSelector(1);
	};
	//End

	//This function toggle between Target and PCP
	$rootScope.ToggleTgPCP =function (id) {
		servicesLibrary.setStringValue('vComp',id);
		$(document).ready(function(){
			$(".btn").click(function(){
				$(this).addClass("active");
				$(this).siblings().removeClass("active");    	
			});
		});
	};

	//This function toggle between CW CM YTD
	$rootScope.TogglePeriod =function (id) {
		servicesLibrary.setStringValue('vDimPeriod',id);

		var PeriodName = '';

		if (id == 'CW') {
			PeriodName = 'FIN_WEEK_NO';
		};
		if (id == 'CM') {
			PeriodName = 'FIN_YEAR_MONTH';
		};		
		if (id == 'FCY') {
			PeriodName = 'FIN_MONTH';
		};		

		servicesLibrary.setStringValue('vDimPeriodName',PeriodName);

		$(document).ready(function(){
			$(".btn").click(function(){
				$(this).addClass("active");
				$(this).siblings().removeClass("active");    	
			});
		});
	};	

	$('#myModalHome').on('hidden.bs.modal', function () {
		servicesLibrary.clear('MeasureID');
		servicesLibrary.clear('DRIVERS_MeasureName');
	});

	//This function select a chart in the modal
	$rootScope.ModalChartSelector = function(id) {
		if (id == 1) {
			$(".customDropdown").hide();
			$("#popUpOneChart").show();
			$("#popUpThreeChart").hide();			
			$rootScope.ModalChartSelectorArray = [
				{qsObjectID: "qsObjectHomePopUp", qsObject: $rootScope.modalObjects[2].qsObject}
			];
			servicesLibrary.getObject($rootScope.ModalChartSelectorArray);	
			$("#ModalChartSelectorFirst").addClass("active");
			$("#ModalChartSelectorFirst").siblings().removeClass("active");   
		};
		if (id == 2) {
			$(".customDropdown").hide();
			$("#popUpOneChart").show();
			$("#popUpThreeChart").hide();			
			$rootScope.ModalChartSelectorArray = [
				{qsObjectID: "qsObjectHomePopUp", qsObject: $rootScope.modalObjects[1].qsObject}
			];
			servicesLibrary.getObject($rootScope.ModalChartSelectorArray);	
		};	
		if (id == 3) {
			$(".customDropdown").hide();
			$("#popUpOneChart").show();
			$("#popUpThreeChart").hide();			
			$rootScope.ModalChartSelectorArray = [
				{qsObjectID: "qsObjectHomePopUp", qsObject: $rootScope.modalObjects[0].qsObject}
			];
			servicesLibrary.getObject($rootScope.ModalChartSelectorArray);	
		};	
		if (id == 4) {
			$(".customDropdown").show();
			$("#popUpOneChart").hide();
			$("#popUpThreeChart").show();
			$rootScope.ModalChartSelectorArray = [
				{qsObjectID: "qsObjectHomePopUpPerc", qsObject: $rootScope.modalObjects[3].qsObject},
				{qsObjectID: "qsObjectHomePopUpNum", qsObject: $rootScope.modalObjects[4].qsObject},
				{qsObjectID: "qsObjectHomePopUpBigNum", qsObject: $rootScope.modalObjects[5].qsObject},
			];			
			servicesLibrary.getObject($rootScope.ModalChartSelectorArray);	
		};	

		$(document).ready(function(){
			$(".btn").click(function(){
				$(this).addClass("active");
				$(this).siblings().removeClass("active");    	
			});
		});
	};
});
//********** End Summary Controllers

