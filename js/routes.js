/** @jsx React.DOM */
define(['jsx!views/twoBigButtons', 'js/views/grid.js'], function(TwoBigButtons, Grid){
	return function(routeName){
		
		
		routes =  {
			"":	<TwoBigButtons
					buttonOneName="Buy"
					buttonOneClass="btn-blue"
					buttonOneHandler={function() {
						window.location.hash = 'search'
					}}

					buttonTwoName="Sell"
					buttonTwoClass="btn-green"
					buttonTwoHandler={function() {
						var SS = sock_singles.core;
						if (SS.isLoggedIn()) {
							window.location.hash = 'search';
						} else {
							SS.githubLogin().done(function() {
								window.location.hash = 'search';
							}.bind(this));
						}
					}}
				/>,
			"search": Grid(),
		};
		return routes[routeName];
	};
});