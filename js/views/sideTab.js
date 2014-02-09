define(["views/sellSock"], function(SellSock){
	var SideTab = React.createClass({
    tabViews: function(tabName){
      if (!this.props.showTab){
        return React.DOM.div();
      }else{
        var tabs = {
          "sell" : SellSock(),
          "default": React.DOM.div(
            {},
            React.DOM.button({onClick:this.changeToSellTab}, "Sell"),
            React.DOM.h2(null,"Hey, I'm a side tab")
          )
        };

        return tabs[tabName] || tabs.default;
      }
    },

    getInitialState: function(){
      return {tabName:"default"};
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

		render: function(){

      var showBtn = React.DOM.button({onClick:this.props.onTabShow},"Show Tab");
      var hideBtn = React.DOM.button({onClick:this.props.onTabHide},"Hide Tab");
      var btn = this.props.showTab ? hideBtn : showBtn;

      var tabWidth = this.props.showTab ? "300px" : "50px";

			return (
        React.DOM.div(
          {className:"sideTab", style:{
            position: "fixed",
            background: "whitesmoke",
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
