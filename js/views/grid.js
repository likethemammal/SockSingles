define(["views/filter"],function(Filter){

	var Grid = React.createClass({

		render: function(){
          var grid,
              gridItems = [],
              styles,
              caption,
              features,
              item,
              itemWrapper,
              wrapperClasses,
              socks = this.props.socks,
			  sock;

      for (var i = 0; i < socks.length; i++) {
        styles = {
          'background-image': ['url(', socks[i]['image-path'], ')'].join('')
        }

        colorDiv = React.DOM.div({className: 'color-box', style: {background: socks[i].color}})
        colorFeature = React.DOM.div({ className: 'color feature'}, colorDiv);
        lengthFeature = React.DOM.div({ className: 'length feature' }, socks[i].length + '"');
        sizeFeature = React.DOM.div({ className: 'size feature' }, socks[i].size);

        features = React.DOM.div({ className: 'features' }, [colorFeature, lengthFeature, sizeFeature]);
        caption = React.DOM.div({ className: 'caption' }, socks[i]['title']);

        item = React.DOM.div({ className: 'item', style: styles}, [caption, features]);

        wrapperClasses = 'item-wrapper';

        if (i === 3 || (i - 3) % 6 === 0) {
          wrapperClasses += ' column2';
        } else {
          wrapperClasses += ' column1';
        }

        sock = socks[i];

        itemWrapper = React.DOM.div({
          className: wrapperClasses,
          onClick: function(sock) {
            window.location.hash = 'single/' + sock.id
          }.bind(this,sock)
        }, item);

        gridItems.push(itemWrapper);
      }

      grid = React.DOM.div(
        {className: 'grid'},
        gridItems
      );

      return grid;
    }
  });

  return Grid;
});
