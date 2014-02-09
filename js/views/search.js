define(['views/grid', "views/filter"], function(Grid, Filter){
	var SS = sock_singles.core;

  return React.createClass({
    filterSocks: function(name, filteredSocks){
      var newState = this.state;
      this.state.filteredSocks[name] = filteredSocks;
      this.setState(newState);
    },

		getInitialState: function() {
			return {socks: [],
              filteredSocks: {all:[]}};
		},

		componentWillMount: function() {
			SS.getSocks().done(function(socks) {
				this.setState({socks: socks,
                       filteredSocks: {all: socks}});
			}.bind(this));
		},

    unionFilteredSocks: function(){
      var filteredSocks = this.state.filteredSocks,
          filteredKeys = Object.keys(filteredSocks),
          filteredArrays = filteredKeys.map(function(k){return filteredSocks[k];})

      return sock_singles.util.intersectArrays(filteredArrays);
    },

    render:function(){
      var parameters = SS.getParameters(),
          filterComponents = parameters.map(function(param){
            return Filter({parameter:param,
                           onFiltered: this.filterSocks,
                           socks: this.state.socks,
                           key: param.name});
      }.bind(this));

      var socks = this.unionFilteredSocks();

      return (
        React.DOM.div(
          {className:"searchPage"},
          React.DOM.div({className:"filters"}, filterComponents),
          Grid({socks:socks}))
      );

    }
  })
})
