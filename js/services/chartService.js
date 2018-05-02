//********** emitLastRepeaterElement
app.service('chartService', function ($log, $q) {


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //This service generate one ID for each of the Objects. The service takes also takes as input the visualisation
    //type "cahrt" or "table".
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 	

    this.customeChartAndTable = function (objectsArray, view) {
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

        angular.forEach(objectsArray, function (value) {
            app.qlikDoc.getObject(value.qsObjectID, value.qsObject);
        });
    };

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //This service generate one ID for each of the Objects. The service takes also takes as input the visualisation
    //type "cahrt" or "table".
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

    this.getObjectAndText = function (objectsArray) {

        angular.forEach(objectsArray, function (value) {
            app.qlikDoc.getObject(value.qsObjectID, value.qsObject).then(function (model){
                str = '#' + value.qsObjectID + '_Title';
                $(str).text(model.layout.title);                
            });
        });
    };    

    this.getTable = function(domID, objID, callback){
        var self = this;

        app.qlikDoc.getObject(domID, objID).then(function (model) {
            var qMatrix;
            
            model.Validated.bind(function () {
                self.getTableData(this).then(function (data) {
                    qMatrix = data[0].qMatrix;
                    callback(qMatrix);
                })
            });

            self.getTableData(model).then(function (data) {
                qMatrix = data[0].qMatrix;
                callback(qMatrix);
            })
        });
    }

    this.getTableData = function (model) {
        var deferred = $q.defer();
        var defaultInitialDataFetch = { qHeight: 100, qWidth: 100 };

        var dLabels = _.pluck(model.layout.qHyperCube.qDimensionInfo, 'qFallbackTitle');
        var mLabels = _.pluck(model.layout.qHyperCube.qMeasureInfo, 'qFallbackTitle');

        var qLabels =[].concat(dLabels, mLabels);

        model.getHyperCubeData('/qHyperCubeDef', [defaultInitialDataFetch]).then(function (data) {
            deferred.resolve(data);
        });

        return deferred.promise;
    }


    this.getDataField = function (fieldName, callback) {
        var callbackObj;
        callbackObj = app.qlikDoc.field("MeasureID").getData(); 
        callbackObj.OnData.bind( function(){
            callback(callbackObj);
        });       
    }; 

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //This service generates one ID for each of the KPIs. The ID will have the same prefix as per the input array.
    //The first measure will have sufix 0, the second will have 1.
    //This service will also generate an ID for each Measure's title. The ID will be the same as the measure's ID
    //with the suffix "Title"
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
    this.modelKPI = function (objectsArray) {
        angular.forEach(objectsArray, function (value) {
            strObj = value.qsObjectID;
            app.qlikDoc.getObject(strObj, value.qsObject).then(function (model) {
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
            app.qlikDoc.getObject(value.qsObject).then(function (model) {
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
        app.qlikDoc.getObject(objectID).then(function (model) {
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

});
//********** End emitLastRepeaterElement

