import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {NavLink} from 'react-router-dom';


let Addjob = ({onSubmit, submitting, formStatus}) => {
    return (
        <div className="row">
            <div className="col-sm-6 col-lg-4 col-sm-push-3 col-lg-push-4">
                <form onSubmit={ onSubmit } noValidate>
                    <Field name="jobtitle" component={renderField} type="text"
                           id="jobtitle" label="Jobtitle"/>
                    <Field name="location" component={renderField} type="text"
                           id="jobtitle" label="Location"/>
                    <Field name="Author" component={renderField} type="text"
                           id="author" label="Author"/>
                    
                    
                    <button type="submit" className="btn btn-primary merchant-submit" disabled={submitting}>Submit</button>
                </form>
                {formStatus === 'success' &&
                <p className="alert alert-success">
                    Job successfully saved.
                    <NavLink to="/readjob/"> Return to Job list</NavLink>
                </p>}
                {formStatus === 'error' &&
                <p className="alert alert-danger">Saving Job failed. Please fill in all the fields.</p>}
            </div>
        </div>
    )
};

// Render schema for each field
const renderField = ({
    input,
    label,
    type,
    id,
    meta: {touched, error}
}) => (
    // Render schema for checkbox
    (type === 'checkbox')
        ?
        <div className="checkbox">
            <label>
                <input {...input} type={type}/>
                {label}
            </label>
            {touched &&
            (error &&
            <span className="error-text">
            {error}
          </span>)}
        </div>
        :
        // Render schema for inputs
        <div className="form-group">
            <label htmlFor={id}>
                {label}
            </label>
            <input {...input} id={id} type={type} className="form-control"/>
            {touched &&
            (error &&
            <span className="error-text">
            {error}
          </span>)}
        </div>
);

// Form validation
function validate(formProps) {
    const errors = {};

    if (!formProps.jobtitle) {
        errors.jobtitle = 'Please enter a jobtitle';
    }

    if (!formProps.location) {
        errors.location = 'Please enter a location';
    }

    if (!formProps.Author) {
        errors.Author = 'Please enter an Author name';
    }

    
    return errors;
}

Addjob = reduxForm({
    form: 'data',
    validate,
    enableReinitialize: true
})(Addjob);

export default Addjob;

