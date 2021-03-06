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

require(["jsx!router"], function(routerNroot){
	if (Backbone.history){
		Backbone.history.start();
	}
});
