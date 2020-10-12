import React, { useRef, useState, useEffect } from "react";
import { Steps, Button,  Spin } from 'antd';
import CaptureMedia from "./util.js";
import {
  PictureOutlined,
  FileImageOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";
import RecordButton from "../RecordButton";
import styles from './styles.js';

const { Step } = Steps;

const steps = [
  {
    title: 'Type',
    content: 'First-content',
  },
  {
    title: 'Capture',
    content: 'Second-content',
  },
  {
    title: 'Create',
    content: 'Last-content',
  },
];

const CreateSlide = (props) => {
  const liveVideoElement = useRef(null);
  const finishedVideoElement = useRef(null);
  
  const [current, setCurrent] = useState(0);
  const [mediaType, setMediaType] = useState('');  
  const [isCapturing, setIsCapturing] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [captureMedia, setCaptureMedia] = useState(null);
  const [recordLoading, setRecordLoading] = useState(false);
    
  useEffect(() => {
    const captureMedia = new CaptureMedia({
      liveVideoElement,
      setIsCapturing,
      setIsRecording,
    });
    setCaptureMedia(captureMedia);
  }, []);
  
  useEffect(() => {
    if(current===1){
      captureMedia.startCapture();
    }
  }, [current]);
  
  const onDataFinish = (url) => {
    setRecordLoading(true);
    
    setTimeout(function(){ 
      setCurrent(2);
      
      setTimeout(function(){ 
        finishedVideoElement.current.src = url;
        finishedVideoElement.current.play();
        setRecordLoading(false);
      }, 100);
    }, 2000);
  }
  
  const _startRecording = () => {
    captureMedia.startRecording(onDataFinish)
  }
  
  const _stopRecording = () => {
    captureMedia.stopRecording()
  }
  
  if (captureMedia === null)
    return <div>Loading...</div>;
  
  
  return (
    <React.Fragment>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      {
        current === 0
        &&
          <div style={styles.stepsContent}>
            <h5 style={styles.headerMedia}> Select your media type </h5>
            <p style={styles.paragraphMedia}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            
            <div style={styles.bigButtonContainer}>
              <div 
                onClick={ () => setMediaType('video') } 
                style={ mediaType === 'video' ? styles.activeBigButton : styles.bigButton}
              >
                <VideoCameraOutlined style={styles.bigButtonIcon}/> <br/>
                Video
              </div>
              <div 
                onClick={ () => setMediaType('screenshot') } 
                style={ mediaType === 'screenshot' ? styles.activeBigButton : styles.bigButton}
              >
                <FileImageOutlined style={styles.bigButtonIcon}/> <br/>
                Screenshot
              </div>
              <div 
                onClick={ () => setMediaType('imagefile') } 
                style={ mediaType === 'imagefile' ? styles.activeBigButton : styles.bigButton}
              >
                <PictureOutlined style={styles.bigButtonIcon}/> <br/>
                Image File
              </div>
            </div>
          </div>
      }
      {
        current === 1
        &&
          <div style={styles.stepsContent}>
            <Spin spinning={recordLoading} size={'large'} style={{maxHeight: 'none'}}>
              <video style={styles.video} ref={liveVideoElement} autoPlay></video>
            </Spin>
            <RecordButton 
              startRecording={_startRecording}
              stopRecording={_stopRecording}
            />
          </div>
      }
      {
        current === 2
        &&
          <video style={styles.video} ref={finishedVideoElement} autoPlay controls></video>
      }
      
      <div className="steps-action">
        <Button 
          style={{ margin: '0 8px' }} 
          onClick={() => setCurrent(current-1) }
          disabled={current === 0}
        >
          Previous
        </Button>
        {
          current === steps.length - 1
          ?
          <Button type="primary" onClick={() => setCurrent(current+1) }>
            Create
          </Button>
          :
          <Button type="primary" onClick={() => setCurrent(current+1) } disabled={mediaType===''}>
            Next
          </Button>
        }
      </div>
        
        
    </React.Fragment>
  );
};

export default CreateSlide;