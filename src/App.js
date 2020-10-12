import React from 'react';
import { useState } from 'react';
import { DragDropContext } from "react-beautiful-dnd";

import { Row,  Layout} from 'antd';

import 'antd/dist/antd.css';
import Slides from './components/Slides/index.js';
import NavBar from './components/NavBar/index.js';
import SlideView from './components/SlideView/index.js';

const {  Content, Footer } = Layout;

const datas = [
 {title:"fake",data:"Nimble Strikes: Your critical strikes with Attacks reduce your non-Ultimate ability cooldowns by 20% of their remaining cooldown",id:"id-1",image:"https://www.comscidev.com/wp-content/uploads/2019/02/Scratch-Desktop30-4.jpg"},
 {title:"dod",data:"Every third Attack is enhanced, dealing an additional 80-120 (lv 1-18) (+30% bonus Attack Damage) true damage. ",id:"id-2",image:"https://i.ytimg.com/vi/LLLzBm6erWw/maxresdefault.jpg"},
 {title:"ga",data:"When taking damage that would reduce you below 30% health, gain a 150-650 (lv 1-18) shield for 3 seconds. In addition, gain 20% Life Steal for 8 seconds. (90 second cooldown)",id:"id-3",image:"https://www.nongit.com/blog/wp-content/uploads/2017/05/switch-tablet-and-desktop-mode_02-1.jpg"},
 {title:"faker",data:"Dash in target direction, firing three missiles at the lowest-health enemy near your destination (prioritizing champions). Deals a total of 105-300 (lv 1-18) (+30% ",id:"id-4",image:"https://i2.wp.com/www.nongit.com/blog/wp-content/uploads/2017/05/switch-tablet-and-desktop-mode_01-1.jpg?fit=1024%2C576&ssl=1"},
 {title:"aagaa",data:" Deal 100 (+30% Ability Power) damage in a cone, slowing enemies by 65% for 1.5 seconds. Enemies at the center of the cone are Rooted instead. (45 second cooldown) ",id:"id-5",image:"https://www.windowssiam.com/wp-content/uploads/2019/02/%E0%B8%A2%E0%B9%89%E0%B8%B2%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%9A%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C-Desktop-Windows-10-6.jpg"}
 ];
export const styles = {
 app:{
  textAlign:'center',
  overflowY: 'hidden',
  overflowX: 'hidden'
 },
 appHeader: {
  backgroundColor: '#EEEEEE',
  height: '78vh',
  minWidth: '100%',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white',
  marginRight: '-8px',
  paddingLeft: '30px',
  paddingRight: '80px',
  paddingBottom: '40px',
  marginTop : '-15px',
   overflowY: 'hidden',
  overflowX: 'hidden'
 },
 appHeader1: {
  backgroundColor: '#EEEEEE',
  height: '5vh',
  minWidth: '100%',
  display: 'flex',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white',
  paddingLeft: '30px',
  paddingRight: '80px',
  paddingBottom: '40px',
  marginRight: '-8px',
  overflowY: 'hidden',
  overflowX: 'hidden'
 },
 column: {
  border: '1px solid grey',
  height: '78vh',
  backgroundColor: 'white',
  overflowY: 'scroll',
  textAlign: 'center',
  position: 'relative',
 },
 columnBig: {
  border: '1.5px solid grey',
  paddingLeft: '10px',
  backgroundColor: 'white',
  height: '77.8vh',

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
  right: '0px',
  cursor: 'pointer',
  backgroundColor: 'white',
  height: '35px'
 },
 smallButton1:{
  position:'absolute',
  left: '0px',
  top: '0px',
  backgroundColor: 'white'
 },
 footer:{
  textAlign: 'right',
 }

 };

function App() {
  const [data, setData] = useState(datas);
  const [currentSlide, setSlide] = useState();
  const [currentImage, setImage] = useState();
    const onDragEnd = result => {
      // return if item was dropped outside
      if (!result.destination) return;
      // return if the item was dropped in the same place
      if (
       result.source.droppableId === result.destination.droppableId &&
       result.source.index === result.destination.index
       )
       return;
      // get the items array
      const newItems = [...data];
      // get the draggedItems
      const draggedItem = newItems[result.source.index];
      // delete the item from source position and insert it to the destination positon
      newItems.splice(result.source.index, 1);
      newItems.splice(result.destination.index, 0, draggedItem);
      // create new data
      const newData = [
       ...newItems
      ];
      // update state
      setData(newData);
      console.log(newItems);
    };
    const onDelete = (index) => {
     const item = [...data];
     item.splice(index,1);
     setData(item);
    };
    const addSlide = () => {
     const item = [...data];
     item.push( {title:"",data:"",id:"id-("+ data.length +")",image:"https://www.comscidev.com/wp-content/uploads/2019/02/Scratch-Desktop30-4.jpg"});
     setData(item);
     console.log(data.length);
    };
  return (
    <div style={styles.app}>
     <Layout >
      <NavBar  />
      <Content>
      <Row 
       style={styles.appHeader1} 
       gutter={16} 
      >
      
      </Row>
      <Row 
       style={styles.appHeader} 
       gutter={16} 
      >
       <DragDropContext onDragEnd={onDragEnd}>
        <Slides 
         onDragEnd={()=>onDragEnd()}
         data={data} setData={setData}
         currentSlide={currentSlide}
         addSlide={addSlide}
         onDelete={onDelete}
         setSlide={setSlide} 
         currentImage={currentImage}
         setImage={setImage}
        />
       </DragDropContext>
        <SlideView
         data={data}
         setData={setData} 
         currentSlide={currentSlide}
         setSlide={setSlide} 
         currentImage={currentImage} 
         setImage={setImage}
        />
      </Row>
      </Content>
      <Footer style={styles.footer}>Shepherdlabs © 2020</Footer>
     </Layout>
    </div>
  );
 }

export default App;
