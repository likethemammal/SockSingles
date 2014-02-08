/** @jsx React.DOM */
define(function(){
	// Base
	var TwoBigButtons = React.createClass({
		render: function(){
			return (
				<div className="col-md-8 col-md-offset-2">
					<button type="button" className="col-md-6 btn btn-primary" onClick={this.props.buttonOneHandler} >{this.props.buttonOneName}</button>
					<button type="button" className="col-md-6 btn btn-success" onClick={this.props.buttonTwoHandler}>{this.props.buttonTwoName}</button>
				</div>
			);
		}
	});

	return TwoBigButtons;
});