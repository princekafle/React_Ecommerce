import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import *as Yup from 'yup'

const Register = () => {
  return (
    <Formik  initialValues={{firstname:'', lastname:'', email:'', password:'', cpassword:'' }}

    validationSchema={Yup.object({
        firstname:Yup.string()
         .matches(/^[A-Za-z]+$/, 'First name must contain only letters')
        .max(20, 'less than 20 charachters')
        .required('First name is mandatory'),

        lastname:Yup.string()
        .matches(/^[A-Za-z]+$/, 'Last name must contain only letters')
        .max(20,'must be less than 20 characters')
        .required('Last name is mandatory'),

        email:Yup.string()
        .required('Email is mandatory'),

        password:Yup.string()
        .matches(/(?=.[A-Za-z])(?=.*[0-9])(?=.*[@#!$%_^&]) [A-Za-z0-9@#$%^&*_-]{8,30}$/, 'contain 8 character which contain uppercase,lowercse, numeric value and special character' )
        .required('Password is mandatory'),

        cpassword: Yup.string()
        .oneOf([Yup.ref('password'),null], 'Passwords must match')
        .required('Confirm password is mandatory')


    })}



    >
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5">
                   
                    <form action="">
                    <h2 className="text-center text-muted">Register Form</h2>
                   
                    <div className="mb-2">
                        <label htmlFor="firstname">First Name </label>
                        <Field type= "text" className="form-control" id="firstname " name="firstname"/>
                        <ErrorMessage name='firstname'>
                        {msg=><div  style={{color:'red'}}> {msg}</div>}
                        </ErrorMessage>
                        
                    </div>

                    <div className="mb-2">
                        <label htmlFor="lastname">Last Name </label>
                        <Field type= "text" className="form-control" id="lastname " name="lastname"/>
                        <ErrorMessage name='lastname'>
                        {msg=><div  style={{color:'red'}}> {msg}</div>}
                        </ErrorMessage>
                        
                    </div>

                    <div className="mb-2">
                        <label htmlFor="email">Email </label>
                        <Field type= "text" className="form-control" id="email " name="email"/>
                        <ErrorMessage name='email'>
                        {msg=><div  style={{color:'red'}}> {msg}</div>}
                        </ErrorMessage>
                        
                    </div>

                    <div className="mb-2">
                        <label htmlFor="password">Password </label>
                        <Field type= "text" className="form-control" id="password " name="password"/>
                        <ErrorMessage name='password'>
                        {msg=><div  style={{color:'red'}}> {msg}</div>}
                        </ErrorMessage>
                        
                    </div>

                    <div className="mb-2">
                        <label htmlFor="cpassword">Confirm password </label>
                        <Field type= "text" className="form-control" id="cpassword " name="cpassword"/>
                        <ErrorMessage name='cpassword'>
                        {msg=><div  style={{color:'red'}}> {msg}</div>}
                        </ErrorMessage>
                        
                    </div>

                    <div className="mb-2">
                        <button className="btn btn-success">Register</button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
        </Formik>

    
  )
}

export default Register