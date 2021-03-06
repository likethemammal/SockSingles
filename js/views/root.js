/** @jsx React.DOM */
define(['views/landing', 'views/search', 'jsx!views/twoBigButtons', 'views/single', 'views/sideTab', 'views/nav'],
        function(LandingPage, Search, TwoBigButtons, Single, SideTab, Nav){
	var Root = React.createClass({
		getInitialState: function(){
			return {
				loggedIn:false,
				pageName: "landing",
        showTab: false
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
        "landing": LandingPage({router: this.state.router, onSellClick:this.onTabShow}),
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

      var nav =  this.state.pageName === "landing" ? null : Nav({}),
          sideTab =  this.state.pageName === "landing" ? null : SideTab({showTab:this.state.showTab,
                                                                         onTabShow: this.onTabShow,
                                                                         onTabHide: this.onTabHide})

      return React.DOM.div(
        {},
        React.DOM.div({}, this.page(this.state.pageName)),
        nav,
        sideTab
      )
		}
	});

	return Root;
});
