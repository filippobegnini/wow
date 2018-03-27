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
	host: "ausyd-feg1.qliktech.com",
	prefix: "/",
	port: 443,
	isSecure: window.location.protocol === "https:"
};

require.config( {
	baseUrl: (config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "" ) + config.prefix + "resources"
} );

me.boot = function () {
	me.obj.app = me.obj.qlik.openApp("2cd981f5-d995-4e96-8aed-dccfa10e1e19", config );
};

app = me;