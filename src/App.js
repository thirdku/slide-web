import { Row, Col, Button} from 'antd';
import 'antd/dist/antd.css';
import Slides from './Slides.js';
import SlideView from './SlideView.js';
import { BellOutlined, UserOutlined } from '@ant-design/icons';


export const styles = {
 app:{
  textAlign:'center'
 },
 appHeader: {
  backgroundColor: '#282c34',
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
  backgroundColor: '#282c34',
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
  border: '1px solid #73AD21',
  minHeight: '84.8vh',
 },
 columnBig: {
  border: '1px solid #73AD21',
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
 flexbox: {
  height : '100px',
  margin : '15px',
  marginLeft: '30px',
  marginRight: '30px',
  textAlign: 'center',
  border: '1px solid #73AD21',
  backgroundColor: 'white',
  color: 'black',
  position: 'relative'
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
  right: '23px'
 }
 };

function App() {
 
  return (
    <div style={styles.app}>
     <div >
      <Row 
       style={styles.appHeader1} 
       gutter={16} 
      >
       <Col span={6}>
        <Button   block >Back</Button>
       </Col>
       <Col span={14}> 
       </Col>
       <Col span={2} >
        <Button  icon={<BellOutlined />}>
        </Button>
       </Col>
       <Col span={2} >
        <Button icon={<UserOutlined />}> 
        </Button>
       </Col>
      </Row>
      <Row 
       style={styles.appHeader} 
       gutter={16,16} 
      >
        <Slides   />
        <SlideView/>
      </Row>
     </div>
    </div>
  );
 }

export default App;
