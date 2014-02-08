requirejs.config({
	baseUrl: './js/',
	paths: {
		jsx: "./vendors/jsx"
	},
	shim: {
		JSXTransformer: {
			exports: "vendors/JSXTransformer"
		}
	}
});

require(["jsx!router"], function(Router){
	if (Backbone.history){
		new Router;
		Backbone.history.start();
	}
});