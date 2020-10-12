import React from 'react';
import {  Col} from 'antd';
import 'antd/dist/antd.css';

const styles = {
  columnBig: {
    border: '0.5px solid grey',
    textAlign: 'left',
    backgroundSize: '100%, 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '77.9vh',
    width: '100%',
    paddingLeft: '-8px',
    paddingRight: '-8px',

  }
};

export default function SlideView({data, currentSlide, setSlide, setData, currentImage, setImage}) {
  return (
    <Col 
     span={18} 
     style={styles.columnBig}
     >
     <div style={{...styles.columnBig,backgroundImage: 'url(' + currentImage + ')' }}/>
    </Col>
)}