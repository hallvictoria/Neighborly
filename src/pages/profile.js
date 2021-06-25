import React, { Component } from 'react';
import profilepic from '../images/profilepic.jpg'
import '../App.css';
import '../style.scss';

class profile extends Component {
    render() {
        return (
            <div class="wrapper">

                <div class="profile-card js-profile-card">

                    <div class="profile-card__img">
                        <img src={profilepic} alt="profile card"></img>
                    </div>

                    <div class="profile-card__cnt js-profile-cnt">
                        <div class="profile-card__name">Dalena Le</div>
                        <div class="profile-card__txt">Software Developer </div>
                        <div><strong>2 years at State Farm</strong></div>


                        <span class="profile-card-loc__txt">
                            Enterprise Technology
                        </span>
                    </div>

                    <div class="profile-card__name">Today's challenges</div>
                    <div class="profile-card-social">
                        <a href="http://localhost:3000/" class="profile-card-social__item card1" target="_blank">
                            <span class="icon-font">
                            </span>
                        </a>
                        <a href="http://localhost:3000/" class="profile-card-social__item card2" target="_blank">
                            <span class="icon-font">
                            </span>
                        </a>
                        <a href="http://localhost:3000/" class="profile-card-social__item card3" target="_blank">
                            <span class="icon-font">
                            </span>
                        </a>
                    </div>

                </div>
            </div>
        );
    }
}
export default (profile);