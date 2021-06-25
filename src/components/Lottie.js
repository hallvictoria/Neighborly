import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from '../images/business-meeting.json';

class LottieAnimation extends Component {
  constructor(props){
    super(props);
    this.state = {isStopped: false, isPaused: false};
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <div>
        <Lottie
          options={defaultOptions}
          height={250}
          width={250}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
          speed={this.state.animSpeed}
        />
      </div>
    );
  }
}

export default LottieAnimation;
