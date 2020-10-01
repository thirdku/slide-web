import React, { useRef, useState, useEffect } from "react";
import CaptureMedia from "./util.js";
import { Tabs, Button, Row } from "antd";
import {
  CameraOutlined,
  PlaySquareOutlined,
  StopOutlined,
  PauseCircleOutlined,
} from "@ant-design/icons";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const styles = {
  video: {
    width: "100%",
    backgroundColor: 'black'
  },
  btnCapture: {
    width: "150px",
    marginBottom: "10px",
    marginRight: "20px",
  },
};

const MediaCapture = (props) => {
  const videoElement = useRef(null);
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
    console.log(captureMedia);
  }, []);

  if (captureMedia === null) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Video" key="1">
          <Row>
            <Button
              onClick={() => captureMedia.startCapture()}
              icon={<CameraOutlined />}
              style={styles.btnCapture}
              disabled={isCapturing}
            >
              Start Capture
            </Button>
            <Button
              onClick={() => captureMedia.stopCapture()}
              icon={<StopOutlined />}
              style={styles.btnCapture}
              disabled={!isCapturing}
            >
              Stop Capture
            </Button>
          </Row>
          <Row>
            <Button
              onClick={() => captureMedia.startRecording()}
              icon={<CameraOutlined />}
              style={styles.btnCapture}
              disabled={isRecording}
            >
              Start Recording
            </Button>
            <Button
              onClick={() => captureMedia.stopRecording()}
              icon={<PauseCircleOutlined />}
              style={styles.btnCapture}
              disabled={!isRecording}
            >
              Stop Recording
            </Button>
          </Row>

          <video style={styles.video} ref={videoElement} autoPlay></video>
        </TabPane>
        <TabPane tab="Screenshot" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Image File" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </React.Fragment>
  );
};

export default MediaCapture;
