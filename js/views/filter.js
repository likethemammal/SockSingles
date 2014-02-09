define(function(){
  return React.createClass({
    render: function(){
      return React.DOM.input({type:"range", name:"points", min:"1", max:"10"})
    }
  })
})
