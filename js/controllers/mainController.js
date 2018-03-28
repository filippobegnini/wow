//********** home Controllers
app.controller('mainController', function ($scope, $log, $rootScope, $location, chartService) {
    console.log('main controller loaded')

    $rootScope.periodSelected = 'CW';
    $rootScope.periodFieldName = 'FIN_WEEK_NO';

    $rootScope.periodButtons = [
        {
            text: 'Current Week',
            fieldname: 'FIN_WEEK_NO',
            value: 'CW'
        }, {
            text: 'Current Month',
            fieldname: 'FIN_YEAR_MONTH',
            value: 'CM'
        }, {
            text: 'Year to Date',
            fieldname: 'FIN_MONTH',
            Value: 'FCY'
        }
    ];

    $rootScope.PCPSelected = 'TG';

    $rootScope.PCPButtons = [
        {
            text: 'Target',
            value: 'TG'
        }, {
            text: 'Previous Year',
            value: 'PY'
        }
    ];


    //Select period function for radio
    

    $rootScope.periodSelect = function(id) {
        console.log(id)
        //Lookup the value
        console.log('Period selected changed!')
    }

    //Watch the scope variable for changes
    $rootScope.$watch('periodSelected', function () {

        //Lookup the value
        console.log('Period selected changed!')

        /*
        var activePeriod = $scope.periodButtons.find(function (element) {
            return element.value == $scope.periodSelected;
        });

        console.log(activePeriod.value);
*/


        //  chartService.setStringValue('vDimPeriod', activePeriod.value);
        // chartService.setStringValue('vDimPeriodName', activePeriod.fieldname);

    });


})