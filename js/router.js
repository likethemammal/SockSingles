/** @jsx React.DOM */
define(['jsx!views/root'], function(Root){
  //setup filepicker
  filepicker.setKey("A1oJoPr6RQLapJBPDDbh9z");

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
      "single/:id":function(id){
        console.log("Going to single Page")
        root.setState({
			pageName:"single",
			id: id
		})
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
