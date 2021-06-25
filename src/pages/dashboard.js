import React, { Component } from "react";
import "../App.css";
import { Carousel, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>;

class dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Hello, Jake</h1>
        <h2>Daily Challenges</h2>
        <div className=".carousel">
          <Carousel indicators={false}>
            <Carousel.Item>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Text>Meet Sara from Underwriting</Card.Text>
                  <Card.Text>50 pts</Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Text>
                    Reach out and catch up with one prior connection
                  </Card.Text>
                  <Card.Text>50 pts</Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Text>Introduce 2 connections to each other</Card.Text>
                  <Card.Text>50 pts</Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="specialbar">
          <h4>Current Points</h4>
          <h3>451</h3>
        </div>
        <h3>Feed</h3>
        <div className="specialbar">
          <div className="feeditem">
            <p className="feeditemtext">9:18 am</p>
            <p className="feeditemtext">
              Sara met with Utkarsh, a new connection
            </p>
            <p className="feeditemtext">+50pts</p>
          </div>
          <div className="feeditem">
            <p className="feeditemtext">11:14 am</p>
            <p className="feeditemtext">
              Brian got coffee with James, a new connection
            </p>
            <p className="feeditemtext">+25pts</p>
          </div>
          <div className="feeditem">
            <p className="feeditemtext">9:18 am</p>
            <p className="feeditemtext">
              Sara met with Utkarsh, a new connection
            </p>
            <p className="feeditemtext">+50pts</p>
          </div>
          <div className="feeditem">
            <p className="feeditemtext">11:14 am</p>
            <p className="feeditemtext">
              Brian got coffee with James, a new connection
            </p>
            <p className="feeditemtext">+25pts</p>
          </div>
        </div>
      </div>
    );
  }
}
export default dashboard;
