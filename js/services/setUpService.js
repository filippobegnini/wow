//********** home Controllers
app.service('setUpService', function($rootScope, $log, chartService) {
	$log.info('setUpService');



	//Current Selection
	app.qlikDoc.getObject( 'QV00', 'CurrentSelections' );
	//End Current Selection

	// Filters
	app.qlikDoc.getObject('qsFilter11','Fhufcmj');
	//  chartService.getObject('qsFilter12','eSBVBX');
	//  chartService.getObject('qsFilter13','eSBVBX');
	//  chartService.getObject('qsFilter14','eSBVBX');

	// End Filters	


	/////////////////////
	//---Object
	/////////////////////
		$rootScope.arrayObjects = [
			{qsObjectID:'qsObjectHome200',				qsObject:'NLGrzs'},
			{qsObjectID:'qsObjectHome300',				qsObject:'WXLQN'},
			{qsObjectID:'qsObjectHome100',				qsObject:'TXbsmK'},
		];	

		$rootScope.modalObjects = [
			{qsObject:'dpRjXr'},
			{qsObject:'rmmRvVQ'},
			{qsObject:'rwsuBQ'},

			{qsObject:'sGepUe'},
			{qsObject:'kDcPaSy'},
			{qsObject:'degaqC'},
		];

		$rootScope.arrayObjectsDetails = [
			{qsObjectID:'qsObjectDetailsChartPerc',			qsObject:'UPEdhp'},
			{qsObjectID:'qsObjectDetailsChartNum',			qsObject:'YLdaGXX'},
			{qsObjectID:'qsObjectDetailsChartBigNum',		qsObject:'LFwBur'},

			{qsObjectID:'qsObjectDetailsTable',				qsObject:'PCqdpK'},	
		];
	/////////////////////
	//---Object
	/////////////////////



	/////////////////////
	//---KPIs
	/////////////////////
		$rootScope.arrayKPIs = [
// // ------------------------------Security		
			{qsObjectID:'qsKPIhome100',		qsObject:'82be7da9-ff01-477c-bbaa-9fc782a73ce0'},
			{qsObjectID:'qsKPIhome101',		qsObject:'JqJHTxJ'},

			{qsObjectID:'qsKPIhome110',		qsObject:'875e694e-2201-470b-89c1-31f618abb718'},
			{qsObjectID:'qsKPIhome111',		qsObject:'uteemww'},

			{qsObjectID:'qsKPIhome120',		qsObject:'2f20626a-ccd6-4cb3-9018-24cc636fef52'},
			{qsObjectID:'qsKPIhome121',		qsObject:'Nzk'},
// ------------------------------Cost
			{qsObjectID:'qsKPIhome200',		qsObject:'5cb31553-bc0e-456b-8fff-698697b79581'},
			{qsObjectID:'qsKPIhome201',		qsObject:'7defe7d3-91fc-4aae-9f8f-b2ac98a0d24e'},

			{qsObjectID:'qsKPIhome210',		qsObject:'bc3ea39a-05cc-4619-88a1-4225801a239d'},
			{qsObjectID:'qsKPIhome211',		qsObject:'a03f68ec-77dd-4bb7-88f0-25ed3bd5b305'},

			{qsObjectID:'qsKPIhome220',		qsObject:'e6bcab63-d379-4fb7-ae9a-3c480361b3e6'},
			{qsObjectID:'qsKPIhome221',		qsObject:'hAxpVp'},

			{qsObjectID:'qsKPIhome230',		qsObject:'bQGBwV'},
			{qsObjectID:'qsKPIhome231',		qsObject:'UfJNr'},	
			
			{qsObjectID:'qsKPIhome240',		qsObject:'MUTTAUG'},
			{qsObjectID:'qsKPIhome241',		qsObject:'eBrdmFz'},

			{qsObjectID:'qsKPIhome250',		qsObject:'CTP'},
			{qsObjectID:'qsKPIhome251',		qsObject:'hqQJLJP'},			
// ------------------------------Service
			{qsObjectID:'qsKPIhome300',		qsObject:'d36f2186-9a26-48e4-81c3-fe2e608b41c1'},
			{qsObjectID:'qsKPIhome301',		qsObject:'e3955031-c134-4920-a1e6-ca7a3b2dfb3f'},

			{qsObjectID:'qsKPIhome310',		qsObject:'971b58f2-aaa3-4d84-b7fc-25c635000af9'},
			{qsObjectID:'qsKPIhome311',		qsObject:'nLbRCB'},

			{qsObjectID:'qsKPIhome320',		qsObject:'d7a91def-b1cc-4d55-aedf-e7febde8e73e'},
			{qsObjectID:'qsKPIhome321',		qsObject:'PbjQDg'},

			{qsObjectID:'qsKPIhome330',		qsObject:'9acc37c7-5197-4316-a05f-d93c2a929980'},
			{qsObjectID:'qsKPIhome331',		qsObject:'XJEUX'},		
// ------------------------------Inventory Turns
			{qsObjectID:'qsKPIhome000',		qsObject:'8713abe6-bb2f-4627-8f39-b653c43c90ed'},
			{qsObjectID:'qsKPIhome001',		qsObject:'ec1fcb44-be58-4952-baf4-a8f54b4220b3'},				
		];

		$rootScope.arrayKPIsCommon = [
			{qsObjectID:'qsKPIhomeDClabel',		qsObject:'AZbCB'},		
			{qsObjectID:'qsKPIhomeDate',		qsObject:'JLYj'},		
		];		
	/////////////////////
	//---KPIs
	/////////////////////	

	/////////////////////
	//---KPIs
	/////////////////////
		$rootScope.arrayColoursKPI = [
// // ------------------------------Security		
			{qsObjectID:'qsKPIhome100Class',		qsObject:'hjeVBX'},
			{qsObjectID:'qsKPIhome110Class',		qsObject:'nQQfa'},
			{qsObjectID:'qsKPIhome120Class',		qsObject:'qWPGeL'},
// // ------------------------------Cost
			{qsObjectID:'qsKPIhome200Class',		qsObject:'ChBC'},
			{qsObjectID:'qsKPIhome210Class',		qsObject:'pabJN'},
			{qsObjectID:'qsKPIhome220Class',		qsObject:'QJPHb'},
			{qsObjectID:'qsKPIhome230Class',		qsObject:'EcPpu'},
			{qsObjectID:'qsKPIhome240Class',		qsObject:'hXEjc'},
			{qsObjectID:'qsKPIhome250Class',		qsObject:'kDSPb'},
// ------------------------------Service
			{qsObjectID:'qsKPIhome300Class',		qsObject:'JZpyEhx'},
			{qsObjectID:'qsKPIhome310Class',		qsObject:'mNpFhgt'},
			{qsObjectID:'qsKPIhome320Class',		qsObject:'TpXSBJ'},
			{qsObjectID:'qsKPIhome330Class',		qsObject:'XdpkHm'},
// ------------------------------Inventory Turns
			{qsObjectID:'qsKPIhome000Class',		qsObject:'c3dc74b7-55f4-4fec-be25-86062baaf12e'},			
		];
	/////////////////////
	//---KPIs
	/////////////////////	

	/////////////////////
	//---List
	/////////////////////
		$rootScope.arrayList = [
			{qsListID:'driverSelector',		qsListField:'DRIVERS_MeasureName'},
		];

	/////////////////////
	//---List
	/////////////////////

	
/*Custom code from dropdown*/
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
$rootScope.driverDropdown = 'Select Measure'
$rootScope.dropDownDetailsArray = [
	{id:'DW01'},
	{id:'DW02'},
	{id:'DW03'},
	{id:'DW04'},
	{id:'DW05'},
	{id:'DW06'},
	{id:'DW07'},
	{id:'DW08'},
];
$rootScope.dropDownFunction =  function(action, id) {	
	$log.info('dropDownFunction');
	str = '#' + id;
	if(action == 'toggle') {
		angular.element(str).toggleClass('show');
		if ($rootScope.driverDropdown == 'Close Menu') {
			$rootScope.driverDropdown = 'Select Measure';
		} else {
			$rootScope.driverDropdown = 'Close Menu';
		};
	};
	angular.forEach($rootScope.dropDownDetailsArray, function(value){
		if(value.id != id) {
			str = '#' + value.id;
			angular.element(str).removeClass('show');
		}
	});
};
/*Custom code from dropdown*/

$rootScope.ResetPerios = function(){
	chartService.clear('FIN_WEEK_NO');
	chartService.clear('FIN_MONTH');
	chartService.clear('FIN_YEAR_MONTH');
};

//Initialise the period variables
chartService.setStringValue('vDimPeriod','FCY');
chartService.setStringValue('vDimPeriodName','FIN_MONTH');

$rootScope.selectInField = function(field, value) {
	chartService.selectValues(field, value);	
};


});
//********** End Summary Controllers


