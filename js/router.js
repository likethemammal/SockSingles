/** @jsx React.DOM */
define(
[
	'jsx!views/twoBigButtons'
],
function(TwoBigButtons){
	var mainElement = $("[data-js-app]")[0],
		btnContainer = $("[data-js-btn-container]")[0];

	var Router = Backbone.Router.extend({
		routes: {
			'': 'index',
			'search': 'search',
			'login': 'login'
		},
		index: function(){
			React.renderComponent(
				<TwoBigButtons
					buttonOneName="Buy"
					buttonOneClass="btn-blue"
					buttonOneHandler={this.navigate.bind(this, "search", { trigger: true })}
					
					buttonTwoName="Sell"
					buttonTwoClass="btn-green"
					buttonTwoHandler={this.loginSignup.bind(this)}
				/>,
				mainElement
			);
			$(mainElement).addClass('landing');

		},
		search: function(){
		},
		
		loginSignup: function() {
			React.renderComponent(
				<TwoBigButtons
					buttonOneName="Login"
					buttonOneHandler={this.navigate.bind(this, "login", { trigger: true })}
					buttonOneClass="btn-green-blue"
					buttonTwoName="Signup"
					buttonTwoClass="btn-dark-blue"
					buttonTwoHandler={this.navigate.bind(this, "signup", { trigger: true })}
				/>,
				mainElement
			);
			$(mainElement).addClass('login-signup');

		},
		
		login: function(){
			
			this.loginSignup();

			$(btnContainer).animate({bottom: '100px'}, 1000, function() {
				console.log('what the shit');
			});
		}
	});
	return Router;
});