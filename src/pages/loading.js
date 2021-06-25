import React, { Component } from 'react';
import { Link } from "react-router-dom";
import whiteLogo from '../images/whiteLogo.png'
import sun from '../images/sun.png'
import '../loading.css';
import LottieAnimation from '../components/Lottie';

class loading extends Component {
    render() {
        return (
            <div className="wrapper">
            <div className="profile-card js-profile-card">
                <div className="loading-page">
                    <div className="gridContainer">
                        <img src={whiteLogo} className="loading-logo" alt="logo" />
                        <div className="secretDiv">
                            <LottieAnimation/>
                        </div>
                        
                    </div>
                    <div className="buttonContainer">
                        <div className="container">
                            <Link to="/login">
                                <button className="loadingButton" type="submit">Log in</button>
                            </Link>
                            <button className="loadingButton" type="submit">Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default (loading);