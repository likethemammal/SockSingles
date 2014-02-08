define(['jsx!routes'], function(routes){

	var mainElement = $("[data-js-app]")[0];

	var routerProperties = {};
	_.each(routes, function(value, key, list){
		routerProperties[key] = function(){
			React.renderComponent(
				value,
				mainElement
			);
		};
	});

	var router = new (Backbone.Router.extend({
		routes: routerProperties
	}));

	return router;
});