/** @jsx React.DOM */
define(
[
	'jsx!views/twoBigButtons'
],
function(TwoBigButtons){
	var Router = Backbone.Router.extend({
		routes: {
			'': 'index'
		},
		index: function(){
			React.renderComponent(
				<TwoBigButtons />,
				$("#container")[0]
			);
		}
	});
	return Router;
});