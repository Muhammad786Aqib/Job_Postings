import React from 'react';
import { connect } from 'react-redux';
// Child components
import Readjob from '../components/readjob';

const Readpage = ({ajaxLoading, data, goBack}) => {
    return (
        <div className="bids">
            {
                ajaxLoading ?
                    <p className="text-center alert alert-info">Loading jobs...</p>
                    :
                    <div>
                        <button onClick={goBack} className="btn btn-info">
                            <span className="glyphicon glyphicon-arrow-left"></span> Back to Add Job
                        </button>
                        <Readjob data={data} />
                    </div>
            }
        </div>
    )
};

// Find job for given merchant
function generatejob(data, _id = -1) {
    // Find job for given ID
    let dat = data.find(data => {
        return parseInt(data._id, 1) === parseInt(_id, 1);
    });
    if (dat) {
        
        return dat.job.sort(function(a, b) {
            return new Date(b.created) - new Date(a.created);
        });
    } else {
        return [];
    }
}

function mapStateToProps(state, ownProps) {
    let data = state.data.length ? generatejob(state.data, ownProps.match.params.id) : [];
    return {
        data:state.data,
        ajaxLoading: state.ajaxLoading,
        goBack: ownProps.history.goBack
    }
}

export default connect(mapStateToProps)(Readpage);