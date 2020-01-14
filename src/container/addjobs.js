import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import * as jobfunction from '../actions/jobsactions';
// Child components
import Addjob from '../components/addjob';

class Addjobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formStatus: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // Check if form has any errors
        if (!this.props.jobForm.syncErrors) {
            // Add new ID and empty array of read to form fields
            let data = Object.assign({}, this.props.jobForm.values, {
                id: this.props.newId,
                data: []
            });
            this.props.actions.addjobs(data);
            this.setState({formStatus: 'success'});
        } else {
            this.setState({formStatus: 'error'});
        }
    }

    render() {
        return (
            <div className="add-merchant">
                <h1 className="text-center text-capitalize">Add new job</h1>
                <Addjob onSubmit={this.handleSubmit} formStatus={this.state.formStatus} />
            </div>
        )
    }
}



function mapStateToProps(state) {
    
    return {
        jobForm: state.data,
        
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(jobfunction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Addjobs);