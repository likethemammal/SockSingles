define(function(){
	var SideTab = React.createClass({
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
          React.DOM.h2(null, "Hey there, I'm a side tab"),
          btn
          )
			);
		}
	});

	return SideTab;
});
