// var container = document.querySelector('#container');
// var msnry = new Masonry( container, {
//   // options
//   columnWidth: '.grid-sizer',
//   itemSelector: '.item-wrapper'
// });

define(function(){
	var SS = sock_singles.core;
	
	var Grid = React.createClass({
		
		getInitialState: function() {
			return {socks: []};
		},
		
		componentWillMount: function() {
			SS.getSocks().done(function(socks) {
				this.setState({socks: socks});				
			}.bind(this));
		},
		
		render: function(){
          var grid,
              gridItems = [],
			  styles,
			  caption,
			  features,
			  item,
			  itemWrapper;
			  
			  console.log(this.state);
          
          for (var i = 0; i < this.state.socks.length; i++) {
			  	styles = {
					'background-image': ['url(', this.state.socks[i]['image-path'], ')'].join(''),
					'background-size': 'auto 320px'
				}
				
				colorDiv = React.DOM.div({className: 'color-box', style: {background: this.state.socks[i].color}})
				colorFeature = React.DOM.div({ className: 'color feature'}, colorDiv);
				lengthFeature = React.DOM.div({ className: 'length feature' }, this.state.socks[i].length + '"');
				sizeFeature = React.DOM.div({ className: 'size feature' }, this.state.socks[i].size);
			
				features = React.DOM.div({ className: 'features' }, [colorFeature, lengthFeature, sizeFeature]);
				caption = React.DOM.div({ className: 'caption' }, this.state.socks[i]['title']);
				
                item = React.DOM.div({ className: 'item', style: styles}, [caption, features]);
                itemWrapper = React.DOM.div({ className: 'item-wrapper' }, item);
                
                gridItems.push(itemWrapper);
          }
          
          grid = React.DOM.div({
            className: 'grid',
          }, gridItems);
          
          console.log(this.state.socks);
          
          return grid;
        }
	});

	return Grid;
});