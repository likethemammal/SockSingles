define(function(){
  return React.createClass({
    colorPicker: function(parameter){
      return React.DOM.input({className:"colorPicker colorSlider slider filter",
                              type: "color",
                              onChange: this.props.onColorChange})
    },
    sliderPicker: function(parameter){
      return React.DOM.input({className:"sliderPicker " + parameter.name + 'Slider filter',
                              type: "range",
                              min:"0",
                              max: parameter.values.length-1,
                              onChange: this.props.onSliderChange})
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
  });
});
