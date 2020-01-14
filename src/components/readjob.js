import React from 'react';


const  Readjob = ({data,goback}) => {
    return (
        !data.length ?
            <p className="alert alert-warning text-center">No Readfile found for the jobs.</p>
            :
            <div className="bid-list">
                <div className="responsive-table">
                    <table className="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Job Title</th>
                            <th>Location</th>
                            <th>Author</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map(jobDetail =>
                            <tr key={jobDetail._id}>
                                <td>{jobDetail._id}</td>
                                <td>{jobDetail.title}</td>
                                <td>{jobDetail.city}</td>
                                <td>{jobDetail.employer}</td>
                                
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
    )
};



export default Readjob;