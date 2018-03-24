var scriptsUrl = 'http://localhost:4848/extensions/wow/';

require.config({
  baseUrl: "http://localhost:4848/resources",
  paths: {
  	'app': scriptsUrl + 'js/qlikAPI/app',
	'homeController': scriptsUrl + 'js/controllers/homeController',  	
	'detailsController': scriptsUrl + 'js/controllers/detailsController',
	'services': scriptsUrl + 'js/services/services',
	'setUpService': scriptsUrl + 'js/services/setUpService',
	'emitLastRepeaterElementDirective': scriptsUrl + 'js/directives/emitLastRepeaterElementDirective',  	
	'dropdownDirective': scriptsUrl + 'js/directives/dropdownDirective', 
  }
});

requirejs.config(  
{ config:{  
text:{ useXhr:function(url, protocol, hostname, port){return true;}}  
}  
}); 

define([
    'require',
    'angular',	
    'app'
	], function (require, angular) {
		'use strict';
	
		app.obj.mashupTemplateApp = angular.module( "mashupTemplateApp", ['ngRoute'] );

		app.obj.mashupTemplateApp.config( function ( $routeProvider ) {
			$routeProvider	
			.when( '/details', {
				templateUrl: 'views/details.html',
				controller: 'detailsController'
			} )				
			.when( '/#', {
				templateUrl: 'views/home.html',
				controller: 'homeController'
			} )		
			.when( '/home', {
				templateUrl: 'views/home.html',
				controller: 'homeController'
			} )						
			.otherwise( {
				templateUrl: 'views/home.html',
				controller: 'homeController'
			} );
		} );



		require([
					'js/qlik',
					'services',	
					'setUpService',
					'homeController',				
					'detailsController',
					'emitLastRepeaterElementDirective',
					'dropdownDirective',
				], function ( qlik ){

			app.obj.qlik = qlik;

			// bootstrap my angular application, including the "qlik-angular" module
			// must be done before the Qlik Sense API is used
			// you must also set qva-bootstrap="false" in your html file
			angular.bootstrap( document, ["mashupTemplateApp", "qlik-angular"] );

			qlik.setOnError( function ( error ) {
				//TODO:bootstrap removes html elements on dismiss..should hide instead
				$( "#errmsg" ).html( error.message ).parent().show();
			} );

			app.boot();
		});		
	});
