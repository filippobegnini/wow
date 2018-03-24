//********** home Controllers
app.controller('homeController', function ($scope, $log, $rootScope, chartService, setUpService) {
	$log.info('home');

	$(document).ready(function () {
		//highlight this as the selected page
		$("#P0").addClass("active");
		$("#P0").siblings().removeClass("active");

		//clear selections from the detail page
		chartService.clear('LEVEL4_MeasureName');

		//show toggle buttons
		$("#toggleButtons").show();
	});

	$scope.$on('LastRepeaterElement', function () {
		chartService.modelKPI($rootScope.arrayKPIs);
		chartService.modelKPI($rootScope.arrayKPIsCommon);
		$log.info($rootScope.arrayObjects)
		chartService.getObject($rootScope.arrayObjects);
		chartService.coloursKPI($rootScope.arrayColoursKPI);
	});


	$rootScope.Summary = [
		{
			Title: "qsKPIhome100_Title",
			MetricTitle: "qsKPIhome100_SubTitle",
			MetricLabel: "qsKPIhome100_0Title",
			Metric: "qsKPIhome100_0",
			MetricClass: "qsKPIhome100Class_1",
			Obj: "qsKPIhome100",
			MetricCompareLabel: "qsKPIhome101_0Title",
			MetricCompare: "qsKPIhome101_0",
			ObjCompare: "qsKPIhome101",
			MetricDeltaLabel: "qsKPIhome101_1Title",
			MetricDelta: "qsKPIhome101_1",
			IMG: "IMG/IMGsafety.png",
			Trend: "qsObjectHome100",
			MetricClick: "3",
			SubMetric: [
				{
					SubMetricTitle: "qsKPIhome110_Title",
					SubMetricLabel: "qsKPIhome110_0Title",
					SubMetric: "qsKPIhome110_0",
					SubMetricClass: "qsKPIhome110Class_1",
					SubMetricObj: "qsKPIhome110",
					SubMetricClassObj: "qsKPIhome110Class",
					SubMetricCompareLabel: "qsKPIhome111_0Title",
					SubMetricCompare: "qsKPIhome111_0",
					SubMetricObjCompare: "qsKPIhome111",
					SubMetricDeltaLabel: "qsKPIhome111_1Title",
					SubMetricDelta: "qsKPIhome111_1",
					SubMetricClick: "11"
				},
				{
					SubMetricTitle: "qsKPIhome120_Title",
					SubMetricLabel: "qsKPIhome120_0Title",
					SubMetric: "qsKPIhome120_0",
					SubMetricClass: "qsKPIhome120Class_1",
					SubMetricObj: "qsKPIhome120",
					SubMetricClassObj: "qsKPIhome120Class",
					SubMetricCompareLabel: "qsKPIhome121_0Title",
					SubMetricCompare: "qsKPIhome121_0",
					SubMetricObjCompare: "qsKPIhome121",
					SubMetricDeltaLabel: "qsKPIhome121_1Title",
					SubMetricDelta: "qsKPIhome121_1",
					SubMetricClick: "38"
				},
			],
			boxClass: "boxSafety",
		},
		{
			Title: "qsKPIhome200_Title",
			MetricTitle: "qsKPIhome200_SubTitle",
			MetricLabel: "qsKPIhome200_0Title",
			Metric: "qsKPIhome200_0",
			MetricClass: "qsKPIhome200Class_1",
			Obj: "qsKPIhome200",
			MetricCompareLabel: "qsKPIhome201_0Title",
			MetricCompare: "qsKPIhome201_0",
			ObjCompare: "qsKPIhome201",
			MetricDeltaLabel: "qsKPIhome201_1Title",
			MetricDelta: "qsKPIhome201_1",
			IMG: "IMG/IMGcost.png",
			Trend: "qsObjectHome200",
			MetricClick: "2",
			SubMetric: [
				{
					SubMetricTitle: "qsKPIhome210_Title",
					SubMetricLabel: "qsKPIhome210_0Title",
					SubMetric: "qsKPIhome210_0",
					SubMetricClass: "qsKPIhome210Class_1",
					SubMetricObj: "qsKPIhome210",
					SubMetricClassObj: "qsKPIhome210Class",
					SubMetricCompareLabel: "qsKPIhome211_0Title",
					SubMetricCompare: "qsKPIhome211_0",
					SubMetricObjCompare: "qsKPIhome211",
					SubMetricDeltaLabel: "qsKPIhome211_1Title",
					SubMetricDelta: "qsKPIhome211_1",
					SubMetricClick: "5"
				},
				{
					SubMetricTitle: "qsKPIhome220_Title",
					SubMetricLabel: "qsKPIhome220_0Title",
					SubMetric: "qsKPIhome220_0",
					SubMetricClass: "qsKPIhome220Class_1",
					SubMetricObj: "qsKPIhome220",
					SubMetricClassObj: "qsKPIhome220Class",
					SubMetricCompareLabel: "qsKPIhome221_0Title",
					SubMetricCompare: "qsKPIhome221_0",
					SubMetricObjCompare: "qsKPIhome221",
					SubMetricDeltaLabel: "qsKPIhome221_1Title",
					SubMetricDelta: "qsKPIhome221_1",
					SubMetricClick: "6"
				},
				{
					SubMetricTitle: "qsKPIhome230_Title",
					SubMetricLabel: "qsKPIhome230_0Title",
					SubMetric: "qsKPIhome230_0",
					SubMetricClass: "qsKPIhome230Class_1",
					SubMetricObj: "qsKPIhome230",
					SubMetricClassObj: "qsKPIhome230Class",
					SubMetricCompareLabel: "qsKPIhome231_0Title",
					SubMetricCompare: "qsKPIhome231_0",
					SubMetricObjCompare: "qsKPIhome231",
					SubMetricDeltaLabel: "qsKPIhome231_1Title",
					SubMetricDelta: "qsKPIhome231_1",
					SubMetricClick: "7"
				},
				{
					SubMetricTitle: "qsKPIhome240_Title",
					SubMetricLabel: "qsKPIhome240_0Title",
					SubMetric: "qsKPIhome240_0",
					SubMetricClass: "qsKPIhome240Class_1",
					SubMetricObj: "qsKPIhome240",
					SubMetricClassObj: "qsKPIhome240Class",
					SubMetricCompareLabel: "qsKPIhome241_0Title",
					SubMetricCompare: "qsKPIhome241_0",
					SubMetricObjCompare: "qsKPIhome241",
					SubMetricDeltaLabel: "qsKPIhome241_1Title",
					SubMetricDelta: "qsKPIhome241_1",
					SubMetricClick: "8"
				},
				{
					SubMetricTitle: "qsKPIhome250_Title",
					SubMetricLabel: "qsKPIhome250_0Title",
					SubMetric: "qsKPIhome250_0",
					SubMetricClass: "qsKPIhome250Class_1",
					SubMetricObj: "qsKPIhome250",
					SubMetricClassObj: "qsKPIhome250Class",
					SubMetricCompareLabel: "qsKPIhome251_0Title",
					SubMetricCompare: "qsKPIhome251_0",
					SubMetricObjCompare: "qsKPIhome251",
					SubMetricDeltaLabel: "qsKPIhome251_1Title",
					SubMetricDelta: "qsKPIhome251_1",
					SubMetricClick: "9"
				},
			],
			boxClass: "boxCost",
		},
		{
			Title: "qsKPIhome300_Title",
			MetricTitle: "qsKPIhome300_SubTitle",
			MetricLabel: "qsKPIhome300_0Title",
			Metric: "qsKPIhome300_0",
			MetricClass: "qsKPIhome300Class_1",
			Obj: "qsKPIhome300",
			MetricCompareLabel: "qsKPIhome301_0Title",
			MetricCompare: "qsKPIhome301_0",
			ObjCompare: "qsKPIhome301",
			MetricDeltaLabel: "qsKPIhome301_1Title",
			MetricDelta: "qsKPIhome301_1",
			IMG: "IMG/IMGservice.png",
			Trend: "qsObjectHome300",
			MetricClick: "4",
			SubMetric: [
				{
					SubMetricTitle: "qsKPIhome310_Title",
					SubMetricLabel: "qsKPIhome310_0Title",
					SubMetric: "qsKPIhome310_0",
					SubMetricClass: "qsKPIhome310Class_1",
					SubMetricObj: "qsKPIhome310",
					SubMetricClassObj: "qsKPIhome310Class",
					SubMetricCompareLabel: "qsKPIhome311_0Title",
					SubMetricCompare: "qsKPIhome311_0",
					SubMetricObjCompare: "qsKPIhome311",
					SubMetricDeltaLabel: "qsKPIhome311_1Title",
					SubMetricDelta: "qsKPIhome311_1",
					SubMetricClick: "12"
				},
				{
					SubMetricTitle: "qsKPIhome320_Title",
					SubMetricLabel: "qsKPIhome320_0Title",
					SubMetric: "qsKPIhome320_0",
					SubMetricClass: "qsKPIhome320Class_1",
					SubMetricObj: "qsKPIhome320",
					SubMetricClassObj: "qsKPIhome320Class",
					SubMetricCompareLabel: "qsKPIhome321_0Title",
					SubMetricCompare: "qsKPIhome321_0",
					SubMetricObjCompare: "qsKPIhome321",
					SubMetricDeltaLabel: "qsKPIhome321_1Title",
					SubMetricDelta: "qsKPIhome321_1",
					SubMetricClick: "13"
				},
				{
					SubMetricTitle: "qsKPIhome330_Title",
					SubMetricLabel: "qsKPIhome330_0Title",
					SubMetric: "qsKPIhome330_0",
					SubMetricClass: "qsKPIhome330Class_1",
					SubMetricObj: "qsKPIhome330",
					SubMetricClassObj: "qsKPIhome330Class",
					SubMetricCompareLabel: "qsKPIhome331_0Title",
					SubMetricCompare: "qsKPIhome331_0",
					SubMetricObjCompare: "qsKPIhome331",
					SubMetricDeltaLabel: "qsKPIhome331_1Title",
					SubMetricDelta: "qsKPIhome331_1",
					SubMetricClick: "14"
				},
			],
			boxClass: "boxService",
		},
	];



	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Custom code for the home page
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
	this.driversSelector = function () {

		 app.qlikDoc.getObject('ruNhWC').then(function (model) {
			model.getHyperCubeData('/qHyperCubeDef', [{
				qTop: 0,
				qLeft: 0,
				qWidth: 10,
				qHeight: 100
			}]).then(function (data) {
				$rootScope.driverSelector = data[0].qMatrix.map(function (d) {
					return {
						"MeasureName": d[0].qText,
						"MeasureID": d[1].qText,
						"Driver1ID": d[2].qText,
						"Driver2ID": d[3].qText,
						"Driver3ID": d[4].qText,
					};
				});
				 app.qlikDoc.field('DRIVERS_MeasureID').selectValues([Number($rootScope.driverSelector[0].Driver1ID)], true, true);
				 app.qlikDoc.field('DRIVERS_MeasureID').selectValues([Number($rootScope.driverSelector[0].Driver2ID)], true, true);
				 app.qlikDoc.field('DRIVERS_MeasureID').selectValues([Number($rootScope.driverSelector[0].Driver3ID)], true, true);
				 app.qlikDoc.field('DRIVERS_MeasureName').selectPossible().then(function (result) {
					if (result) {
						 app.qlikDoc.field('DRIVERS_MeasureID').clear();
					}
				});
			});
		});

	};

	this.coloursKPI = function (objectsArray) {
		$log.info('coloursKPI');
		angular.forEach(objectsArray, function (value) {
			strObj = value.qsObjectID;
			 app.qlikDoc.getObject(strObj, value.qsObject).then(function (model) {
				str = '.' + value.qsObjectID + '_1';
				$(str).css({ "background-color": model.layout.qHyperCube.qDataPages["0"].qMatrix["0"]["0"].qText });
				model.Validated.bind(function () {
					str = '.' + value.qsObjectID + '_1';
					$(str).css({ "background-color": this.layout.qHyperCube.qDataPages["0"].qMatrix["0"]["0"].qText });
				});
			});
		});
	};

	 app.qlikDoc.getObject('sGepUe').then(function (model) {
		$log.info('legend');
		$rootScope.tempA = angular.forEach(model.layout.qHyperCube.qMeasureInfo, function (value) {
		});
		model.Validated.bind(function () {
			$rootScope.tempA = angular.forEach(model.layout.qHyperCube.qMeasureInfo, function (value) {
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

	 app.qlikDoc.getObject('kDcPaSy').then(function (model) {
		$log.info('legend');
		$rootScope.tempB = angular.forEach(model.layout.qHyperCube.qMeasureInfo, function (value) {
		});
		model.Validated.bind(function () {
			$rootScope.tempB = angular.forEach(model.layout.qHyperCube.qMeasureInfo, function (value) {
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

	 app.qlikDoc.getObject('degaqC').then(function (model) {
		$log.info('legend');
		$rootScope.tempC = angular.forEach(model.layout.qHyperCube.qMeasureInfo, function (value) {
		});
		model.Validated.bind(function () {
			$rootScope.tempC = angular.forEach(model.layout.qHyperCube.qMeasureInfo, function (value) {
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

	 app.qlikDoc.getObject('UPEdhp').then(function (model) {
		$log.info('legend');
		$rootScope.tempC = angular.forEach(model.layout.qHyperCube.qMeasureInfo, function (value) {
		});
		model.Validated.bind(function () {
			$rootScope.tempC = angular.forEach(model.layout.qHyperCube.qMeasureInfo, function (value) {
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

	 app.qlikDoc.getObject('YLdaGXX').then(function (model) {
		$log.info('legend');
		$rootScope.tempD = angular.forEach(model.layout.qHyperCube.qMeasureInfo, function (value) {
		});
		model.Validated.bind(function () {
			$rootScope.tempD = angular.forEach(model.layout.qHyperCube.qMeasureInfo, function (value) {
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

	 app.qlikDoc.getObject('LFwBur').then(function (model) {
		$log.info('legend');
		$rootScope.tempE = angular.forEach(model.layout.qHyperCube.qMeasureInfo, function (value) {
		});
		model.Validated.bind(function () {
			$rootScope.tempE = angular.forEach(model.layout.qHyperCube.qMeasureInfo, function (value) {
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

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	$rootScope.HomePopUpCharts = [
		{ ChartID: "qsObjectHomePopUpDC", ChartDropDown: "hidden", CustomLegend: "hidden", id: "" },
		{ ChartID: "qsObjectHomePopUpMonthly", ChartDropDown: "hidden", CustomLegend: "hidden", id: "" },
		{ ChartID: "qsObjectHomePopUpWeekly", ChartDropDown: "hidden", CustomLegend: "hidden", id: "" },
		{ ChartID: "qsObjectHomePopUpDrivers", ChartDropDown: "show", CustomLegend: "show", id: "DW00" },
	];

	$("#sidebarCollapse").click(function () {
		chartService.resize();
	});

	//This function select the MeasureID, open the modal, and resize the objects
	$scope.HomePopUp = function (objectID) {
		chartService.selectValues('MeasureID', objectID);
		$('#myModalHome').modal('toggle');
		chartService.resize();
		chartService.driversSelector();
		$rootScope.ModalChartSelector(1);
	};
	//End

	//This function toggle between Target and PCP
	$rootScope.ToggleTgPCP = function (id) {
		chartService.setStringValue('vComp', id);
		$(document).ready(function () {
			$(".btn").click(function () {
				$(this).addClass("active");
				$(this).siblings().removeClass("active");
			});
		});
	};

	//This function toggle between CW CM YTD
	$rootScope.TogglePeriod = function (id) {
		chartService.setStringValue('vDimPeriod', id);

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

		chartService.setStringValue('vDimPeriodName', PeriodName);

		$(document).ready(function () {
			$(".btn").click(function () {
				$(this).addClass("active");
				$(this).siblings().removeClass("active");
			});
		});
	};

	$('#myModalHome').on('hidden.bs.modal', function () {
		chartService.clear('MeasureID');
		chartService.clear('DRIVERS_MeasureName');
	});

	//This function select a chart in the modal
	$rootScope.ModalChartSelector = function (id) {
		if (id == 1) {
			$(".customDropdown").hide();
			$("#popUpOneChart").show();
			$("#popUpThreeChart").hide();
			$rootScope.ModalChartSelectorArray = [
				{ qsObjectID: "qsObjectHomePopUp", qsObject: $rootScope.modalObjects[2].qsObject }
			];
			chartService.getObject($rootScope.ModalChartSelectorArray);
			$("#ModalChartSelectorFirst").addClass("active");
			$("#ModalChartSelectorFirst").siblings().removeClass("active");
		};
		if (id == 2) {
			$(".customDropdown").hide();
			$("#popUpOneChart").show();
			$("#popUpThreeChart").hide();
			$rootScope.ModalChartSelectorArray = [
				{ qsObjectID: "qsObjectHomePopUp", qsObject: $rootScope.modalObjects[1].qsObject }
			];
			chartService.getObject($rootScope.ModalChartSelectorArray);
		};
		if (id == 3) {
			$(".customDropdown").hide();
			$("#popUpOneChart").show();
			$("#popUpThreeChart").hide();
			$rootScope.ModalChartSelectorArray = [
				{ qsObjectID: "qsObjectHomePopUp", qsObject: $rootScope.modalObjects[0].qsObject }
			];
			chartService.getObject($rootScope.ModalChartSelectorArray);
		};
		if (id == 4) {
			$(".customDropdown").show();
			$("#popUpOneChart").hide();
			$("#popUpThreeChart").show();
			$rootScope.ModalChartSelectorArray = [
				{ qsObjectID: "qsObjectHomePopUpPerc", qsObject: $rootScope.modalObjects[3].qsObject },
				{ qsObjectID: "qsObjectHomePopUpNum", qsObject: $rootScope.modalObjects[4].qsObject },
				{ qsObjectID: "qsObjectHomePopUpBigNum", qsObject: $rootScope.modalObjects[5].qsObject },
			];
			chartService.getObject($rootScope.ModalChartSelectorArray);
		};

		$(document).ready(function () {
			$(".btn").click(function () {
				$(this).addClass("active");
				$(this).siblings().removeClass("active");
			});
		});
	};
});
//********** End Summary Controllers

