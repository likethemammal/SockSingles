define(function(){
	var SS = sock_singles.core;

	var Nav = React.createClass({
		
		render: function(){
            var nav,
                navItem,
                navItems = [];
                
            navItems.push(React.DOM.div({
                className: 'nav-item nav-buy',
				onClick: function() {
					window.location.hash = '#search';
				}
            }, 'Buy'));
            
            navItems.push(React.DOM.div({
                className: 'nav-item nav-sell',
				onClick: function() {
					window.location.hash = '#sell';
				}
            }, 'Sell'));
                        
            navItems.push(React.DOM.div({
                className: 'nav-item nav-about',
				onClick: function() {
					window.location.hash = '#about';
				}
            }, 'About'));
                        
            nav = React.DOM.div({
                className: 'nav'
            }, navItems)
            
			  	return nav;
        }
	});

	return Nav;
});
