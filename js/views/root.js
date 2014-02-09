/** @jsx React.DOM */
define(['views/landing', 'views/search', 'jsx!views/twoBigButtons', 'views/sideTab'],
        function(LandingPage, Search, TwoBigButtons, SideTab){
	var Root = React.createClass({
		getInitialState: function(){
			return {
				loggedIn:false,
				pageName: "landing",
			}
		},

		onLogin: function(){
			this.setState({
				loggedIn: true
			});
		},

    page: function(pageName){
      var pages = {
        "landing": LandingPage({router: this.state.router}),
        "search": Search({}),
        "404": React.DOM.div({className:"404"},React.DOM.h2(null, "404, brah"))
      };

      if (pages[pageName] === undefined){
        return pages["404"];
      }else{
        return pages[pageName];
      }
    },

		render: function(){
      return React.DOM.div(
        {},
        React.DOM.div(
          {style:{width:"80%"}},
          this.page(this.state.pageName)),
        SideTab()
      )
		}
	});

	return Root;
});
