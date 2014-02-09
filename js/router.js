/** @jsx React.DOM */
define(['jsx!views/root'], function(Root){
	var mainElement = $("[data-js-app]")[0];

	var root = React.renderComponent(
    Root(),
		mainElement
	);

  var router = new (Backbone.Router.extend({
    routes: {
      "login":function(){
      },
      "search":function(){
        console.log("Going to search Page")
        root.setState({pageName:"search"})
      },
      "":function(){
        root.setState({pageName:"landing"})
      },
      "foo":function(){
        console.log("foo")
        root.setState({pageName:"foo"})
      }

    }
  }));

  root.setState({router: router})

	return root;
});
