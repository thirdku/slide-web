import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Row, Col} from 'antd';
import 'antd/dist/antd.css';
import MediaCapture from './components/MediaCapture';

const styles = {
  columnBig: {
    border: '1px solid #73AD21',
    paddingLeft: '10px',
    backgroundColor: 'white',
    padding: '20px',
    paddingTop: '10px',
    textAlign: 'left'
  }
}

export default function SlideView() {
  return (
    <Col span={18} style={styles.columnBig}>
     <MediaCapture />
    </Col>
)}