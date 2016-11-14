import React, { PropTypes } from 'react';
import{connect} from 'react-redux';
import NavLink from '../js/navLink';
import * as competencyAction from '../actions/competencyAction';
import {bindActionCreators} from 'redux';

class App extends React.Component{
	constructor(props) {
		super(props);
		console.log('----- INIT App1 -----');
}
    render(){
        return(
        	<div>
				<nav className="navbar navbar-default">
				  <div className="container-fluid">
				    <div className="navbar-header">
				    	<ul className="nav navbar-nav navbar-right">
				    		<li><NavLink to="/competency">Competency</NavLink></li>
				    		<li><NavLink to="/detailCompetency">Detail Competency</NavLink></li>
				    		<li><NavLink to="/about">About</NavLink></li>
				    	</ul>
				    </div>
				   </div>
				</nav>
				{this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}

function mapDispatchToProps(dispatch){
    return {
        action: bindActionCreators(competencyAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
