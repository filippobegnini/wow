var configfile = {
	"development": {
		"host": "localhost",
		"prefix": "/",
		"port": 4848,
		"isSecure": window.location.protocol === "https:"
	},
	"production": {
		"host": "ausyd-feg1.qliktech.com",
		"prefix": "/",
		"port": 443,
		"isSecure": window.location.protocol === "https:"

	}
}



var config = configfile.development;
var prefix = window.location.pathname.substr(0, window.location.pathname.toLowerCase().lastIndexOf("/extensions") + 1);

var baseUrl = (config.isSecure ? "https://" : "http://") + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources";
var scriptsUrl = 'http://localhost:4848/extensions/wow/';

require.config({
	baseUrl: baseUrl,
	paths: {
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
		'homeController',
		'detailsController',
		'dropdownDirective',
		'emitLastRepeaterElement'
	], function (qlik) {





		// bootstrap my angular application, including the "qlik-angular" module
		// must be done before the Qlik Sense API is used
		// you must also set qva-bootstrap="false" in your html file


		angular.bootstrap(document, ["mashupTemplateApp", "qlik-angular"])

		app.qlik = qlik;

		qlik.setOnError(function (error) {
			//TODO:bootstrap removes html elements on dismiss..should hide instead
			$("#errmsg").html(error.message).parent().show();
		});


	});
});
