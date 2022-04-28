import React, { useEffect, useState, useRef } from "react";
// import Middle from "./Components/Middle";
// import "./Styles/Workout.css";
// import React, { useContext, useEffect, useState } from 'react';
import * as posedetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-core';
// import { Context } from '../App';
import '@tensorflow/tfjs-backend-webgl';

import { Camera } from './utils/camera';
import cam from './Assets/images/camera.png'
import './Styles/Middle.css';

import data from "./Assets/Json/Text";

import { detectorConfig, model } from './constants/model';

export const sendDataToReactNativeApp = async (txt) => {
  window.ReactNativeWebView.postMessage(JSON.stringify(txt));
  // window.ReactNativeWebView.postMessage(txt);
}


// export const Context = createContext();

export default () => {
  const [allowed, setAllowed] = useState(0)
  const yesClick = useRef(null);
  const playing = useRef(null);
  const [modal, setModal] = useState(null);
  const [open, setOpen] = useState(true);
  const [rep, setRep] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [exercise, setExercise] = useState(0);
  const [start, setStart] = useState(true);
  // return (
  //   <Context.Provider
  //     value={{
  //       yesClick,
  //       modal,
  //       setModal,
  //       start,
  //       setStart,
  //       open,
  //       setOpen,
  //       rep,
  //       setRep,
  //       speed,
  //       setSpeed,
  //       completed,
  //       setCompleted,
  //       exercise,
  //       setExercise,
  //       playing,
  //     }}
  //   >
  //     <div className="app">
  //       <Middle key={"middle"} />
  //     </div>
  //   </Context.Provider>
  // )
  useEffect(() => {
    let camera = null
    let unsubscribe = null
    let animation = null
    const setAnimation = (x) => {
      animation = x
    }
    const loader = async () => {
      try {
        const createDetector = async () => {
          return posedetection.createDetector(model, detectorConfig);
        }
        async function renderResult() {
          if (camera) {
            if (camera.video.readyState < 2) {
              await new Promise((resolve) => {
                camera.video.onloadeddata = (video) => {
                  resolve(video);
                };
              });
            }
            let poses = null;
            if (start && !completed) {

              if (detector != null) {
                try {
                  poses = await detector.estimatePoses(
                    camera.video,
                    { maxPoses: 1, flipHorizontal: false });
                } catch (error) {
                  detector.dispose();
                  detector = null;
                  alert(error);
                }
              }
            }

            camera.drawCtx();

            if (poses && poses.length > 0) {
              camera.drawResults(poses)
              camera.do_exercise(exercise)
            }
          }
        }
        async function renderPrediction() {
          await renderResult();
          unsubscribe = requestAnimationFrame(renderPrediction);
        };
        camera = await Camera.setupCamera(
          setRep,
          setSpeed,
          (audio) => playing.current = audio,
          playing.current,
          setCompleted,
          setAnimation
        );
        var detector = await createDetector()
        renderPrediction()
        setAllowed(1)
      } catch (error) {
        if (error === 'Permission Error') {
          setAllowed(2)
        }
        else {
          console.log(error)
          setAllowed(1)
        }
      }
    }
    document.getElementById('output').addEventListener("click", e => {
      // console.log('click')
      loader()
      // sendDataToReactNativeApp('modal')
    })
    // loader()
    return (() => {
      clearTimeout(animation)
      camera = null
      cancelAnimationFrame(unsubscribe)
    })
  }, [completed, exercise, start])
  useEffect(() => {
    window.addEventListener("message", message => {
      let val = message.data
      if (val.type === 'exercise') {
        // alert(val.data.name)
        setExercise(val.data.index)
        document.getElementById('output').click()
        let audio = data[val.data.index].audio
        audio.play()
        playing.current = audio
      }
      else {
        alert(val.type)
      }
    });
  }, [])
  return (
    <div className="middle">
      {/* <button id={'btn'}>Click</button> */}
      <div className="canvas-wrapper" style={{ position: 'relative' }}>
        <canvas id="output"></canvas>
        <video id="view" playsInline>
        </video>
      </div>
      {/* <div id='green'></div> */}
      <div id='countdown'>
        <div className="counter">
          <div className="nums">
            <span className="in">3</span>
            <span>2</span>
            <span>1</span>
          </div>
          <h4 className='hs1'>Get Ready</h4>
        </div>
        <div className="final">
          <h4 className='hs2'>GO</h4>
        </div>
      </div>
      {allowed === 2 && <div className='middle-pop'>
        <img src={cam} alt='camera' />
        <p>Our smart trainer needs access to your device camera.</p>
      </div>}
    </div>
  );
}
