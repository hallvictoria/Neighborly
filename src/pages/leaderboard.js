import React, { Component } from "react";
import sun from "../images/sun.png";
import "../App.css";

class leaderboard extends Component {
  constructor() {
    super();
    const people = [
      { place: "1st", name: "Elizabeth Rogers", points: "23 points" },
      { place: "2nd", name: "Chris Paul", points: "35 points" },
      { place: "3rd", name: "Robert Pat", points: "15 points" },
    ];

    this.state = { people };
  }

  render() {
    return (
      <div>
        <body>
          <br />
          <h1 class="text-center">Leaderboard</h1>
          <div class="circular_image">
            <div id="border"></div>
            <img src="http://placekitten.com/500/500" />
          </div>
          <h2 class="text-center">Elizabeth Rogers</h2>
          <p style={{ color: "#661FDA", textAlign: "center" }}>23 points</p>
          <div>
            {this.state.people.map((person, index) => (
              <div id="roundedRect">
                <p class="p1">{person.place}</p>
                <div class="circular_position_image">
                  <img src="http://placekitten.com/500/500" />
                </div>
                <p class="p2">&nbsp;&nbsp;&nbsp;&nbsp;{person.name}</p>
                <p class="p3">{person.points}</p>
              </div>
            ))}
          </div>
        </body>
      </div>
    );
  }
}
export default leaderboard;
