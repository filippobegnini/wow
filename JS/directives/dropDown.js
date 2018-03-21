//********** emitLastRepeaterElement
app.obj.mashupTemplateApp.directive('dropDown', [function($rootScope) {
	console.log('dropDown');
    return {
        restrict : 'E',
        scope: {
        	dropdownlist: '=',
        	dropdownid: '=',
        	dropdownlabel: '=',
        	dropdownclass: '=',
        	dropdownfieldselect: '='
        },
        template : '<div class="{{dropdownclass}}"><div style="padding-top: 5px; padding-bottom: 5px;" type="button" ng-click="dropDownFunctionProva(dropdownid)"><span>{{dropdownlabel}}</span><span class="caret"></span></div></div><div id="{{dropdownid}}" class="dropdown-content"><ul class="scrollable-menu"><li ng-repeat="x in ABC" ng-click=""><a href="" class="{{x[0].qState}}" ng-click="selectInFieldDD(x[0].qText)">{{x[0].qText}}</a></li></ul></div>',
        controller: function($scope, $rootScope){
        	app.boot();
        		$scope.selectInFieldDD = function(id){
        			$rootScope.selectInField($scope.dropdownfieldselect, id);
        		};

        		$scope.dropDownFunctionProva = function(b) {
        			$rootScope.dropDownFunction('toggle', b);
        		};
				app.obj.app.createList({
					"qDef": {
						"qFieldDefs": [
						$scope.dropdownlist
						]
					},
					"qInitialDataFetch": [{
						qTop : 0,
						qLeft : 0,
						qHeight : 100,
						qWidth : 1
						}]
					}, function(reply) {
						$scope.ABC = reply.qListObject.qDataPages["0"].qMatrix;
				});
      	
        }
    };
}]);
//********** End emitLastRepeaterElement