//Environment Variable configfile

var configfile = {
	"development": {
		"qlikConfig": {
			"host": "ausyd-feg1.qliktech.com",
			"prefix": "/",
			"port": 443,
			"isSecure": window.location.protocol === "https:"
		},
		"appId": "36c21da4-4f7d-4f56-8a6d-67d5630fbeb1"
	},
	"production": {
		"qlikConfig": {
			"host": "ncdwlqvasp0002.woolworths.com.au",
			"prefix": "/",
			"port": 80,
			"isSecure": window.location.protocol === "https:"
		},
		"appId": "f31c9cb6-c21a-4978-81ea-e568e0b28668"
	}
}
//
//f31c9cb6-c21a-4978-81ea-e568e0b28668

//Set to development or production
var config = configfile.development;

//////////////////////////////////////////////////////

var prefix = window.location.pathname.substr(0, window.location.pathname.toLowerCase().lastIndexOf("/extensions") + 1);
var baseUrl = (config.qlikConfig.isSecure ? "https://" : "http://") + config.qlikConfig.host + (config.qlikConfig.port ? ":" + config.qlikConfig.port : "") + config.qlikConfig.prefix;


var scriptsUrl = window.location.protocol + "//" +  window.location.host + "/extensions/" + window.location.pathname.split('/')[2] +'/';


require.config({
	baseUrl: baseUrl + "resources",
	paths: {
		'mainController': scriptsUrl + 'js/controllers/mainController',
		'homeController': scriptsUrl + 'js/controllers/homeController',
		'detailsController': scriptsUrl + 'js/controllers/detailsController',
		'kra': scriptsUrl + 'js/controllers/kra',
		'metricanalysis': scriptsUrl + 'js/controllers/metricanalysis',	
		'chartService': scriptsUrl + 'js/services/chartService',
		'setUpService': scriptsUrl + 'js/services/setUpService',
		'dropdownDirective': scriptsUrl + 'js/directives/dropdown/dropdown.directive',
		'filterDirective': scriptsUrl + 'js/directives/filter/filter.directive',
		'senseObject': scriptsUrl + 'js/directives/sense-object/sense-object.directive',
		'toastComponent': scriptsUrl + 'js/components/toast/toast.component',
		'constants': scriptsUrl + 'js/constants',
		'emitLastRepeaterElement': scriptsUrl + 'js/directives/emitLastRepeaterElement',
	}
});

var app = {};



define([
	'require',
	'angular'
], function (require, angular) {
	'use strict';

	app = angular.module("mashupTemplateApp", ['ngRoute']);


	app.config(function ($routeProvider) {
		$routeProvider
			.when( '/metricanalysis', {
				templateUrl: 'js/views/metricanalysis.html',
				controller: 'metricanalysisCtrl'
			})				
			.when( '/kra', {
				templateUrl: 'js/views/kra.html',
				controller: 'kraCtrl'
			})	
			.when('/drivers', {
				templateUrl: 'js/views/details.html',
				controller: 'detailsController'
			})
			.when('/#', {
				templateUrl: 'js/views/home.html',
				controller: 'homeController'
			})
			.when('/home', {
				templateUrl: 'js/views/home.html',
				controller: 'homeController'
			})
			.otherwise({
				templateUrl: 'js/views/home.html',
				controller: 'homeController'
			});
	});



	require([
		'js/qlik',
		'constants',
		'chartService',
		'setUpService',
		'mainController',
		'homeController',
		'detailsController',
		'kra',	
		'metricanalysis',
		'dropdownDirective',
		'filterDirective',
		'senseObject',
		'toastComponent',
		'emitLastRepeaterElement'
	], function (qlik) {



		// bootstrap my angular application, including the "qlik-angular" module
		// must be done before the Qlik Sense API is used
		// you must also set qva-bootstrap="false" in your html file


		angular.bootstrap(document, ["mashupTemplateApp", "qlik-angular"])

		app.qlikDoc = qlik.openApp(config.appId, config.qlikConfig);
		app.qlik = qlik;

		qlik.setOnError(function (error) {
			//TODO:bootstrap removes html elements on dismiss..should hide instead
			$("#errmsg").html(error.message).parent().show();
		});


	});
});
