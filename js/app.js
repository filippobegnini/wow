//var config = require('./config.json');

var me = {
	obj:{
		qlik: null,
		app: null,
		angularApp: null,
		model: [],
		getObjectModel: []
	}
};




var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );

var config = {
	host: "localhost",
	prefix: "/",
	port: 4848,
	isSecure: window.location.protocol === "https:"
};

require.config( {
	baseUrl: (config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "" ) + config.prefix + "resources"
} );

me.boot = function () {
	me.obj.app = me.obj.qlik.openApp("Woolworths - v0.8.qvf", config );
};

app = me;