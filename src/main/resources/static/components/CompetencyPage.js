import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as competencyAction from '../actions/competencyAction';
import CompetencyList from './CompetencyList';
import {browserHistory} from 'react-router';

class CompetencyPage extends React.Component{
    constructor(props, context){
        super(props, context);

        this.redirecToAddCoursePage = this.redirecToAddCoursePage.bind(this);
    }

    competencyRow(competency, index){
        return(<div key={index}>{competency.name}</div>);
    }

    redirecToAddCoursePage(){
        browserHistory.push('/competency');
    }

    render(){
        const {competencies} = this.props;
        return(
            <div>
                <h1>Competency</h1>
                <CompetencyList competencies={competencies} />
            </div>
        );
    }
}

CompetencyPage.propTypes = {
    actions: PropTypes.object.isRequired,
    competencies: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    return {
    	competencies: state.competencies  //state.courses the courses refers to reducers/index.js
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions : bindActionCreators(competencyAction, dispatch)
    };
}


/*
alternative:
const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(CoursesPage);
*/
export default connect(mapStateToProps, mapDispatchToProps)(CompetencyPage);