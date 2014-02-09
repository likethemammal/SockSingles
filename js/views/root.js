/** @jsx React.DOM */
define(['views/landing', 'views/search', 'jsx!views/twoBigButtons', 'views/single', 'views/sideTab'],
        function(LandingPage, Search, TwoBigButtons, Single, SideTab){
	var Root = React.createClass({
		getInitialState: function(){
			return {
				loggedIn:false,
				pageName: "landing",
        showTab: true
			}
		},

    onTabShow: function(){
      this.setState({showTab: true})
    },

    onTabHide: function(){
      this.setState({showTab: false})
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
        "single": Single({}),
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
        React.DOM.div({}, this.page(this.state.pageName)),
        SideTab({showTab:this.state.showTab,
                 onTabShow: this.onTabShow,
                 onTabHide: this.onTabHide})
      )
		}
	});

	return Root;
});
