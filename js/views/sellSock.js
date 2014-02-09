define(["views/picker"],function(Picker){
  return React.createClass({
    uploadPic: function(){
      filepicker.pick(function(InkBlob){
        console.log(InkBlob.url);
        this.setState({uploadedPic: InkBlob.url});
      }.bind(this));
    },

    getParameterValue: function(name, index){
      index = parseInt(index);
      var parameter  = this.state.parameters.filter(function(param){
        return param.name === name;
      })[0];

      if (index === parameter.values.length){
        return "Don't know";
      }else{
        return parameter.values[index];
      }
    },

    getSockInfo: function(){
      var sockInfo = {
        color:  this.refs.color.getDOMNode().value,
        length: this.getParameterValue("length", this.refs.length.getDOMNode().value),
        size: this.getParameterValue("size", this.refs.size.getDOMNode().value),
        "image-path": this.state.uploadedPic,
        title: this.refs.title.getDOMNode().value
      };

      return sockInfo;
    },

    uploadSock: function(){
      var sockInfo = this.getSockInfo();
      var user = sock_singles.core.getLoggedInUser().username;

      var userRef = sock_singles.core.getUsersRef().child(user).child("socks");

      userRef.push(sockInfo);

      this.setState({status:"success",
                     uploadedPic: ""});

      console.log("Uploading sock info of: ", sockInfo);
    },


    getInitialState: function(){
      return {parameters:sock_singles.core.getParameters(),
              uploadedPic: ""};
    },

    render: function(){
      var uploadButton = React.DOM.div({className: 'Upload', onClick:this.uploadPic},"Upload");

      var uploadPreview = React.DOM.div({className: "pic-preview"});
      if (this.state.uploadedPic !== ""){
        uploadPreview = React.DOM.div({className: "pic-preview"},
                                      React.DOM.img({src:this.state.uploadedPic,
                                                     style:{height:"100px"}}))
      }

      var parameters = this.state.parameters;
      components = parameters.map(function(param){
        return Picker({ref:param.name,
                parameter:param});
      });

      var titleInput = React.DOM.input({type:"text", placeholder:"Name your Sock", ref:"title"});

      var successMessage = React.DOM.div({className:"upload-success"});
      if (this.state.status === "success"){
        //reset after some time
        setTimeout(function(){this.setState({status:false})}.bind(this),2e3);
        successMessage = React.DOM.div({className:"upload-success"},
                                       React.DOM.h3(null, "Your sock is officially on the market"))
      }


      return React.DOM.div(
        {className:"sell-sock"},
        React.DOM.h2(null,"Sell here!"),
        uploadButton,
        uploadPreview,
        components,
        titleInput,
        React.DOM.div({className: 'Confirm'}, {onClick:this.uploadSock},"Confirm"),
        successMessage
      );
    }

  });
});
