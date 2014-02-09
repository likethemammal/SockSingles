define(['jsx!views/twoBigButtons'], function(TwoBigButtons){
  return React.createClass({
    buttonOneHandler: function(){
      window.location.hash = 'search'
    },
    buttonTwoHandler: function(){
      var SS = sock_singles.core;
      if (SS.isLoggedIn()) {
        var router = this.props.router;
        router.navigate("search",{trigger:true})
      } else {
        SS.githubLogin().done(function() {
          var router = this.props.router;
          router.navigate("search",{trigger:true})
        }.bind(this));
      }
    },
    render:function(){
      return  TwoBigButtons(
        {buttonOneName: "Buy",
         buttonOneClass:"btn-blue",
         buttonOneHandler: this.buttonOneHandler,
         buttonTwoName:"Sell",
         buttonTwoClass:"btn-green",
         buttonTwoHandler: this.buttonTwoHandler})
    }
  })
})
