//********** home Controllers
app.obj.mashupTemplateApp.controller( 'pageOneCtrl', function($scope, $rootScope, servicesLibrary, setUp) {		
	console.log('pageOne');

	$(document).ready(function(){
		//highlight this as the selected page
		$("#P1").addClass("active");
		$("#P1").siblings().removeClass("active"); 
		 
		//clear selections from the detail page
		servicesLibrary.clear('LEVEL4_MeasureName');

		//hide toggle buttons
		$("#toggleButtons").hide();
	});

	$scope.$on('LastRepeaterElement', function(){
		servicesLibrary.getObject($rootScope.arrayObjectsPageOne);	
		servicesLibrary.modelKPI($rootScope.arrayKPIsCommon);
	});	

	$rootScope.Leve3Cathegory = [
		{
			Line:[
				{Title: "Timeliness", Class: "L3BoxGreen L3Box", id: "DW01", qsListField:'=if(LEVEL4_Timeliness=1,LEVEL4_MeasureName)', qsFileldSelect:'LEVEL4_MeasureName'},
				{Title: "Completeness", Class: "L3BoxGreen L3Box", id: "DW02", qsListField:'=if(LEVEL4_Completeness=1,LEVEL4_MeasureName)', qsFileldSelect:'LEVEL4_MeasureName'},
				{Title: "Process Quality", Class: "L3BoxGreen L3Box", id: "DW03", qsListField:'=if([LEVEL4_Process Quality]=1,LEVEL4_MeasureName)', qsFileldSelect:'LEVEL4_MeasureName'},
				{Title: "Productivity", Class: "L3BoxGreen L3Box", id: "DW04", qsListField:'=if(LEVEL4_Productivity=1,LEVEL4_MeasureName)', qsFileldSelect:'LEVEL4_MeasureName'},
			],
		},
		{
			Line:[
				{Title: "Capacity", Class: "L3BoxGreen L3Box", id: "DW05", qsListField:'=if(LEVEL4_Capacity=1,LEVEL4_MeasureName)', qsFileldSelect:'LEVEL4_MeasureName'},
				{Title: "Cost", Class: "L3BoxGreen L3Box", id: "DW06", qsListField:'=if(LEVEL4_Cost=1,LEVEL4_MeasureName)', qsFileldSelect:'LEVEL4_MeasureName'},
				{Title: "Volume", Class: "L3BoxGreen L3Box", id: "DW07", qsListField:'=if(LEVEL4_Volume=1,LEVEL4_MeasureName)', qsFileldSelect:'LEVEL4_MeasureName'},
				{Title: "People", Class: "L3BoxGreen L3Box", id: "DW08", qsListField:'=if(LEVEL4_People=1,LEVEL4_MeasureName)', qsFileldSelect:'LEVEL4_MeasureName'},
			],
		},
	];	
});
//********** End Summary Controllers