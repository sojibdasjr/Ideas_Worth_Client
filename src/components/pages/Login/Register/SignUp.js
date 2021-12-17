import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import Navigation from '../../Share/Navigation/Navigation';

const SignUp = () => {
    const [loginData, setLoginData] = useState({});

    const history = useHistory();

    

    const {user, registerUser, isLoading, authError} = useAuth();
    

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        console.log(newLoginData);
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div>
            <Navigation/>
            <div className='login-form mt-5 pt-5'>
            { !isLoading  && <form onSubmit={handleLoginSubmit}>
                <div className="form-name">
                    <span>Register</span>
                </div>

                <div className="form-group">
                    <input 
                    
                    name='name'
                    onBlur={handleOnBlur}
                    className='form-control item' 
                    placeholder='Name' />
                </div>
                
                <div className="form-group">
                    <input 
                    type="email"
                    name="email"
                    onBlur={handleOnBlur}
                    className='form-control item' 
                    id='use_email' 
                    placeholder='User Email' />
                </div>


                <div className="form-group">
                <input 
                type="password" 
                name='password'
                onBlur={handleOnBlur}
                className='form-control item' 
                id='password'
                placeholder='password' />
                </div>

                <div className="form-group">
                <input 
                type="password" 
                name='password2'
                onBlur={handleOnBlur}
                className='form-control item' 
                id='password'
                placeholder='ReType password' />
                </div>

                <div className="form-group">
                <button 
                type="submit" 
                className='btn btn-block login-account'>
                    Register
                </button>
                </div>

                <p className='new_accout'>Don't Have Account ? Please <Link to='/login'>Login</Link></p>
            </form>}

            {isLoading && <Spinner animation="border" variant="success" />}
            {user?.email && <div className="alert alert-success" role="alert">
                User Created Successfully !
                </div> }
            {
                authError && <div class="alert alert-danger" role="alert">
                {authError}
              </div>
            }
            
            
            </div>
        </div>
    );
};

export default SignUp;