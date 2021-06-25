import React, { Component } from 'react';
import { Link } from "react-router-dom";
import neighborlyLogo from '../images/neighborlyLogo.png'
import '../Login.css';

class login extends Component {
    render() {
        return (
            <div className="background">
            <div className="grid-container">
                <div className="logo-item">
                  <img src={neighborlyLogo} className="neighborlyLogo" alt="logo" />
                </div>
                <div className="grid-item">
                    <form>
                    <div className="container">
                        <h1>Let's Connect!</h1>
                        <div className="emailInput">
                          <label htmlFor="username">Email Address</label>
                          <input
                                type="text" 
                                name="username" 
                                required>
                          </input>
                        </div>
                        <div className="passwordInput">
                          <label htmlFor="password">Password</label>
                          <input 
                              type="password" 
                              name="password"
                              required></input>
                        </div>      
                        <Link to="/profile">
                            <button className="loginButton">Log in</button>
                        </Link>
                        <button className="passwordButton">Forgot your password?</button>
                        <label></label>
                    </div>
                    </form>  
                </div>
            </div>
            </div>
        );
    }
}
export default (login);