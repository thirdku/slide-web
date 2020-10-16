import React from 'react';
import {  Col} from 'antd';
import 'antd/dist/antd.css';
const styles = {
  columnBig: {
    textAlign: 'left',
    backgroundSize: '100%, 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '77vh',
    paddingLeft: '-8px',
    paddingRight: '-8px',
    backgroundColor: 'white',
    border : '2px solid #C5C5C5'
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