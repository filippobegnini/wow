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

	var prev = 'Brisbane RDC';
	 app.qlikDoc.createList({
		"qDef": {
			"qFieldDefs": [
				"DC_Name"
			]
		},
		"qInitialDataFetch": [{
			qTop: 0,
			qLeft: 0,
			qHeight: 100,
			qWidth: 1
		}]
	}, function (reply) {
		if (reply.qListObject.qDimensionInfo.qStateCounts.qSelected == 0) {
			 app.qlikDoc.field('DC_Name').selectValues([prev], true, true);
		};
		if (reply.qListObject.qDimensionInfo.qStateCounts.qSelected == 2) {
			 app.qlikDoc.field('DC_Name').selectValues([prev], true, true)
		};
		if (reply.qListObject.qDimensionInfo.qStateCounts.qSelected == 1) {
			angular.forEach(reply.qListObject.qDataPages["0"].qMatrix, function (value) {
				if (value["0"].qState == 'S') {
					prev = value["0"].qText;
				};
			});
		};
		if (reply.qListObject.qDimensionInfo.qStateCounts.qSelected > 2) {
			 app.qlikDoc.field('DC_Name').clear();
		};
	});	


	/////////////////////
	//---Object
	/////////////////////
		$rootScope.arrayObjects = [
			{qsObjectID:'qsObjectHome100',				qsObject:'TXbsmK'},
			{qsObjectID:'qsObjectHome101',				qsObject:'PmrNfN'},
			{qsObjectID:'qsObjectHome102',				qsObject:'GSQyvBR'},

			{qsObjectID:'qsObjectHome200',				qsObject:'NLGrzs'},
			{qsObjectID:'qsObjectHome201',				qsObject:'gFJzJk'},			
			{qsObjectID:'qsObjectHome202',				qsObject:'LSZdBR'},

			{qsObjectID:'qsObjectHome300',				qsObject:'WXLQN'},
			{qsObjectID:'qsObjectHome301',				qsObject:'CapU'},
			{qsObjectID:'qsObjectHome302',				qsObject:'DaeUXnz'},
		];	

		$rootScope.arrayObjectsKRA = [
			{qsObjectID:'qsObjectKRA100',				qsObject:'hhzDmZ'},
			{qsObjectID:'qsObjectKRA110',				qsObject:'rrgbR'},
			{qsObjectID:'qsObjectKRA120',				qsObject:'qjCbK'},

			{qsObjectID:'qsObjectKRA200',				qsObject:'WpZeGUA'},
			{qsObjectID:'qsObjectKRA210',				qsObject:'GtfsdRq'},
			{qsObjectID:'qsObjectKRA220',				qsObject:'ETUpNh'},
			{qsObjectID:'qsObjectKRA230',				qsObject:'hACuqnm'},
			{qsObjectID:'qsObjectKRA240',				qsObject:'jXZp'},
			{qsObjectID:'qsObjectKRA250',				qsObject:'qPjRKQa'},

			{qsObjectID:'qsObjectKRA300',				qsObject:'hDzPj'},
			{qsObjectID:'qsObjectKRA310',				qsObject:'TVbszL'},
			{qsObjectID:'qsObjectKRA320',				qsObject:'QDpGke'},
			{qsObjectID:'qsObjectKRA330',				qsObject:'mJCEpS'},			
		
		];		

		$rootScope.arrayObjectMetricAnalysis = [
		// Chart - Weekly Trend
			{Type:[
					{qsObjectID:'qsObjectTrend',				qsObject:'rwsuBQ'},
					{qsObjectID:'qsObjectDCs',					qsObject:'dpRjXr'},
					{qsObjectID:'qsObjectSpark',				qsObject:'rEnvFru'},
				]},
		// Tabel - Weekly Trend
			{Type:[
					{qsObjectID:'qsObjectTrend',				qsObject:'ANBPLjz'},
					{qsObjectID:'qsObjectDCs',					qsObject:'rcQEQm'},
					{qsObjectID:'qsObjectSpark',				qsObject:'rEnvFru'},
				]},		
		// Chart - Monthly Trend
			{Type:[
					{qsObjectID:'qsObjectTrend',				qsObject:'rmmRvVQ'},
					{qsObjectID:'qsObjectDCs',					qsObject:'dpRjXr'},
					{qsObjectID:'qsObjectSpark',				qsObject:'rEnvFru'},
				]},
		// Tabel - Monthly Trend
			{Type:[
					{qsObjectID:'qsObjectTrend',				qsObject:'WPQrpR'},
					{qsObjectID:'qsObjectDCs',					qsObject:'rcQEQm'},
					{qsObjectID:'qsObjectSpark',				qsObject:'rEnvFru'},
				]},							
		];	
		
