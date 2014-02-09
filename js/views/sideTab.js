define(function(){
	var SideTab = React.createClass({
		render: function(){
			return (
        React.DOM.div(
          {className:"sideTab", style:{
            position: "fixed",
            background: "whitesmoke",
            height: "100%",
            top: "0px",
            right: "0px",
            width:"20%"
          }},
          React.DOM.h2(null, "Hey there, I'm a side tab"))
			);
		}
	});

	return SideTab;
});
