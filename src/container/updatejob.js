import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// Actions
import * as Jobfunction from '../actions/jobsactions';
// Child components
import Addjob from '../components/addjob';

class Updatejob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formStatus: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
     
        if (!this.props.jobForm.syncErrors) {
            
            let data = Object.assign({}, this.props.jobForm.values, {
                id: this.props.currentjob.id,
                data: this.props.currentjob
            });
            this.props.actions.editjobs(data);
            this.setState({formStatus: 'success'});
        } else {
            this.setState({formStatus: 'error'});
        }
    }

    render() {
        return (
            this.props.ajaxLoading ?
                <p className="text-center alert alert-info">Loading Job...</p>
                :
                !this.props.currentjob ?
                    <p className="text-center alert alert-danger">Job not found.</p>
                    :
                    <div className="add-merchant">
                        <h1 className="text-center text-capitalize">Edit Job information</h1>
                        <Addjob onSubmit={this.handleSubmit} formStatus={this.state.formStatus}
                                      initialValues={this.props.currentjob} goBack={this.props.goBack} />
                    </div>
        )
    }
}


function findCurrentjob(data, _id = -1) {
   
    return data.find(data => {
        return parseInt(data._id, 1) === parseInt(_id, 1);
    });
}

function mapStateToProps(state, ownProps) {
    let currentjob = state.data ? findCurrentjob(state.data, ownProps.match.params._id) : null;
    return {
        currentjob,
        jobForm: state.data,
        ajaxLoading: state.ajaxLoading,
        goBack: ownProps.history.goBack
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Jobfunction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Updatejob);