import React, {useState} from "react";

import {
  PlusCircleFilled,
  PauseCircleFilled
} from "@ant-design/icons";


const styles = {
  playButton: {
    cursor: 'pointer',
    fontSize: '30px',
    display: 'inline-block',
    verticalAlign: 'middle',
    color: 'red',
    border: '4px solid black',
    borderRadius: '100%',
    padding: '5px'
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
    
    props.startRecording();
  }
  
  const stopTimer = () => {
    setPlaying(false);
    clearInterval(timerFunc);
    
    props.stopRecording();
  }
  
  return (
    <div>
      {
        !playing
        ?
          <PlusCircleFilled onClick={startTimer} style={styles.playButton} />
        :
          <PauseCircleFilled onClick={stopTimer} style={styles.playButton} />
      }
      <div style={styles.timerText}>
        0:0{counter}
      </div>
    </div>
  )
}

export default RecordButton;