//********** servicesLibrary
app.obj.mashupTemplateApp.service('servicesLibrary', function($rootScope) {
	console.log('servicesLibrary');
	app.boot();

	// // uiVarable Import
	// console.log('variable');
	// app.obj.app.createCube( {
 //                    "qInitialDataFetch": [
 //                    	{
 //                        	"qHeight": 400,
 //                            "qWidth": 8
 //                        }
 //                    ],
 //                    "qDimensions": [
 //                        {
 //                            "qDef": {"qFieldDefs": ["uiVariabelObjectID"]}
 //                        },
 //                        {
 //                            "qDef": {"qFieldDefs": ["uiVariableName"]}
 //                        }
 //                    ],
 //                    "qMeasures": [],
 //                    "qSuppressZero": false,
 //                    "qSuppressMissing": false,
 //                    "qMode": "S"
 //                },	
 //                function (reply) {	
	// 							uiVariables = reply.qHyperCube.qDataPages[0].qMatrix.map(function(d) {
	// 							  return {
	// 							      "uiVariabelObjectID":d[0].qText,
	// 							      "uiVariableName":d[1].qText,
	// 							  }; 
	// 							});	
	// 							uiVariables.forEach( function ( value ){
	// 								var str = '=$(' + value.uiVariableName + ')';
	// 								app.obj.app.createGenericObject( {
	// 												IDName: {
	// 													qStringExpression : str
	// 												}				
	// 											}, function ( reply ) {
	// 													var domID = document.getElementById(value.uiVariabelObjectID);	
	// 													if(domID) domID.innerHTML = reply.IDName;							
	// 											});													
	// 							})
	// });						                	            			
	// // END uiVarable Import	

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//This service generate one ID for each of the Objects. The service takes also takes as input the visualisation
//type "cahrt" or "table".
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 	

	this.customeChartAndTable = function (objectsArray, view) {
		console.log('customeChartAndTable');
		angular.forEach(objectsArray, function(value){
			if (value.qsObjectView == view) {
				app.obj.app.getObject(value.qsObjectID,value.qsObject);
			}
		});
	};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//This service generate one ID for each of the Objects. The service takes also takes as input the visualisation
//type "cahrt" or "table".
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////	

	this.getObject = function (objectsArray) {
		console.log('getObject');
			angular.forEach(objectsArray, function(value){
				app.obj.app.getObject(value.qsObjectID,value.qsObject);
			});
	};	


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//This service generates one ID for each of the KPIs. The ID will have the same prefix as per the input array.
//The first measure will have sufix 0, the second will have 1.
//This service will also generate an ID for each Measure's title. The ID will be the same as the measure's ID
//with the suffix "Title"
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
	this.modelKPI = function (objectsArray) {
		console.log('modelKPI');
		angular.forEach(objectsArray, function(value){
			strObj = value.qsObjectID; 
			app.obj.app.getObject(strObj, value.qsObject).then(function (model) {
					//Primary Measure
					str = '#' + value.qsObjectID + '_0'; 
					$(str).text(model.layout.qHyperCube.qDataPages["0"].qMatrix["0"]["0"].qText);
					// //Primary Measure Colour
					// if(model.layout.qHyperCube.qMeasureInfo["0"].conditionalColoring.paletteSingleColor.color) {
					// 	str = '.' + value.qsObjectID + '_0Class'; 
					// 	$(str).css("color", model.layout.qHyperCube.qMeasureInfo["0"].conditionalColoring.paletteSingleColor.color);
					// };
					//Primary Measure Label
					str = '#' + value.qsObjectID + '_0Title'; 
					$(str).text(model.layout.qHyperCube.qMeasureInfo["0"].qFallbackTitle);

					model.Validated.bind( function () {
						//Primary Measure
						str = '#' + value.qsObjectID + '_0'; 
						$(str).text(this.layout.qHyperCube.qDataPages["0"].qMatrix["0"]["0"].qText);
						// //Primary Measure Colour
						// if(this.layout.qHyperCube.qMeasureInfo["0"].conditionalColoring.paletteSingleColor.color) {
						// 	str = value.qsObjectID + '_0Colour'; 
						// 	$rootScope[str] = this.layout.qHyperCube.qMeasureInfo["0"].conditionalColoring.paletteSingleColor.color;
						// };	
						//Primary Measure Label					
						str = '#' + value.qsObjectID + '_0Title'; 
						$(str).text(this.layout.qHyperCube.qMeasureInfo["0"].qFallbackTitle);						
					});				
				//Secondary Measure 
				if (model.layout.qHyperCube.qDataPages["0"].qMatrix["0"]["1"]) {
					str = '#' + value.qsObjectID + '_1';
					$(str).text(model.layout.qHyperCube.qDataPages["0"].qMatrix["0"]["1"].qText);

					str = '.' + value.qsObjectID + '_1Value';
					$(str).css({"border-left-color": model.layout.qHyperCube.qDataPages["0"].qMatrix["0"]["1"].qText});
					// console.log(str);
					// console.log($rootScope[str]);

					// //Secondary Measure Colour
					// if(model.layout.qHyperCube.qMeasureInfo["1"].conditionalColoring.paletteSingleColor.color) {
					// 	str = value.qsObjectID + '_1Colour'; 
					// 	$rootScope[str] = model.layout.qHyperCube.qMeasureInfo["1"].conditionalColoring.paletteSingleColor.color;
					// };					
					//Secondary Measure Label
					str = '#' + value.qsObjectID + '_1Title'; 
					$(str).text(model.layout.qHyperCube.qMeasureInfo["1"].qFallbackTitle);
					
					model.Validated.bind( function () {
						//Secondary Measure
						str = '#' + value.qsObjectID + '_1'; 
						$(str).text(this.layout.qHyperCube.qDataPages["0"].qMatrix["0"]["1"].qText);
						str = '.' + value.qsObjectID + '_1Value';
						$(str).css({"border-left-color": this.layout.qHyperCube.qDataPages["0"].qMatrix["0"]["1"].qText});
						// //Secondary Measure Colour
						// if(this.layout.qHyperCube.qMeasureInfo["1"].conditionalColoring.paletteSingleColor.color) {
						// 	str = value.qsObjectID + '_1Colour'; 
						// 	$rootScope[str] = this.layout.qHyperCube.qMeasureInfo["1"].conditionalColoring.paletteSingleColor.color;
						// };					
						//Secondary Measure Label
						str = '#' + value.qsObjectID + '_1Title'; 
						$(str).text(this.layout.qHyperCube.qMeasureInfo["1"].qFallbackTitle);						
					});					
				};	

				str = '#' + value.qsObjectID + '_Title'; 
				if (model.layout.title) {
					$(str).text(model.layout.title);
					model.Validated.bind( function () {
						str = '#' + value.qsObjectID + '_Title'; 
						$(str).text(this.layout.title);
					});					
				};

				str = '#' + value.qsObjectID + '_SubTitle'; 
				if (model.layout.subtitle) {
					$(str).text(model.layout.subtitle);
					model.Validated.bind( function () {
						str = '#' + value.qsObjectID + '_SubTitle'; 
						$(str).text(this.layout.subtitle);
					});					
				};

				str = '#' + value.qsObjectID + '_Footer'; 
				if (model.layout.footer) {
					$(str).text(model.layout.footer);
					model.Validated.bind( function () {
						str = '#' + value.qsObjectID + '_Footer'; 
						$(str).text(this.layout.footer);
					});					
				};															
			});										
		});
	};	
	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//This service generates one ID for each of the Text. The ID will have the same prefix as per the input array.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
	this.modelText = function (objectsArray) {
		angular.forEach(objectsArray, function(value){
			app.obj.app.getObject(value.qsObject).then(function (model) {
				str = '#' + value.qsObjectID;
				$(str).text(model.layout.qHyperCube.qGrandTotalRow[0].qText);
			});
		});
	};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//This service export an object
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
	this.export = function (objectID) {
		app.obj.app.getObject(objectID).then(function(model) { 
			console.log(objectID);
			var table = app.obj.qlik.table(model); 
			table.exportData({download: true}); 
	   	});  
	};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//This service resize all the objects
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
	this.resize = function () {
		app.obj.qlik.resize(); 
	};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//This service setlect a value in a field
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
	this.selectValues = function (fieldName, fieldValues) {
		console.log('selectValues');
		console.log(fieldValues);
		console.log(fieldName);
		if(Number(fieldValues)) {
			app.obj.app.field(fieldName).selectValues([Number(fieldValues)], true, true);
		} else {
			app.obj.app.field(fieldName).selectValues([fieldValues], true, true);
		};
	};	
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//This service clear a field
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
	this.clear = function (fieldName) {
		app.obj.app.field(fieldName).clear();
	};	
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//This service set a variable 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
	this.setStringValue = function (varName, varValue) {
		app.obj.app.variable.setStringValue(varName,varValue);
	};	
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Custom code for the home page
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
	this.driversSelector = function () {

		app.obj.app.getObject('ruNhWC').then(function(model) { 
  				model.getHyperCubeData('/qHyperCubeDef', [{ 
    					qTop: 0,  
    					qLeft: 0,  
    					qWidth: 10,  
    					qHeight: 100 
  				}]).then(function(data){
  						$rootScope.driverSelector = data[0].qMatrix.map(function(d) {
							return {
								"MeasureName":d[0].qText,
								"MeasureID":d[1].qText,
								"Driver1ID":d[2].qText,
								"Driver2ID":d[3].qText,
								"Driver3ID":d[4].qText,
							}; 
						});
						app.obj.app.field('DRIVERS_MeasureID').selectValues([Number($rootScope.driverSelector[0].Driver1ID)], true, true);
						app.obj.app.field('DRIVERS_MeasureID').selectValues([Number($rootScope.driverSelector[0].Driver2ID)], true, true);
						app.obj.app.field('DRIVERS_MeasureID').selectValues([Number($rootScope.driverSelector[0].Driver3ID)], true, true);
						app.obj.app.field('DRIVERS_MeasureName').selectPossible().then(function(result){
							if(result) {
								app.obj.app.field('DRIVERS_MeasureID').clear();
							}
						});
  				});
		});

	};	

	this.coloursKPI = function (objectsArray) {
		console.log('coloursKPI');
		angular.forEach(objectsArray, function(value){
			strObj = value.qsObjectID; 
			app.obj.app.getObject(strObj, value.qsObject).then(function (model) {
				str = '.' + value.qsObjectID + '_1';	
				$(str).css({"background-color": model.layout.qHyperCube.qDataPages["0"].qMatrix["0"]["0"].qText});
				model.Validated.bind( function () {
					str = '.' + value.qsObjectID + '_1';	
					$(str).css({"background-color": this.layout.qHyperCube.qDataPages["0"].qMatrix["0"]["0"].qText});
				});
			});
		});
	};

	app.obj.app.getObject('sGepUe').then(function (model) {
		console.log('legend');
		$rootScope.tempA = angular.forEach(model.layout.qHyperCube.qMeasureInfo, function(value){			
		});
		model.Validated.bind( function () {
			$rootScope.tempA =  angular.forEach(model.layout.qHyperCube.qMeasureInfo, function(value){	
				$rootScope.qsObjectHomePopUpPercLegend = [];					
				for (var i = 0; i < $rootScope.tempA.length; i++) {
					if ($rootScope.tempA[i].series.type == 'marker') {
						if ($rootScope.tempA[i].series.marker == 'rect') {
							$rootScope.tempA[i].series.markerNew = '■';		
						};
						if ($rootScope.tempA[i].series.marker == 'circle') {
							$rootScope.tempA[i].series.markerNew = '●';		
						};
						if ($rootScope.tempA[i].series.marker == 'diamond') {
							$rootScope.tempA[i].series.markerNew = '◆';		
						};
						if ($rootScope.tempA[i].series.marker == 'line') {
							$rootScope.tempA[i].series.markerNew = '-';		
						};
					} else {
						$rootScope.tempA[i].series.markerNew = '■';		
					};					
					if ($rootScope.tempA[i].qFallbackTitle != '-') {
						$rootScope.qsObjectHomePopUpPercLegend.push($rootScope.tempA[i]);
					};
				};
			});		
		});
	});

	app.obj.app.getObject('kDcPaSy').then(function (model) {
		console.log('legend');
		$rootScope.tempB = angular.forEach(model.layout.qHyperCube.qMeasureInfo, function(value){			
		});
		model.Validated.bind( function () {
			$rootScope.tempB =  angular.forEach(model.layout.qHyperCube.qMeasureInfo, function(value){	
				$rootScope.qsObjectHomePopUpNumLegend = [];					
				for (var i = 0; i < $rootScope.tempB.length; i++) {
					if ($rootScope.tempB[i].series.type == 'marker') {
						if ($rootScope.tempB[i].series.marker == 'rect') {
							$rootScope.tempB[i].series.markerNew = '■';		
						};
						if ($rootScope.tempB[i].series.marker == 'circle') {
							$rootScope.tempB[i].series.markerNew = '●';		
						};
						if ($rootScope.tempB[i].series.marker == 'diamond') {
							$rootScope.tempB[i].series.markerNew = '◆';		
						};
						if ($rootScope.tempB[i].series.marker == 'line') {
							$rootScope.tempB[i].series.markerNew = '-';		
						};
					} else {
						$rootScope.tempB[i].series.markerNew = '■';		
					};					
					if ($rootScope.tempB[i].qFallbackTitle != '-') {
						$rootScope.qsObjectHomePopUpNumLegend.push($rootScope.tempB[i]);
					};
				};
			});		
		});
	});	

	app.obj.app.getObject('degaqC').then(function (model) {
		console.log('legend');
		$rootScope.tempC = angular.forEach(model.layout.qHyperCube.qMeasureInfo, function(value){			
		});
		model.Validated.bind( function () {
			$rootScope.tempC =  angular.forEach(model.layout.qHyperCube.qMeasureInfo, function(value){	
				$rootScope.qsObjectHomePopUpBigNumLegend = [];					
				for (var i = 0; i < $rootScope.tempC.length; i++) {
					if ($rootScope.tempC[i].series.type == 'marker') {
						if ($rootScope.tempC[i].series.marker == 'rect') {
							$rootScope.tempC[i].series.markerNew = '■';		
						};
						if ($rootScope.tempC[i].series.marker == 'circle') {
							$rootScope.tempC[i].series.markerNew = '●';		
						};
						if ($rootScope.tempC[i].series.marker == 'diamond') {
							$rootScope.tempC[i].series.markerNew = '◆';		
						};
						if ($rootScope.tempC[i].series.marker == 'line') {
							$rootScope.tempC[i].series.markerNew = '-';		
						};
					} else {
						$rootScope.tempC[i].series.markerNew = '■';		
					};					
					if ($rootScope.tempC[i].qFallbackTitle != '-') {
						$rootScope.qsObjectHomePopUpBigNumLegend.push($rootScope.tempC[i]);
					};
				};
			});		
		});
	});		

	app.obj.app.getObject('UPEdhp').then(function (model) {
		console.log('legend');
		$rootScope.tempC = angular.forEach(model.layout.qHyperCube.qMeasureInfo, function(value){			
		});
		model.Validated.bind( function () {
			$rootScope.tempC =  angular.forEach(model.layout.qHyperCube.qMeasureInfo, function(value){	
				$rootScope.qsObjectDetailsChartPercLegend = [];					
				for (var i = 0; i < $rootScope.tempC.length; i++) {
					if ($rootScope.tempC[i].series.type == 'marker') {
						if ($rootScope.tempC[i].series.marker == 'rect') {
							$rootScope.tempC[i].series.markerNew = '■';		
						};
						if ($rootScope.tempC[i].series.marker == 'circle') {
							$rootScope.tempC[i].series.markerNew = '●';		
						};
						if ($rootScope.tempC[i].series.marker == 'diamond') {
							$rootScope.tempC[i].series.markerNew = '◆';		
						};
						if ($rootScope.tempC[i].series.marker == 'line') {
							$rootScope.tempC[i].series.markerNew = '-';		
						};
					} else {
						$rootScope.tempC[i].series.markerNew = '■';		
					};					
					if ($rootScope.tempC[i].qFallbackTitle != '-') {
						$rootScope.qsObjectDetailsChartPercLegend.push($rootScope.tempC[i]);
					};
				};
			});		
		});
	});

	app.obj.app.getObject('YLdaGXX').then(function (model) {
		console.log('legend');
		$rootScope.tempD = angular.forEach(model.layout.qHyperCube.qMeasureInfo, function(value){			
		});
		model.Validated.bind( function () {
			$rootScope.tempD =  angular.forEach(model.layout.qHyperCube.qMeasureInfo, function(value){	
				$rootScope.qsObjectDetailsChartNumLegend = [];					
				for (var i = 0; i < $rootScope.tempD.length; i++) {
					if ($rootScope.tempD[i].series.type == 'marker') {
						if ($rootScope.tempD[i].series.marker == 'rect') {
							$rootScope.tempD[i].series.markerNew = '■';		
						};
						if ($rootScope.tempD[i].series.marker == 'circle') {
							$rootScope.tempD[i].series.markerNew = '●';		
						};
						if ($rootScope.tempD[i].series.marker == 'diamond') {
							$rootScope.tempD[i].series.markerNew = '◆';		
						};
						if ($rootScope.tempD[i].series.marker == 'line') {
							$rootScope.tempD[i].series.markerNew = '-';		
						};
					} else {
						$rootScope.tempD[i].series.markerNew = '■';		
					};					
					if ($rootScope.tempD[i].qFallbackTitle != '-') {
						$rootScope.qsObjectDetailsChartNumLegend.push($rootScope.tempD[i]);
					};
				};
			});		
		});
	});	

	app.obj.app.getObject('LFwBur').then(function (model) {
		console.log('legend');
		$rootScope.tempE = angular.forEach(model.layout.qHyperCube.qMeasureInfo, function(value){			
		});
		model.Validated.bind( function () {
			$rootScope.tempE =  angular.forEach(model.layout.qHyperCube.qMeasureInfo, function(value){	
				$rootScope.qsObjectDetailsChartBigNumLegend = [];					
				for (var i = 0; i < $rootScope.tempE.length; i++) {
					if ($rootScope.tempE[i].series.type == 'marker') {
						if ($rootScope.tempE[i].series.marker == 'rect') {
							$rootScope.tempE[i].series.markerNew = '■';		
						};
						if ($rootScope.tempE[i].series.marker == 'circle') {
							$rootScope.tempE[i].series.markerNew = '●';		
						};
						if ($rootScope.tempE[i].series.marker == 'diamond') {
							$rootScope.tempE[i].series.markerNew = '◆';		
						};
						if ($rootScope.tempE[i].series.marker == 'line') {
							$rootScope.tempE[i].series.markerNew = '-';		
						};
					} else {
						$rootScope.tempE[i].series.markerNew = '■';		
					};					
					if ($rootScope.tempE[i].qFallbackTitle != '-') {
						$rootScope.qsObjectDetailsChartBigNumLegend.push($rootScope.tempE[i]);
					};
				};
			});		
		});
	});		

var prev = 'Brisbane RDC';
app.obj.app.createList({
				"qDef": {
					"qFieldDefs": [
					"DC_Name"
					]
				},
				"qInitialDataFetch": [{
					qTop : 0,
					qLeft : 0,
					qHeight : 100,
					qWidth : 1
					}]
				}, function(reply) {
					if(reply.qListObject.qDimensionInfo.qStateCounts.qSelected == 0){
						app.obj.app.field('DC_Name').selectValues([prev], true, true);
					};
					if(reply.qListObject.qDimensionInfo.qStateCounts.qSelected == 2){
						app.obj.app.field('DC_Name').selectValues([prev], true, true)
					};
					if(reply.qListObject.qDimensionInfo.qStateCounts.qSelected == 1){
						angular.forEach(reply.qListObject.qDataPages["0"].qMatrix, function(value){
							if(value["0"].qState == 'S') {
								prev = value["0"].qText;
							};
						});						
					};		
					if(reply.qListObject.qDimensionInfo.qStateCounts.qSelected > 2){
						app.obj.app.field('DC_Name').clear();
					};																	
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


});
//********** End retreaveObjects