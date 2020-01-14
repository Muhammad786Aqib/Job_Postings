import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// Actions
import * as Jobfunction from '../actions/jobsactions';
// Child components
import Jobview from '../components/jobview';

class Deletejob extends React.Component {
    constructor(props) {
        super(props);
        this.deletejob = this.deletejob.bind(this);
    }

    deletejob(_id) {
        if (window.confirm('Are you sure you want to delete this job?')) {
            this.props.actions.deletejobs(_id);
        }
    }

    render() {
        return (
            <div className="merchants">
                {
                    this.props.ajaxLoading ?
                        <p className="text-center alert alert-info">Loading Jobs...</p>
                        :
                        <Jobview data={this.props.data} pages={this.props.pages}
                                      onDeletejob={this.deletejob} currentPage={this.props.currentPage} />
                }
            </div>
        )
    }
}



function mapStateToProps(state) {
    
    
    return {
        data: state.data,
        ajaxLoading: state.ajaxLoading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Jobfunction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Deletejob);