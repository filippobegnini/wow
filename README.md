# wow

#install dependencies

```npm install```

Dependencies like jquery, fontawesome, bootstrap now being managed through NPM - use npm install to get the dependencies on your local machine.

#Configuration

Full config of environment is inside main.js at the top of the page. Add this for each environment you want:

```		"development": {
		"qlikConfig": {
			"host": "localhost",
			"prefix": "/",
			"port": 4848,
			"isSecure": window.location.protocol === "https:"
		},
		"appId": "Woolworths - v0.8.qvf"
	},```

Update this line in main.js to change the environment:
```
//Set to development or production
var config = configfile.development;
```