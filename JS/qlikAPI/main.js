var scriptsUrl = 'https://ausyd-feg1.qliktech.com/extensions/wow/';

require.config({
  baseUrl: "https://ausyd-feg1.qliktech.com/resources",
  paths: {
  	'app': scriptsUrl + 'js/qlikAPI/app',
	'home': scriptsUrl + 'js/controllers/home',  	
	'pageOne': scriptsUrl + 'js/controllers/pageOne',
	'services': scriptsUrl + 'js/services/services',
	'setUp': scriptsUrl + 'js/services/setUp',
	'emitLastRepeaterElement': scriptsUrl + 'js/directives/emitLastRepeaterElement',  	
	'dropDown': scriptsUrl + 'js/directives/dropDown', 
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
			.when( '/pageOne', {
				templateUrl: 'VIEWS/pageOne.html',
				controller: 'pageOneCtrl'
			} )				
			.when( '/#', {
				templateUrl: 'VIEWS/home.html',
				controller: 'homeCtrl'
			} )		
			.when( '/home', {
				templateUrl: 'VIEWS/home.html',
				controller: 'homeCtrl'
			} )						
			.otherwise( {
				templateUrl: 'VIEWS/home.html',
				controller: 'homeCtrl'
			} );
		} );

		app.obj.mashupTemplateApp.run( function($rootScope) {
		});

		require([
					'js/qlik',
					'services',	
					'setUp',
					'home',				
					'pageOne',
					'emitLastRepeaterElement',
					'dropDown',
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
