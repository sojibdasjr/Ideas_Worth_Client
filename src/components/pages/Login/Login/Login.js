import { faGoogle} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import Navigation from '../../Share/Navigation/Navigation';
import './Login.css'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, isLoading, authError} = useAuth();
    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e =>{
        loginUser(loginData.email, loginData.password);
        e.preventDefault()
    }
    return (
        <div>
            <Navigation/>
            <div className='login-form mt-5 pt-5'>
            <form onSubmit={handleLoginSubmit}>
                <div className="form-name">
                    <span>LogIn</span>
                </div>

                <div className="form-group">
                    <input 
                    type="email"
                    name="email"
                    onChange={handleOnChange}
                    className='form-control item' 
                    id='use_email' 
                    placeholder='User Email' />
                </div>

                <div className="form-group">
                <input 
                type="password" 
                name='password'
                onChange={handleOnChange}
                className='form-control item' 
                id='password'
                placeholder='password' />
                </div>

                <div className="form-group">
                <button type="submit" className='btn btn-block login-account'>Login</button>
                </div>

                <div className='social-media'>
                    <h5 className='my-2'>Login With</h5>
                </div>

                <button className='btn btn-block login-account'>Google <FontAwesomeIcon icon={faGoogle}/> </button>
                <p className='new_accout'>Don't Have Account ? Please <Link to='/signup'>Register</Link></p>
                {isLoading && <Spinner animation="border" variant="success" />}
            {user?.email && <div className="alert alert-success" role="alert">
                User Created Successfully !
                </div> }
            {
                authError && <div class="alert alert-danger" role="alert">
                {authError}
              </div>
            }
            </form>
            
            
            </div>
        </div>
    );
};

export default Login;