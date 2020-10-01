import React, {useState, useEffect} from "react";
import {
  Button
} from 'antd';
import {
  PlaySquareOutlined,
  PauseCircleOutlined
} from "@ant-design/icons";


const styles = {
  playButton: {
    cursor: 'pointer',
    fontSize: '40px',
    display: 'inline-block',
    verticalAlign: 'middle'
  },
  timerText: {
    fontSize: '20px',
    fontFamily: 'monospace',
    display: 'inline-block',
    marginLeft: '10px'
  }
};

const RecordButton = (props) => {
  const [counter, setCounter] = useState(0);
  const [timerFunc, setTimerFunc] = useState(null);
  const [playing, setPlaying] = useState(false);
  
  const startTimer = () => {
    setPlaying(true);
    
    const func = setInterval(() => {
      setCounter(counter => counter + 1);
    }, 1000);
    
    setTimerFunc(func);
    
    props.startRecord();
  }
  
  const stopTimer = () => {
    setPlaying(false);
    clearInterval(timerFunc);
    
    props.stopRecord();
  }
  
  return (
    <div>
      {
        !playing
        ?
          <PlaySquareOutlined onClick={startTimer} style={styles.playButton} />
        :
          <PauseCircleOutlined onClick={stopTimer} style={styles.playButton} />
      }
      <div style={styles.timerText}>
        0:0{counter}
      </div>
    </div>
  )
}

export default RecordButton;

//clearInterval(refreshIntervalId);