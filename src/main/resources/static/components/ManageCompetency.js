import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as competencyAction from '../actions/competencyAction';
import CompetencyForm from './CompetencyForm';
import toastr from 'toastr';

class ManageCompetency extends React.Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            competency: Object.assign({}, this.props.competency),
            error: {}, 
            saving: false
        };

        this.updateCompetencyState = this.updateCompetencyState.bind(this);
        this.saveCompetency = this.saveCompetency.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.competency.id != nextProps.competency.id){
            this.setState({competency: Object.assign({}, nextProps.competency)});
        }
    }

    updateCompetencyState(event){
        const field = event.target.name;
        let competency = this.state.competency;
        competency[field] = event.target.value;
        return this.setState({competency: competency});
    }

    saveCompetency(event){
        event.preventDefault();
        this.setState({saving: true});
        this.props.action.saveCompetency(this.state.competency)
            .then(() => this.redirect())
            .catch((error) =>{
                this.setState({saving: false});
                toastr.error(error);
            });
    }

    redirect(){
        this.setState({saving: false});
        toastr.success('New Competency has been successfully added');
        this.context.router.push('/competency');
    }

    render(){
        return(
            <div>
                <h1>Manage Competency</h1>
                <CompetencyForm 
                    onChange={this.updateCompetencyState}
                    onSave={this.saveCompetency}
                	competency={this.state.competency}
                    errors={this.state.errors}
                    saving={this.state.saving}
                />
            </div>
        );
    }
}

ManageCompetency.propTypes = {
    competency: PropTypes.object.isRequired,
    action: PropTypes.object.isRequired
};

ManageCompetency.contextTypes = {
    router: PropTypes.object
};

function getCompetencyById(competencies, id){
    const competency = competencies.filter(competency => competency.id == id);
    if (competency.length) return competency[0];
    return null;
}

function mapStateToProps(state, ownProps){
    const compId = ownProps.params.id;

    let competency = {id: '', name: '', previous: '', latest: '', note: ''};

    if (compId && state.competencies.length > 0){
        competency = getCompetencyById(state.competencies, compId);
    }

    return {
        competency: competency
    };
}

function mapDispatchToProps(dispatch){
    return {
        action: bindActionCreators(competencyAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCompetency);