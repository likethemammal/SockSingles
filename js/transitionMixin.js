define(function(require){
	var routes, router;
	var mainElement = $("[data-js-app]")[0];

	var transitionMixin = {
		transition: function(newComponent){
			React.renderComponent(newComponent, mainElement);
		},

		navigateTo: function(destination){
			if (!destination) destination = "";

			routes = routes || require('jsx!routes');
			router = router || require('router');

			var reactComponent = routes[destination];

			return function(){
				this.transition(reactComponent);
				router.navigate(destination);
			}.bind(this);
		}
	};
	return transitionMixin;
});