/** @jsx React.DOM */
define(['jsx!views/twoBigButtons', 'js/views/grid.js'], function(TwoBigButtons, Grid){
	return function(routeName){
		
		if (routeName === "login") {
			if (SS.isLoggedIn()) {
				Grid();
			} else {
				SS.githubLogin().done(function() {
					Grid();
				}.bind(this));
			}
		}
		
		routes =  {
			"": <TwoBigButtons buttonOneName="Buy" buttonTwoName="Sell"/>,
			"search": Grid(),
		};
		return routes[routeName];
	};
});