define(function(){
  return React.createClass({
    onSliderChange: function(e){
      var socks = this.props.socks,
          parameter = this.props.parameter,
          sliderValue = parseInt(e.target.value),
          paramValue = parameter.values[sliderValue],
          threshold = 4;


      if (parameter.name === "size"){ threshold = 2; }

      var filteredSocks = socks.filter(function(sock){
        var indexValue = parameter.values.indexOf(sock[parameter.name])

        if (sliderValue === parameter.values.length){
          return true;
        }else {
          return sock_singles.core.lengthFilter(indexValue, sliderValue, threshold);
        }
      })

      this.props.onFiltered(parameter.name, filteredSocks);


    },

    onColorChange: function(e){
      var color = e.target.value,
          parameter = this.props.parameter,
          socks = this.props.socks;

      var filteredSocks = socks.filter(function(sock){
        return sock_singles.core.colorFilter(sock["color"],color);
      })

      this.props.onFiltered("color", filteredSocks)
    },

    colorPicker: function(parameter){
      return React.DOM.input({className:"colorPicker",
                              type: "color",
                              onChange: this.onColorChange})
    },
    sliderPicker: function(parameter){
      return React.DOM.input({className:"sliderPicker",
                              type: "range",
                              min:"0",
                              max: parameter.values.length,
                              onChange: this.onSliderChange})
    },

    defaultPicker: function(type){
      return React.DOM.input({className:"DefaultPicker",
                              placeholder: type,
                              type: "text"});
    },

    pickPicker: function(type, parameter){
      var pickers = {
        color: this.colorPicker,
        slider: this.sliderPicker
      }
      return pickers[type](parameter) || defaultPicker(type);
    },

    render: function(){
      return this.pickPicker(this.props.parameter.type,
                             this.props.parameter);
    }
  })
})
