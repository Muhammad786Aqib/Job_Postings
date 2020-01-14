import React from 'react';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import data from './data.json';

 const Jobview =({ onDeletejob})=> {
     
    
    
    return (
        <div>
            <div className="merchant-list">
                <div className="responsive-table">
                    <table className="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Job Title</th>
                            <th>Location</th>
                            <th>Author</th>
                            <th>Update</th>
                            <th>Delete</th>
                            <th>Read</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                        {data.map(jobDetail=>
                        <tr key={jobDetail._id}>
                            <td>{jobDetail._id}</td>
                            <td>{jobDetail.title}</td>
                            <td>{jobDetail.city}</td>
                            <td>{jobDetail.employer}</td>
                            <td>
                                <NavLink className="btn btn-primary btn-sm"
                                    to={'/update/' + jobDetail._id}>Update</NavLink>
                                </td>
                                <td>
                                    <button className="btn btn-sm btn-danger"
                                            onClick={() => onDeletejob(jobDetail._id)}>
                                        Delete
                                    </button>
                                </td>
                            <td>
                                <NavLink className="btn btn-danger btn-sm"
                                    to={'/readjob/' + jobDetail._id}>Read</NavLink>
                                </td>
                                
                            
                        </tr>
                        
                           

                        ) 
                    }
                                
                                
                                
                        
                        </tbody>
                    </table>
                </div>
                
            </div>
         
        </div>
    )}
    export default Jobview;
