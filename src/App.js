import React from 'react';
import { Row, Col, Button, Layout} from 'antd';

import 'antd/dist/antd.css';
import Slides from './components/Slides/index.js';
import NavBar from './components/NavBar/index.js'
import SlideView from './components/SlideView/index.js';
import { BellOutlined, UserOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

export const styles = {
 app:{
  textAlign:'center'
 },
 appHeader: {
  backgroundColor: '#EEEEEE',
  minHeight: '84.8vh',
  minWidth: '100%',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white',
  marginRight: '-8px',
  paddingLeft: '30px',
  paddingRight: '80px',
  paddingTop:  '0px',
  paddingBottom: '40px',
 },
 appHeader1: {
  backgroundColor: '#EEEEEE',
  minHeight: '10px',
  minWidth: '100%',
  display: 'flex',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white',
  padding: '10px',
  paddingLeft: '30px',
  paddingRight: '80px',
  paddingTop:  '40px',
  paddingBottom: '40px',
  marginRight: '-8px',
 },
 column: {
  border: '1px solid ',
  minHeight: '842px',
  backgroundColor: 'white'
 },
 columnBig: {
  border: '1px solid black',
  paddingLeft: '10px',
  backgroundColor: 'white',
 },
 button: {
  backgroundColor: 'black',
  height: '40px',
  textAlign: 'center',
  fontSize: '17px',
  padding: '8px',
 },
 back: {
  width:'100px',
  height:'60px',
  backgroundColor: '#282c34',
 },
 buttonBig: {
  backgroundColor: 'black',
  height: '60px',
  textAlign: 'center',
  fontSize: '17px',
  padding: '12px',
 },
 
 title:{
  fontSize: '25px',
 },
 data:{
  fontSize: '10px',
  marginTop:'-13px',
 },
 smallButton:{
  position: 'absolute',
  top: '0px',
  right: '0px'
 },
 smallButton1:{
  position:'absolute',
  left: '0px',
  top: '0px'
 },

 };

function App() {
 
  return (
    <div style={styles.app}>
     <Layout >
      <NavBar  />
      <Content>
      <Row 
       style={styles.appHeader1} 
       gutter={16} 
      >
       <Col span={6}>
        <Button  type="primary" block >Back</Button>
       </Col>
       <Col span={14}> 
       </Col>
       <Col span={2} >
       </Col>
       <Col span={2} >
       </Col>
      </Row>
      <Row 
       style={styles.appHeader} 
       gutter={16,16} 
      >
        <Slides   />
        <SlideView/>
      </Row>
      </Content>
     </Layout>
    </div>
  );
 }

export default App;
