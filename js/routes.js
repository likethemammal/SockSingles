/** @jsx React.DOM */
define(['jsx!views/twoBigButtons'], function(TwoBigButtons){
	return {
		"": <TwoBigButtons buttonOneName="Buy" buttonOneLink="search" buttonTwoName="Sell" buttonTwoLink="login" buttonTwoHandler={this.navigateTo("login").bind(this)}/>,
		"search": <TwoBigButtons buttonOneName="Login" buttonTwoName="More"/>,
		"login": <TwoBigButtons buttonOneName="Less" buttonTwoName="Beer"/>,
	};
});