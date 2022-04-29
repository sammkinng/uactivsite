import React, { useEffect, useState, useRef } from "react";

import * as posedetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-core';

import '@tensorflow/tfjs-backend-webgl';

import { Camera } from './utils/camera';

import './App.css';

import data from "./Assets/Json/Text";

import { detectorConfig, model } from './constants/model';

export const sendDataToReactNativeApp = async (txt) => {
  window.ReactNativeWebView.postMessage(JSON.stringify(txt));
}

export default () => {
  const loader = async (exercise) => {
    let camera = null
    // let unsubscribe=null
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
          if (detector != null) {
            try {
              poses = await detector.estimatePoses(
                camera.video,
                { maxPoses: 1, flipHorizontal: false });
            } catch (error) {
              detector.dispose();
              detector = null;
              alert(error);
              console.log(error, 1)
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
        requestAnimationFrame(renderPrediction);
      };
      camera = await Camera.setupCamera(exercise)
      var detector = await createDetector()
      renderPrediction()
    } catch (error) {
      console.log(error, 2)
      alert(error)
    }
  }
  // useEffect(() => {
  //   let camera = null
  //   let unsubscribe = null
  //   const loader = async () => {
  //     try {
  //       const createDetector = async () => {
  //         return posedetection.createDetector(model, detectorConfig);
  //       }
  //       async function renderResult() {
  //         if (camera) {
  //           if (camera.video.readyState < 2) {
  //             await new Promise((resolve) => {
  //               camera.video.onloadeddata = (video) => {
  //                 resolve(video);
  //               };
  //             });
  //           }
  //           let poses = null;
  //           if (detector != null) {
  //             try {
  //               poses = await detector.estimatePoses(
  //                 camera.video,
  //                 { maxPoses: 1, flipHorizontal: false });
  //             } catch (error) {
  //               detector.dispose();
  //               detector = null;
  //               alert(error);
  //             }
  //           }

  //           camera.drawCtx();

  //           if (poses && poses.length > 0) {
  //             camera.drawResults(poses)
  //             camera.do_exercise(exercise)
  //           }
  //         }
  //       }
  //       async function renderPrediction() {
  //         await renderResult();
  //         unsubscribe = requestAnimationFrame(renderPrediction);
  //       };
  //       camera = await Camera.setupCamera()
  //       var detector = await createDetector()
  //       renderPrediction()
  //     } catch (error) {
  //       alert(error)
  //     }
  //   }
  //   document.getElementById('output').addEventListener("click", e => {
  //     loader()
  //   })
  //   return (() => {
  //     camera = null
  //     cancelAnimationFrame(unsubscribe)
  //   })
  // }, [exercise])
  useEffect(() => {
    window.addEventListener("message", message => {
      let val = message.data
      if (val.type === 'exercise') {
        // setExercise(val.data.index)
        loader(val.data.index)
        // document.getElementById('output').click()
        // let audio = data[val.data.index].audio
        // audio.play()
        // playing.current = audio
      }
      else {
        console.log(val.type, 3)
        alert(val.type)
      }
    });
    // setTimeout(() => {
    //   console.log('time')
    //   loader(0)
    // }, 5000)
  }, [])
  return (
    <div className="middle">
      <div className="canvas-wrapper" style={{ position: 'relative' }}>
        <canvas id="output"></canvas>
        <video id="view" playsInline>
        </video>
      </div>
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
    </div>
  );
}
