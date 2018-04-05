app.component("kpiMegamenu", {
    templateUrl: 'js/components/kpi-megamenu/kpi-megamenu.html',
    controller: kpiMegamenuController,
    bindings: {
    }
});

function kpiMegamenuController($element, $location, $rootScope) {
    var ctrl = this, kraIds;

    kraIds = [1, 0, 2];

    ctrl.$onInit = function(){
        app.qlikDoc.createCube({
            'qInitialDataFetch': [{
              'qHeight': 50,
              'qWidth': 3
            }],
            'qDimensions': [{
                'qDef': {
                  'qFieldDefs': ["MeasureCategory"]
                },
                'qNullSuppression': true
              },{
                'qDef': {
                  'qFieldDefs': ["MeasureName"]
                },
                'qNullSuppression': true
              },{
                'qDef': {
                  'qFieldDefs': ["MeasureID"]
                }
              }],
            'qMeasures': []
          }, function(res){
              var kraList = {};
              
              var matrix = res.qHyperCube.qDataPages[0].qMatrix;
              console.log(matrix);

              _.forEach(matrix, function(item, idx){
                  var kraName, kpiName, current;

                  kraName = item[0].qText;
                  kpiName = item[1].qText;
                  kpiID = item[2].qNum;

                  current = kraList[kraName] || [];
                  current.push({
                      id: kpiID,
                      name: kpiName
                  });

                  kraList[kraName] = current;
              });

              ctrl.kraList = _.map(kraList, function(item, key){
                    item.shift();

                    return {
                        name: key,
                        kpiList: item
                    }
              });
        });
    }

   ctrl.goToKRA = function(id) {
       $rootScope.$broadcast("KRA_SELECTED", id);
    };	
    
    ctrl.goToMetricAnalysis = function(id, from) {
        $rootScope.$broadcast("KPI_SELECTED", {'id': id, 'from': from});
     };	
    
    ctrl.$onChanges = function(toast){
        
    }

    ctrl.select = function(){
        
    }
}