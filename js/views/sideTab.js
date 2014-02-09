define(["views/sellSock"], function(SellSock){
	var SideTab = React.createClass({
    tabViews: function(tabName){
      if (!this.props.showTab){
        return React.DOM.div();
      }else{
        var tabs = {
          "default": SellSock()
        };

        return tabs[tabName] || tabs.default;
      }
    },

    getInitialState: function(){
      return {tabName:"sell"};
    },

    checkLoggedInStatus: function(){
      if(!sock_singles.core.isLoggedIn()){
        sock_singles.core.githubLogin();
      }
    },

    changeToSellTab: function(){
      this.checkLoggedInStatus()

      this.setState({tabName:"sell"});
    },

    componentWillMount: function(){
      this.checkLoggedInStatus()
    },

		render: function(){

      var showBtn = React.DOM.div({className: 'btn-show-tab', onClick:this.props.onTabShow});
      var hideBtn = React.DOM.div({className: 'btn-hide-tab', onClick:this.props.onTabHide});
      var btn = this.props.showTab ? hideBtn : showBtn;

      var tabWidth = this.props.showTab ? "300px" : "50px";

			return (
        React.DOM.div(
          {className:"sideTab", style:{
            position: "fixed",
            height: "100%",
            top: "0px",
            right: "0px",
            width:tabWidth
          }},
          btn,
          this.tabViews(this.state.tabName)
          )
			);
		}
	});

	return SideTab;
});
