import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import * as competencyAction from '../actions/competencyAction';
import {bindActionCreators} from 'redux';
import{connect} from 'react-redux';

class CompetencyData extends React.Component{
	 constructor(props, context){
	        super(props, context);
	        this.handleDelete = this.handleDelete.bind(this);
	 }
	 
	 handleDelete(e){
		 e.preventDefault();
		 this.props.action.deleteCompetency(this.props.competency.id);
	 }
	render(){
	    return (
	            <tr>
	                <td><Link to={'/detailCompetency/' + this.props.competency.id}>{this.props.competency.name}</Link></td>
	                <td>{this.props.competency.previous}</td>
	                <td>{this.props.competency.latest}</td>
	                <td>{this.props.competency.note}</td>
	                <td><button onClick={this.handleDelete} type="button" className="btn btn-success">Delete</button></td>
	            </tr>
	        );
	}

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
export default connect(mapStateToProps, mapDispatchToProps)(CompetencyData);