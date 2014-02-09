/** @jsx React.DOM */
define(['jsx!views/root'], function(Root){
	var mainElement = $("[data-js-app]")[0];

	var root = React.renderComponent(
		<Root />,
		mainElement
	);

	window.onhashchange = function(page){
		var routeName = page.target.location.hash.substring(1);
		root.setState({
			routeName: routeName
		});
	};

	return root;
});