/** @jsx React.DOM */
define(function(){
	// Base
	var TwoBigButtons = React.createClass({
		render: function(){
			return (
			<div id="btn-container">
				<button id={this.props.buttonOneName} type="button" className={"btn " + this.props.buttonOneClass} onClick={this.props.buttonOneHandler} >{this.props.buttonOneName}</button>
				<button id={this.props.buttonTwoName} type="button" className={"btn " + this.props.buttonTwoClass} onClick={this.props.buttonTwoHandler}>{this.props.buttonTwoName}</button>
			</div>
			);
		}
	});

	return TwoBigButtons;
});