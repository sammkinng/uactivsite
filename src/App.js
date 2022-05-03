import React, { useEffect } from "react";

import * as posedetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-core';

import '@tensorflow/tfjs-backend-webgl';

import { Camera } from './utils/camera';

import './App.css';

import { detectorConfig, model } from './constants/model';

export const sendDataToReactNativeApp = async (txt) => {
  window.ReactNativeWebView.postMessage(JSON.stringify(txt));
}

export default () => {
  const startModel = async (exercise) => {
    let camera = null
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
      camera = await Camera.setupCamera()
      var detector = await createDetector()
      // console.log('camera')
      // alert('camera')

      renderPrediction()
      setTimeout(() => sendDataToReactNativeApp({
        type: 'camera'
      }), 2000)
    } catch (error) {
      console.log(error, 2)
      alert(error)
    }
  }
  useEffect(() => {
    window.addEventListener("message", message => {
      let val = message.data
      if (val.type === 'exercise') {
        console.log('exercise')
        startModel(val.data.index)
      }
      else {
        console.log(val.type, 3)
        alert(val.type)
      }
    });
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
