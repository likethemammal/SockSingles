/** @jsx React.DOM */
define(
[
	'jsx!views/twoBigButtons'
],
function(TwoBigButtons){
	var SS = sock_singles.core,
		mainElement = $("[data-js-app]")[0],
		btnContainer = $("[data-js-btn-container]")[0];

	var Router = Backbone.Router.extend({
		routes: {
			'': 'index',
			'search': 'search'
			},
			
		index: function(){
			React.renderComponent(
				<TwoBigButtons
					buttonOneName="Buy"
					buttonOneClass="btn-blue"
					buttonOneHandler={this.navigate.bind(this, "search", { trigger: true })}
					
					buttonTwoName="Sell"
					buttonTwoClass="btn-green"
					buttonTwoHandler={this.login.bind(this)}
				/>,
				mainElement
			);
			$(mainElement).addClass('landing');

		},
		
		search: function(){
			console.log('search');
		},
		
		login: function() {
			
			if (SS.isLoggedIn()) {
				this.navigate("search", { trigger: true,  tabOpen: true});
			} else {
				SS.githubLogin().done(function() {
					this.navigate("search", { trigger: true});
				}.bind(this));
			}

		},
	});
	return Router;
});