/** @jsx React.DOM */
define(
[
	'jsx!views/twoBigButtons'
],
function(TwoBigButtons){
	var mainElement = $("[data-js-app]")[0];

	var Router = Backbone.Router.extend({
		routes: {
			'': 'index',
			'search': 'search',
			'login': 'login'
		},
		index: function(){
			React.renderComponent(
				<TwoBigButtons buttonOneName="Buy" buttonOneHandler={this.navigate.bind(this, "search", { trigger: true })} buttonTwoName="Sell" buttonTwoHandler={this.navigate.bind(this, "login", { trigger: true })} />,
				mainElement
			);
		},
		search: function(){
			console.log('search');
		},
		login: function(){
			console.log('login');
		}
	});
	return Router;
});