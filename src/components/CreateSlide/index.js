import React, { useRef, useState, useEffect } from "react";
import { Steps, Button, message } from 'antd';
import CaptureMedia from "./util.js";
import {
  PictureOutlined,
  FileImageOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";
import RecordButton from "../RecordButton";

const { Step } = Steps;

const styles = {
  bigButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'space-between',
    color: 'black',
    marginBottom: '50px',
    marginTop: '50px'
    
  },
  bigButton: {
    width: '150px',
    height: '95px',
    backgroundColor: 'white',
    color: 'rgb(144 131 131)',
    textAlign: 'center',
    paddingTop: '20px',
    borderRadius: '10px',
    letterSpacing: '1px',
    fontSize: '14px',
    border: '1px solid #c5c5c5',
    cursor: 'pointer'
  },
  stepsContent: {
    color: 'black',
    textAlign: 'center'
  },
  paragraphMedia: {
    fontSize: '12px',
    width: '400px',
    margin: '0 auto',
    color: '#565656'
  },
  headerMedia: {
    marginTop: '40px'
  },
  bigButtonIcon: {
    fontSize:'30px'
  },
  activeBigButton: {
    width: '150px',
    height: '95px',
    backgroundColor: '#1890ff',
    color: 'white',
    textAlign: 'center',
    paddingTop: '20px',
    borderRadius: '10px',
    letterSpacing: '1px',
    fontSize: '14px',
    border: '1px solid #1890ff'
  },
  video: {
    width: '100%',
    padding: '50px',
    backgroundColor: 'black',
    marginTop: '30px'
  }
};

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
  const videoElement = useRef(null);
  
  const [current, setCurrent] = useState(0);
  const [mediaType, setMediaType] = useState('');  
  const [isCapturing, setIsCapturing] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [captureMedia, setCaptureMedia] = useState(null);
    
  useEffect(() => {
    const captureMedia = new CaptureMedia({
      videoElement,
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
        ?
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
        :
        null
      }
      {
        current === 1
        ?
        <div style={styles.stepsContent}>
          <video style={styles.video} ref={videoElement} autoPlay></video>
          <RecordButton 
            startRecord={() => captureMedia.startRecording()}
            stopRecord={() => captureMedia.stopRecording()}
          />
        </div>
        :
        null
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