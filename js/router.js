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
				<TwoBigButtons buttonOneName="Buy" buttonOneHandler={this.search} buttonTwoName="Sell" buttonTwoHandler={this.login}/>,
				mainElement
			);
		},
		search: function(){

		},
		login: function(){

		}
	});
	return Router;
});