import React from 'react';
import {  Col} from 'antd';
import 'antd/dist/antd.css';
import CreateSlide from '../CreateSlide/index.js';

const styles = {
  columnBig: {
    border: '1px solid black',
    paddingLeft: '10px',
    backgroundColor: 'white',
    padding: '40px',
    textAlign: 'left'
  }
};

export default function SlideView() {
  return (
    <Col 
     span={18} 
     style={styles.columnBig}
     >
     <CreateSlide />
    </Col>
)}