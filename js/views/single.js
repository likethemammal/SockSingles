define(function(){
	var SS = sock_singles.core;
	
	var fakeTraits = function() {
		this.likes = 'walks on the beach';
		this.dislikes = 'buzz kills';
		this.hobbies = 'cat petting, inverse unicyling, panda galloping';
	}
	
	var Item = React.createClass({
		render: function(){
			var caption,
				item,
				itemChildren = [],
				itemWrapper;
				
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
				background: 'url(' + this.props['image-path'] + ') top center'}
			}, [caption]);
	
			itemWrapper = React.DOM.div({ className: 'item-wrapper' + this.props.wrapperClass }, item);
	
		  return itemWrapper;
		}
	});
	
	var User = React.createClass({
		render: function(){	
			item = Item({
				title: this.props.displayName,
				'image-path': this.props['image-path']
			});
		    return item;
		}
	});
	
	var Desc = React.createClass({
		render: function(){
			var SS = sock_singles.core,
				user = SS.getLoggedInUser(),
				trait,
				traits = [],
				desc;
				
			for (var i = 0; i < this.props.traits; i++) {
				trait = React.DOM.li({ className: 'trait' }, this.props.traits[i].key + ': ' + this.props.traits[i]);
			}
	
			desc = React.DOM.ul({ className: 'trait-list' }, trait);
			
			descWrapper = React.DOM.div({ className: 'desc' }, desc);
	
		  return descWrapper;
		}
	});

	var Single = React.createClass({
		
		getInitialState: function() {
			return {
				displayName: '',
				'image-path': '/../imgs/sock1.jpg'
			};
		},

		
		componentWillMount: function() {
			console.log("woah!");
			SS.getSocks().done(function(socks){
// 				props = socks[window.location.hash.split('/')[1]]; //When backend is hookedup.
				props = socks[3];
				
				SS.getUsersRef().child(props['username']).on('value', function(snapshot) {
					var displayName = 'Fuck HEAd';
					var avatarUrl = 'imgs/sock1.jpg';
	// 				displayName = snapshot.val().displayName; //When backend is hookedup.
	// 				avatarUrl = snapshot.val().avatarUrl; //When backend is hookedup.
	
					this.setState($.extend(props, {
						displayName: displayName,
						'image-path': avatarUrl
					}))
				}.bind(this));
			}.bind(this));
		},

		render: function(){
            var page,
				item,
				buyButton,
				desc,
				user,
				columnSidebar,
				columnMain;
				
				user = User($.extend({wrapperClass: 'column1'}, this.state));				
				desc = Desc($.extend(new fakeTraits, this.state));
				
				columnSidebar = React.DOM.div({className: 'column-sidebar'}, [user, columnSidebar]);
				
				item = Item($.extend({wrapperClass: 'column2'}, this.state));				
				buyButton = React.DOM.div({
					wrapperClass: 'buy-button',
					onClick: function() {
						console.log('sock bought');
					}
				});
				
				columnMain = React.DOM.div({
					className: 'column-main'
				}, [item, buyButton]);
				
				page = React.DOM.div({}, [columnMain, columnSidebar])
			  				  	
			  	return page;
        }
	});

	return Single;
});