// 
		$rootScope.arrayObjectsPageOne = [
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
			{qsObjectID:'qsKPIhome102',		qsObject:'mCCdgd'},

			// {qsObjectID:'qsKPIhome110',		qsObject:'875e694e-2201-470b-89c1-31f618abb718'},
			// {qsObjectID:'qsKPIhome111',		qsObject:'uteemww'},
			// {qsObjectID:'qsKPIhome112',		qsObject:'YQcBmY'},

			// {qsObjectID:'qsKPIhome120',		qsObject:'2f20626a-ccd6-4cb3-9018-24cc636fef52'},
			// {qsObjectID:'qsKPIhome121',		qsObject:'Nzk'},
			// {qsObjectID:'qsKPIhome123',		qsObject:'aWjjSX'},
// ------------------------------Cost
			{qsObjectID:'qsKPIhome200',		qsObject:'5cb31553-bc0e-456b-8fff-698697b79581'},
			{qsObjectID:'qsKPIhome201',		qsObject:'7defe7d3-91fc-4aae-9f8f-b2ac98a0d24e'},
			{qsObjectID:'qsKPIhome202',		qsObject:'DdXTgMY'},

			// {qsObjectID:'qsKPIhome210',		qsObject:'bc3ea39a-05cc-4619-88a1-4225801a239d'},
			// {qsObjectID:'qsKPIhome211',		qsObject:'a03f68ec-77dd-4bb7-88f0-25ed3bd5b305'},
			// {qsObjectID:'qsKPIhome212',		qsObject:'CPyPs'},

			// {qsObjectID:'qsKPIhome220',		qsObject:'e6bcab63-d379-4fb7-ae9a-3c480361b3e6'},
			// {qsObjectID:'qsKPIhome221',		qsObject:'hAxpVp'},
			// {qsObjectID:'qsKPIhome222',		qsObject:'eKFK'},

			// {qsObjectID:'qsKPIhome230',		qsObject:'bQGBwV'},
			// {qsObjectID:'qsKPIhome231',		qsObject:'UfJNr'},	
			// {qsObjectID:'qsKPIhome232',		qsObject:'JbpQJ'},				
			
			// {qsObjectID:'qsKPIhome240',		qsObject:'MUTTAUG'},
			// {qsObjectID:'qsKPIhome241',		qsObject:'eBrdmFz'},
			// {qsObjectID:'qsKPIhome242',		qsObject:'WuKuaV'},			

			// {qsObjectID:'qsKPIhome250',		qsObject:'CTP'},
			// {qsObjectID:'qsKPIhome251',		qsObject:'hqQJLJP'},	
			// {qsObjectID:'qsKPIhome252',		qsObject:'TNmDzE'},						
// ------------------------------Service
			{qsObjectID:'qsKPIhome300',		qsObject:'d36f2186-9a26-48e4-81c3-fe2e608b41c1'},
			{qsObjectID:'qsKPIhome301',		qsObject:'e3955031-c134-4920-a1e6-ca7a3b2dfb3f'},
			{qsObjectID:'qsKPIhome302',		qsObject:'kLGxfy'},

			// {qsObjectID:'qsKPIhome310',		qsObject:'971b58f2-aaa3-4d84-b7fc-25c635000af9'},
			// {qsObjectID:'qsKPIhome311',		qsObject:'nLbRCB'},
			// {qsObjectID:'qsKPIhome312',		qsObject:'KGFF'},

			// {qsObjectID:'qsKPIhome320',		qsObject:'d7a91def-b1cc-4d55-aedf-e7febde8e73e'},
			// {qsObjectID:'qsKPIhome321',		qsObject:'PbjQDg'},
			// {qsObjectID:'qsKPIhome322',		qsObject:'fDPxmCR'},

			// {qsObjectID:'qsKPIhome330',		qsObject:'9acc37c7-5197-4316-a05f-d93c2a929980'},
			// {qsObjectID:'qsKPIhome331',		qsObject:'XJEUX'},		
			// {qsObjectID:'qsKPIhome332',		qsObject:'pwQvpu'},		
// ------------------------------Inventory Turns
			{qsObjectID:'qsKPIhome000',		qsObject:'8713abe6-bb2f-4627-8f39-b653c43c90ed'},
			{qsObjectID:'qsKPIhome001',		qsObject:'ec1fcb44-be58-4952-baf4-a8f54b4220b3'},	
			{qsObjectID:'qsKPIhome002',		qsObject:'XNRsAG'},				
		];

		$rootScope.arrayKPIsBis = [
// // ------------------------------Security		
			// {qsObjectID:'qsKPIhome100',		qsObject:'82be7da9-ff01-477c-bbaa-9fc782a73ce0'},
			// {qsObjectID:'qsKPIhome101',		qsObject:'JqJHTxJ'},
			// {qsObjectID:'qsKPIhome102',		qsObject:'mCCdgd'},

			{qsObjectID:'qsKPIhome110',		qsObject:'875e694e-2201-470b-89c1-31f618abb718'},
			{qsObjectID:'qsKPIhome111',		qsObject:'uteemww'},
			{qsObjectID:'qsKPIhome112',		qsObject:'YQcBmY'},

			{qsObjectID:'qsKPIhome120',		qsObject:'2f20626a-ccd6-4cb3-9018-24cc636fef52'},
			{qsObjectID:'qsKPIhome121',		qsObject:'Nzk'},
			{qsObjectID:'qsKPIhome123',		qsObject:'aWjjSX'},
// ------------------------------Cost
			// {qsObjectID:'qsKPIhome200',		qsObject:'5cb31553-bc0e-456b-8fff-698697b79581'},
			// {qsObjectID:'qsKPIhome201',		qsObject:'7defe7d3-91fc-4aae-9f8f-b2ac98a0d24e'},
			// {qsObjectID:'qsKPIhome202',		qsObject:'DdXTgMY'},

			{qsObjectID:'qsKPIhome210',		qsObject:'bc3ea39a-05cc-4619-88a1-4225801a239d'},
			{qsObjectID:'qsKPIhome211',		qsObject:'a03f68ec-77dd-4bb7-88f0-25ed3bd5b305'},
			{qsObjectID:'qsKPIhome212',		qsObject:'CPyPs'},

			{qsObjectID:'qsKPIhome220',		qsObject:'e6bcab63-d379-4fb7-ae9a-3c480361b3e6'},
			{qsObjectID:'qsKPIhome221',		qsObject:'hAxpVp'},
			{qsObjectID:'qsKPIhome222',		qsObject:'eKFK'},

			{qsObjectID:'qsKPIhome230',		qsObject:'bQGBwV'},
			{qsObjectID:'qsKPIhome231',		qsObject:'UfJNr'},	
			{qsObjectID:'qsKPIhome232',		qsObject:'JbpQJ'},				
			
			{qsObjectID:'qsKPIhome240',		qsObject:'MUTTAUG'},
			{qsObjectID:'qsKPIhome241',		qsObject:'eBrdmFz'},
			{qsObjectID:'qsKPIhome242',		qsObject:'WuKuaV'},			

			{qsObjectID:'qsKPIhome250',		qsObject:'CTP'},
			{qsObjectID:'qsKPIhome251',		qsObject:'hqQJLJP'},	
			{qsObjectID:'qsKPIhome252',		qsObject:'TNmDzE'},						
// ------------------------------Service
			// {qsObjectID:'qsKPIhome300',		qsObject:'d36f2186-9a26-48e4-81c3-fe2e608b41c1'},
			// {qsObjectID:'qsKPIhome301',		qsObject:'e3955031-c134-4920-a1e6-ca7a3b2dfb3f'},
			// {qsObjectID:'qsKPIhome302',		qsObject:'kLGxfy'},

			{qsObjectID:'qsKPIhome310',		qsObject:'971b58f2-aaa3-4d84-b7fc-25c635000af9'},
			{qsObjectID:'qsKPIhome311',		qsObject:'nLbRCB'},
			{qsObjectID:'qsKPIhome312',		qsObject:'KGFF'},

			{qsObjectID:'qsKPIhome320',		qsObject:'d7a91def-b1cc-4d55-aedf-e7febde8e73e'},
			{qsObjectID:'qsKPIhome321',		qsObject:'PbjQDg'},
			{qsObjectID:'qsKPIhome322',		qsObject:'fDPxmCR'},

			{qsObjectID:'qsKPIhome330',		qsObject:'9acc37c7-5197-4316-a05f-d93c2a929980'},
			{qsObjectID:'qsKPIhome331',		qsObject:'XJEUX'},		
			{qsObjectID:'qsKPIhome332',		qsObject:'pwQvpu'},		
// ------------------------------Inventory Turns
			// {qsObjectID:'qsKPIhome000',		qsObject:'8713abe6-bb2f-4627-8f39-b653c43c90ed'},
			// {qsObjectID:'qsKPIhome001',		qsObject:'ec1fcb44-be58-4952-baf4-a8f54b4220b3'},	
			// {qsObjectID:'qsKPIhome002',		qsObject:'XNRsAG'},				
		];		

		$rootScope.arrayKPIsCommon = [
			{qsObjectID:'qsKPIhomeDClabel',		qsObject:'AZbCB'},		
			{qsObjectID:'qsKPIhomeDate',		qsObject:'JLYj'},		
		];	

		$rootScope.arrayKPIsKRA = [
// // ------------------------------Security		
			{qsObjectID:'qsKPIkra100',		qsObject:'82be7da9-ff01-477c-bbaa-9fc782a73ce0'},
			{qsObjectID:'qsKPIkra101',		qsObject:'JqJHTxJ'},
			{qsObjectID:'qsKPIkra102',		qsObject:'mCCdgd'},

			{qsObjectID:'qsKPIkra110',		qsObject:'875e694e-2201-470b-89c1-31f618abb718'},
			{qsObjectID:'qsKPIkra111',		qsObject:'uteemww'},
			{qsObjectID:'qsKPIkra112',		qsObject:'YQcBmY'},

			{qsObjectID:'qsKPIkra120',		qsObject:'2f20626a-ccd6-4cb3-9018-24cc636fef52'},
			{qsObjectID:'qsKPIkra121',		qsObject:'Nzk'},
			{qsObjectID:'qsKPIkra123',		qsObject:'aWjjSX'},
// ------------------------------Cost
			{qsObjectID:'qsKPIkra200',		qsObject:'5cb31553-bc0e-456b-8fff-698697b79581'},
			{qsObjectID:'qsKPIkra201',		qsObject:'7defe7d3-91fc-4aae-9f8f-b2ac98a0d24e'},
			{qsObjectID:'qsKPIkra202',		qsObject:'DdXTgMY'},

			{qsObjectID:'qsKPIkra210',		qsObject:'bc3ea39a-05cc-4619-88a1-4225801a239d'},
			{qsObjectID:'qsKPIkra211',		qsObject:'a03f68ec-77dd-4bb7-88f0-25ed3bd5b305'},
			{qsObjectID:'qsKPIkra212',		qsObject:'CPyPs'},

			{qsObjectID:'qsKPIkra220',		qsObject:'e6bcab63-d379-4fb7-ae9a-3c480361b3e6'},
			{qsObjectID:'qsKPIkra221',		qsObject:'hAxpVp'},
			{qsObjectID:'qsKPIkra222',		qsObject:'eKFK'},

			{qsObjectID:'qsKPIkra230',		qsObject:'bQGBwV'},
			{qsObjectID:'qsKPIkra231',		qsObject:'UfJNr'},	
			{qsObjectID:'qsKPIkra232',		qsObject:'JbpQJ'},				
			
			{qsObjectID:'qsKPIkra240',		qsObject:'MUTTAUG'},
			{qsObjectID:'qsKPIkra241',		qsObject:'eBrdmFz'},
			{qsObjectID:'qsKPIkra242',		qsObject:'WuKuaV'},			

			{qsObjectID:'qsKPIkra250',		qsObject:'CTP'},
			{qsObjectID:'qsKPIkra251',		qsObject:'hqQJLJP'},	
			{qsObjectID:'qsKPIkra252',		qsObject:'TNmDzE'},					
// ------------------------------Service
			{qsObjectID:'qsKPIkra300',		qsObject:'d36f2186-9a26-48e4-81c3-fe2e608b41c1'},
			{qsObjectID:'qsKPIkra301',		qsObject:'e3955031-c134-4920-a1e6-ca7a3b2dfb3f'},
			{qsObjectID:'qsKPIkra302',		qsObject:'kLGxfy'},

			{qsObjectID:'qsKPIkra310',		qsObject:'971b58f2-aaa3-4d84-b7fc-25c635000af9'},
			{qsObjectID:'qsKPIkra311',		qsObject:'nLbRCB'},
			{qsObjectID:'qsKPIkra312',		qsObject:'KGFF'},

			{qsObjectID:'qsKPIkra320',		qsObject:'d7a91def-b1cc-4d55-aedf-e7febde8e73e'},
			{qsObjectID:'qsKPIkra321',		qsObject:'PbjQDg'},
			{qsObjectID:'qsKPIkra322',		qsObject:'fDPxmCR'},

			{qsObjectID:'qsKPIkra330',		qsObject:'9acc37c7-5197-4316-a05f-d93c2a929980'},
			{qsObjectID:'qsKPIkra331',		qsObject:'XJEUX'},		
			{qsObjectID:'qsKPIkra332',		qsObject:'pwQvpu'},					
		];			

		$rootScope.arrayKPIsMetricAnalysis = [
			{qsObjectID:'qsKPIma100',		qsObject:'ksEAm'},
			{qsObjectID:'qsKPIma101',		qsObject:'wqFtLr'},	
			{qsObjectID:'qsKPIma102',		qsObject:'jVJPJ'},					
			{qsObjectID:'qsKPIma103',		qsObject:'JUWEnmE'},					
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
	
	$rootScope.ResetPerios = function(){
		chartService.clear('FIN_WEEK_NO');
		chartService.clear('FIN_MONTH');
		chartService.clear('FIN_YEAR_MONTH');
	};

	//Initialise the period variables
	chartService.setStringValue('vDimPeriod','FCY');
	chartService.setStringValue('vDimPeriodName','FIN_MONTH');

	$rootScope.CWactive = '';
	$rootScope.CMactive = '';
	$rootScope.FCYactive = 'active';

	$rootScope.TogglePeriod =function (id) {
		chartService.setStringValue('vDimPeriod',id);

		var PeriodName = '';

		if (id == 'CW') {
			PeriodName = 'FIN_WEEK_NO';
			$rootScope.CWactive = 'active';
			$rootScope.CMactive = '';
			$rootScope.FCYactive = '';
		};
		if (id == 'CM') {
			PeriodName = 'FIN_YEAR_MONTH';
			$rootScope.CWactive = '';
			$rootScope.CMactive = 'active';
			$rootScope.FCYactive = '';			
		};		
		if (id == 'FCY') {
			PeriodName = 'FIN_MONTH';
			$rootScope.CWactive = '';
			$rootScope.CMactive = '';
			$rootScope.FCYactive = 'active';			
		};			

		chartService.setStringValue('vDimPeriodName',PeriodName);

	};	
});
//********** End Summary Controllers

app.constant('qlikRegister', {
	drivers: {
		charts: ['dpr', 'GYSgvYx', 'pPuCpt', 'pmpPjUP', 'pGcjJw'],
		table: 'hvpJeRp'
	}
}); 