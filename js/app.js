requirejs.config({
	baseUrl: './js/',
});

require(["./router"], function(Router){
	if (Backbone.history){
		new Router;
		Backbone.history.start();
	}
});