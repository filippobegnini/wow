//********** emitLastRepeaterElement
app.service('chartService', function ($log) {
    $log.info('chartService');


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //This service generate one ID for each of the Objects. The service takes also takes as input the visualisation
    //type "cahrt" or "table".
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 	

    this.customeChartAndTable = function (objectsArray, view) {
        $log.info('customeChartAndTable');
        angular.forEach(objectsArray, function (value) {
            if (value.qsObjectView == view) {
                app.qlikDoc.getObject(value.qsObjectID, value.qsObject);
            }
        });
    };

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //This service generate one ID for each of the Objects. The service takes also takes as input the visualisation
    //type "cahrt" or "table".
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////	

    this.getObject = function (objectsArray) {
        $log.info('getObject');
        $log.info(objectsArray)

        angular.forEach(objectsArray, function (value) {
            app.qlikDoc.getObject(value.qsObjectID, value.qsObject);
        });
    };


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //This service generates one ID for each of the KPIs. The ID will have the same prefix as per the input array.
    //The first measure will have sufix 0, the second will have 1.
    //This service will also generate an ID for each Measure's title. The ID will be the same as the measure's ID
    //with the suffix "Title"
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
    this.modelKPI = function (objectsArray) {
        $log.info('modelKPI');
        angular.forEach(objectsArray, function (value) {
            strObj = value.qsObjectID;
            app.qlikDoc.getObject(strObj, value.qsObject).then(function (model) {
                //Primary Measure
                str = '#' + value.qsObjectID + '_0';
                angular.element(str).text(model.layout.qHyperCube.qDataPages["0"].qMatrix["0"]["0"].qText);
                // //Primary Measure Colour
                // if(model.layout.qHyperCube.qMeasureInfo["0"].conditionalColoring.paletteSingleColor.color) {
                // 	str = '.' + value.qsObjectID + '_0Class'; 
                // 	angular.element(str).css("color", model.layout.qHyperCube.qMeasureInfo["0"].conditionalColoring.paletteSingleColor.color);
                // };
                //Primary Measure Label
                str = '#' + value.qsObjectID + '_0Title';
                angular.element(str).text(model.layout.qHyperCube.qMeasureInfo["0"].qFallbackTitle);

                model.Validated.bind(function () {
                    //Primary Measure
                    str = '#' + value.qsObjectID + '_0';
                    angular.element(str).text(this.layout.qHyperCube.qDataPages["0"].qMatrix["0"]["0"].qText);
                    // //Primary Measure Colour
                    // if(this.layout.qHyperCube.qMeasureInfo["0"].conditionalColoring.paletteSingleColor.color) {
                    // 	str = value.qsObjectID + '_0Colour'; 
                    // 	$rootScope[str] = this.layout.qHyperCube.qMeasureInfo["0"].conditionalColoring.paletteSingleColor.color;
                    // };	
                    //Primary Measure Label					
                    str = '#' + value.qsObjectID + '_0Title';
                    angular.element(str).text(this.layout.qHyperCube.qMeasureInfo["0"].qFallbackTitle);
                });

                //Secondary Measure
                if (model.layout.qHyperCube.qDataPages["0"].qMatrix["0"]["1"]) {
                    str = '#' + value.qsObjectID + '_1';
                    angular.element(str).text(model.layout.qHyperCube.qDataPages["0"].qMatrix["0"]["1"].qText);

                    str = '.' + value.qsObjectID + '_1Value';
                    angular.element(str).css({ "border-left-color": model.layout.qHyperCube.qDataPages["0"].qMatrix["0"]["1"].qText });
                    // $log.info(str);
                    // $log.info($rootScope[str]);

                    // //Secondary Measure Colour
                    // if(model.layout.qHyperCube.qMeasureInfo["1"].conditionalColoring.paletteSingleColor.color) {
                    // 	str = value.qsObjectID + '_1Colour'; 
                    // 	$rootScope[str] = model.layout.qHyperCube.qMeasureInfo["1"].conditionalColoring.paletteSingleColor.color;
                    // };					
                    //Secondary Measure Label
                    str = '#' + value.qsObjectID + '_1Title';
                    angular.element(str).text(model.layout.qHyperCube.qMeasureInfo["1"].qFallbackTitle);

                    model.Validated.bind(function () {
                        //Secondary Measure
                        str = '#' + value.qsObjectID + '_1';
                        angular.element(str).text(this.layout.qHyperCube.qDataPages["0"].qMatrix["0"]["1"].qText);
                        str = '.' + value.qsObjectID + '_1Value';
                        angular.element(str).css({ "border-left-color": this.layout.qHyperCube.qDataPages["0"].qMatrix["0"]["1"].qText });
                        // //Secondary Measure Colour
                        // if(this.layout.qHyperCube.qMeasureInfo["1"].conditionalColoring.paletteSingleColor.color) {
                        // 	str = value.qsObjectID + '_1Colour'; 
                        // 	$rootScope[str] = this.layout.qHyperCube.qMeasureInfo["1"].conditionalColoring.paletteSingleColor.color;
                        // };					
                        //Secondary Measure Label
                        str = '#' + value.qsObjectID + '_1Title';
                        angular.element(str).text(this.layout.qHyperCube.qMeasureInfo["1"].qFallbackTitle);
                    });
                };

                str = '#' + value.qsObjectID + '_Title';
                if (model.layout.title) {
                    angular.element(str).text(model.layout.title);
                    model.Validated.bind(function () {
                        str = '#' + value.qsObjectID + '_Title';
                        angular.element(str).text(this.layout.title);
                    });
                };

                str = '#' + value.qsObjectID + '_SubTitle';
                if (model.layout.subtitle) {
                    angular.element(str).text(model.layout.subtitle);
                    model.Validated.bind(function () {
                        str = '#' + value.qsObjectID + '_SubTitle';
                        angular.element(str).text(this.layout.subtitle);
                    });
                };

                str = '#' + value.qsObjectID + '_Footer';
                if (model.layout.footer) {
                    angular.element(str).text(model.layout.footer);
                    model.Validated.bind(function () {
                        str = '#' + value.qsObjectID + '_Footer';
                        angular.element(str).text(this.layout.footer);
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
        angular.forEach(objectsArray, function (value) {
            app.qlikDoc.getObject(value.qsObject).then(function (model) {
                str = '#' + value.qsObjectID;
                angular.element(str).text(model.layout.qHyperCube.qGrandTotalRow[0].qText);
            });
        });
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //This service export an object
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
    this.export = function (objectID) {
        app.qlikDoc.getObject(objectID).then(function (model) {
            $log.info(objectID);
            var table = app.qlikDoc.table(model);
            table.exportData({ download: true });
        });
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //This service resize all the objects
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
    this.resize = function () {
        app.qlik.resize();
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //This service setlect a value in a field
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
    this.selectValues = function (fieldName, fieldValues) {
        $log.info('selectValues');
        $log.info(fieldValues);
        $log.info(fieldName);
        if (Number(fieldValues)) {
            app.qlikDoc.field(fieldName).selectValues([Number(fieldValues)], true, true);
        } else {
            app.qlikDoc.field(fieldName).selectValues([fieldValues], true, true);
        };
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //This service clear a field
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
    this.clear = function (fieldName) {
        app.qlikDoc.field(fieldName).clear();
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //This service set a variable 
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
    this.setStringValue = function (varName, varValue) {
        app.qlikDoc.variable.setStringValue(varName, varValue);
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    this.coloursKPI = function (objectsArray) {
        console.log('coloursKPI');
        angular.forEach(objectsArray, function (value) {
            strObj = value.qsObjectID;
            app.qlikDoc.getObject(strObj, value.qsObject).then(function (model) {
                str = '.' + value.qsObjectID + '_1';
                angular.element(str).css({ "background-color": model.layout.qHyperCube.qDataPages["0"].qMatrix["0"]["0"].qText });
                model.Validated.bind(function () {
                    str = '.' + value.qsObjectID + '_1';
                    angular.element(str).css({ "background-color": this.layout.qHyperCube.qDataPages["0"].qMatrix["0"]["0"].qText });
                });
            });
        });
    };


});
//********** End emitLastRepeaterElement

