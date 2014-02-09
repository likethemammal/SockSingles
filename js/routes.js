/** @jsx React.DOM */
define(['jsx!views/twoBigButtons'], function(TwoBigButtons){
	return function(routeName){
		routes =  {
			"": <TwoBigButtons buttonOneName="Buy" buttonTwoName="Sell"/>,
			"search": <TwoBigButtons buttonOneName="Login" buttonTwoName="More"/>,
			"login": <TwoBigButtons buttonOneName="Less" buttonTwoName="Beer"/>
		};
		return routes[routeName];
	};
});