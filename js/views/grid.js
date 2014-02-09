define(["views/filter"],function(Filter){
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
<<<<<<< HEAD
              styles,
              caption,
              features,
              item,
              itemWrapper,
              wrapperClasses;

      console.log(this.state);

      for (var i = 0; i < this.state.socks.length; i++) {
        styles = {
          'background-image': ['url(', this.state.socks[i]['image-path'], ')'].join('')
        }

        colorDiv = React.DOM.div({className: 'color-box', style: {background: this.state.socks[i].color}})
        colorFeature = React.DOM.div({ className: 'color feature'}, colorDiv);
        lengthFeature = React.DOM.div({ className: 'length feature' }, this.state.socks[i].length + '"');
        sizeFeature = React.DOM.div({ className: 'size feature' }, this.state.socks[i].size);
=======
			  styles,
			  caption,
			  features,
			  item,
			  itemWrapper,
			  wrapperClasses;
			  
			  console.log(this.state);

          for (var i = 0; i < this.state.socks.length; i++) {
			  	styles = {
// 					'background-image': ['url(', this.state.socks[i]['image-path'], ')'].join('')
					'background-image': ['url(/../imgs/sock', Math.ceil(Math.random()*3), 'clear.jpg)'].join('')
				}
>>>>>>> Made loading faster by removing images.

        features = React.DOM.div({ className: 'features' }, [colorFeature, lengthFeature, sizeFeature]);
        caption = React.DOM.div({ className: 'caption' }, this.state.socks[i]['title']);

        item = React.DOM.div({ className: 'item', style: styles}, [caption, features]);

        wrapperClasses = 'item-wrapper';

        if (i === 3 || (i - 3) % 6 === 0) {
          wrapperClasses += ' column2';
				} else {
					wrapperClasses += ' column1';
				}

        itemWrapper = React.DOM.div({ className: wrapperClasses }, item);

        gridItems.push(itemWrapper);
      }

      grid = React.DOM.div(
        {className: 'grid'},
        Filter(),

        gridItems);

      console.log(this.state.socks);

      return grid;
    }
  });

  return Grid;
});
