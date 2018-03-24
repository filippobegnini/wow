//********** emitLastRepeaterElement
app.obj.mashupTemplateApp.service('chartService', function () {
    console.log('chartService');
    app.boot();

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //This service generate one ID for each of the Objects. The service takes also takes as input the visualisation
    //type "cahrt" or "table".
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 	

    this.customeChartAndTable = function (objectsArray, view) {
        console.log('customeChartAndTable');
        angular.forEach(objectsArray, function (value) {
            if (value.qsObjectView == view) {
                app.obj.app.getObject(value.qsObjectID, value.qsObject);
            }
        });
    };

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //This service generate one ID for each of the Objects. The service takes also takes as input the visualisation
    //type "cahrt" or "table".
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////	

    this.getObject = function (objectsArray) {
        console.log('getObject');
        console.log(objectArray)
        console.log(app.Object.app)

        angular.forEach(objectsArray, function (value) {
            app.obj.app.getObject(value.qsObjectID, value.qsObject);
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
        angular.forEach(objectsArray, function (value) {
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

                model.Validated.bind(function () {
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
                    $(str).css({ "border-left-color": model.layout.qHyperCube.qDataPages["0"].qMatrix["0"]["1"].qText });
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

                    model.Validated.bind(function () {
                        //Secondary Measure
                        str = '#' + value.qsObjectID + '_1';
                        $(str).text(this.layout.qHyperCube.qDataPages["0"].qMatrix["0"]["1"].qText);
                        str = '.' + value.qsObjectID + '_1Value';
                        $(str).css({ "border-left-color": this.layout.qHyperCube.qDataPages["0"].qMatrix["0"]["1"].qText });
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
                    model.Validated.bind(function () {
                        str = '#' + value.qsObjectID + '_Title';
                        $(str).text(this.layout.title);
                    });
                };

                str = '#' + value.qsObjectID + '_SubTitle';
                if (model.layout.subtitle) {
                    $(str).text(model.layout.subtitle);
                    model.Validated.bind(function () {
                        str = '#' + value.qsObjectID + '_SubTitle';
                        $(str).text(this.layout.subtitle);
                    });
                };

                str = '#' + value.qsObjectID + '_Footer';
                if (model.layout.footer) {
                    $(str).text(model.layout.footer);
                    model.Validated.bind(function () {
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
        angular.forEach(objectsArray, function (value) {
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
        app.obj.app.getObject(objectID).then(function (model) {
            console.log(objectID);
            var table = app.obj.qlik.table(model);
            table.exportData({ download: true });
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
        if (Number(fieldValues)) {
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
        app.obj.app.variable.setStringValue(varName, varValue);
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////



});
//********** End emitLastRepeaterElement

