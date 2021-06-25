import React, { useRef, useState, useEffect, Link } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import profile from "./profile";
import "../App.css";
import { render } from "react-dom";

function Tf_model() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const drawRect = (detections, ctx) => {
    // Loop through each prediction
    detections.forEach((prediction) => {
      // Extract boxes and classes
      const [x, y, width, height] = prediction["bbox"];
      const text = prediction["class"];

      // Set styling
      const color = Math.floor(Math.random() * 16777215).toString(16);
      ctx.strokeStyle = "#" + color;
      ctx.font = "18px Arial";

      // Draw rectangles and text
      ctx.beginPath();
      ctx.fillStyle = "#" + color;
      ctx.fillText(text, x, y);
      ctx.rect(x, y, width, height);
      ctx.stroke();
    });
  };

  // Main function
  const runCoco = async () => {
    const net = await cocossd.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const obj = await net.detect(video);

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawRect(obj, ctx);
    }
  };

  useEffect(() => {
    runCoco();
  }, []);

  return (
    <div className="wrapper">
      <div className="App">
        <div>
          <h1>Complete Challenge</h1>
          <p>
            Get a picture of you completing your challenge (ex. you and your
            colleague with your coffee) and click submit!
          </p>
          <Webcam
            ref={webcamRef}
            muted={true}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              textAlign: "center",
              zindex: 9,
              width: 375,
              height: 480,
            }}
          />

          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              textAlign: "center",
              zindex: 8,
              width: 375,
              height: 480,
            }}
          />
          <button
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              textAlign: "center",
              marginTop: "400px",
              color: "#fc2929",
            }}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tf_model;
