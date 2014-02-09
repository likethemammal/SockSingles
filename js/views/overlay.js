/** @jsx React.DOM */
define(function(){
  return React.createClass({
    render: function(){
      return (
        <div className="popup" style={{display: "block"}}>
          <div className="modal">
            <div className="titlebar">
              <a className="close" role="button" onClick={this.props.onCloseClick}></a>
              <h1> {this.props.title} </h1>
            </div>
            <div class="content">
              {this.props.content}
            </div>
          </div>
        </div>
      );
    }
  })
})
