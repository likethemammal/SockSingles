/** @jsx React.DOM */
define(['jsx!routes', 'jsx!views/twoBigButtons'], function(routes, TwoBigButtons){
	var Root = React.createClass({
		getInitialState: function(){
			return {
				loggedIn:false,
				routeName: "",
			}
		},

		onLogin: function(){
			this.setState({
				loggedIn: true
			});
		},

		render: function(){
			var response;
			/* once we have login working
			if (!this.state.loggedIn){
				response = (
					<div>
						<TwoBigButtons />
					</div>
				);
			} else { */
				response = (
					<div>
						{routes(this.state.routeName)}
					</div>
				);
			//}
			return response;
		}
	});

	return Root;
});