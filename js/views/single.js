define(function(){
	var SS = sock_singles.core;

	var fakeTraits = function() {
		this.likes = 'walks on the beach';
		this.dislikes = 'buzz kills';
		this.hobbies = 'cat petting, inverse unicyling, panda galloping';
	}

	var Item = React.createClass({
		render: function(){
			var header,
				caption,
				item,
				itemChildren = [],
				itemWrapper;

			if (this.props.header) {
				header = React.DOM.div({className: 'header'}, this.props.header);
				itemChildren.push(header);
			}

      console.log("props: ", this.props)

      caption = React.DOM.div({ className: 'caption' }, this.props.title);
      itemChildren.push(caption);

			if (this.props.color) { //Check if Sock
				var colorDiv = React.DOM.div({className: 'color-box', style: {background: this.props.color}})
					colorFeature = React.DOM.div({ className: 'color feature'}, colorDiv);
					lengthFeature = React.DOM.div({ className: 'length feature' }, this.props.length + '"');
					sizeFeature = React.DOM.div({ className: 'size feature' }, this.props.size);

					features = React.DOM.div({ className: 'features' }, [colorFeature, lengthFeature, sizeFeature]);
					itemChildren.push(features);
			}

			item = React.DOM.div({ className: 'item', style: {
				'background-image': 'url(' + this.props['image-path'] + (this.props.imageProps || '') + ')',
				'background-position': 'top center'}
			}, itemChildren);

			itemWrapper = React.DOM.div({ className: 'item-wrapper ' + this.props.wrapperClass }, item);

		  return itemWrapper;
		}
	});

	var User = React.createClass({
		render: function(){

		var item,
			header;

			item = Item({
				title: this.props.displayName,
				'image-path': this.props.avatarUrl,
				wrapperClass: this.props.wrapperClass,
				header: 'Seller',
        imageProps: '&s=320'
			}, header);
		    return item;
		}
	});

	var Desc = React.createClass({
		render: function(){
			var trait,
				traits = [],
				header,
				desc,
				notTraits = ['id', 'displayName', 'image-path', 'username', '__owner__', 'avatarUrl'],
				propVal,
				propKey;

			for (var i = 0; i < Object.keys(this.props).length; i++) {

				propKey = Object.keys(this.props)[i];
				propVal = this.props[propKey];

				if (_.indexOf(notTraits, propKey) === -1) {

					trait = React.DOM.li({ className: 'trait' }, propKey + ': ' + propVal);
					traits.push(trait);
				}
			}

			header = React.DOM.div( {className: 'header'}, 'Description');

			desc = React.DOM.ul({ className: 'trait-list' }, traits);

			descWrapper = React.DOM.div({ className: 'desc' }, [header, desc]);

		  return descWrapper;
		}
	});

	var Single = React.createClass({

		getInitialState: function() {
			return {
				displayName: '',
				avatarUrl: '',
				'image-path': '/../imgs/sock1.jpg'
			};
		},


		componentWillMount: function() {
			console.log("woah!");
			SS.getSocks().done(function(socks){

        var sock;

				for (var i = 0; i < socks.length; i++) {
					if (socks[i].id === window.location.hash.split('/')[1]) {
						sock = socks[i];
          }
        }

				SS.getUsersRef().child(sock['username']).on('value', function(snapshot) {
// 					var displayName = 'Fuck HEAd';
// 					var avatarUrl = 'imgs/sock1.jpg';
					var displayName = snapshot.val().displayName; //When backend is hookedup.
					var avatarUrl = snapshot.val().avatarUrl; //When backend is hookedup.

					this.setState($.extend(sock, {
						displayName: displayName,
						avatarUrl: avatarUrl,
						'image-path': sock['image-path'],
					}))
				}.bind(this));
			}.bind(this));
		},

		render: function(){

      var page,
          item,
          buyButton,
          buyButtonWrapper,
          desc,
          user,
          columnSidebar,
          columnMain;

      user = User($.extend({wrapperClass: 'column1 user'}, this.state));
      desc = Desc($.extend(new fakeTraits, this.state));

      buyButton = React.DOM.div({
        className: 'buy-button',
        onClick: function() {
          // 						window.location.hash = ''
        }
      }, 'Buy this sock!');

      buyButtonWrapper = React.DOM.div({className: 'buy-wrapper'}, buyButton)

      columnSidebar = React.DOM.div({className: 'column-sidebar'}, [user, buyButtonWrapper, desc]);

      item = Item($.extend({wrapperClass: 'column2'}, this.state));

      columnMain = React.DOM.div({className: 'column-main'}, item);

      page = React.DOM.div({}, [columnMain, columnSidebar]);
      return page;
    }
  });

  return Single;
});
