//Environment Variable configfile

var configfile = {
	"development": {
		"qlikConfig": {
			"host": "localhost",
			"prefix": "/",
			"port": 4848,
			"isSecure": window.location.protocol === "https:"
		},
		"appId": "Woolworths - v0.8.qvf"
	},
	"production": {
		"qlikConfig": {
			"host": "ausyd-feg1.qliktech.com",
			"prefix": "/",
			"port": 443,
			"isSecure": window.location.protocol === "https:"
		},
		"appId": "a891ee43-1d82-403f-a7ba-23a48cb5f334"
	}
}


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
		'chartService': scriptsUrl + 'js/services/chartService',
		'setUpService': scriptsUrl + 'js/services/setUpService',
		'dropdownDirective': scriptsUrl + 'js/directives/dropdownDirective',
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
			.when('/details', {
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
		'chartService',
		'setUpService',
		'mainController',
		'homeController',
		'detailsController',
		'dropdownDirective',
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
