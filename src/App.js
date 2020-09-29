import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Row, Col} from 'antd';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
     <div className="App-back">
     <Row className="App-header1" gutter={16,16} >
     <Col span={6}><div className="Button">Back</div></Col>
     <Col span={14}> </Col>
     <Col span={2} ><div className="Button-big"></div></Col>
     <Col span={2} ><div className="Button-big"></div></Col>
     </Row>
        <Row className="App-header" gutter={16} >
      <Col span={6} ><div className="Column"><div className="Flexbox">col-12</div><div className="Flexbox">col-12</div><div className="Flexbox">col-12</div><div className="Flexbox">col-12</div><div className="Flexbox">col-12</div><div className="Flexbox">col-12</div></div></Col>
      <Col span={18} className="Column-big"><div>col-12</div></Col>
    </Row>
    </div>
    </div>
  );
}

export default App;
