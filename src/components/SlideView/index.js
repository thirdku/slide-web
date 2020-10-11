import React from 'react';
import {  Col} from 'antd';
import 'antd/dist/antd.css';
import CreateSlide from '../CreateSlide/index.js';

const styles = {
  columnBig: {
    border: '1px solid grey',
    backgroundColor: 'white',
    textAlign: 'left',
    height: '842px'
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