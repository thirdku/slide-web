import React from 'react'
import { useState } from 'react';
import { Droppable , DragDropContext, Draggable } from "react-beautiful-dnd";
import { DragOutlined, DeleteOutlined } from '@ant-design/icons';
import { Col , Button} from 'antd';
import 'antd/dist/antd.css';
import { styles } from '../../App.js';
const datas = [
 {title:"fake",data:"Nimble Strikes: Your critical strikes with Attacks reduce your non-Ultimate ability cooldowns by 20% of their remaining cooldown",id:"id-1",image:"https://www.comscidev.com/wp-content/uploads/2019/02/Scratch-Desktop30-4.jpg"},
 {title:"dod",data:"Every third Attack is enhanced, dealing an additional 80-120 (lv 1-18) (+30% bonus Attack Damage) true damage. ",id:"id-2",image:"https://i.ytimg.com/vi/LLLzBm6erWw/maxresdefault.jpg"},
 {title:"ga",data:"When taking damage that would reduce you below 30% health, gain a 150-650 (lv 1-18) shield for 3 seconds. In addition, gain 20% Life Steal for 8 seconds. (90 second cooldown)",id:"id-3",image:"https://www.nongit.com/blog/wp-content/uploads/2017/05/switch-tablet-and-desktop-mode_02-1.jpg"},
 {title:"faker",data:"Dash in target direction, firing three missiles at the lowest-health enemy near your destination (prioritizing champions). Deals a total of 105-300 (lv 1-18) (+30% ",id:"id-4",image:"https://i2.wp.com/www.nongit.com/blog/wp-content/uploads/2017/05/switch-tablet-and-desktop-mode_01-1.jpg?fit=1024%2C576&ssl=1"},
 {title:"aagaa",data:" Deal 100 (+30% Ability Power) damage in a cone, slowing enemies by 65% for 1.5 seconds. Enemies at the center of the cone are Rooted instead. (45 second cooldown) ",id:"id-5",image:"https://www.windowssiam.com/wp-content/uploads/2019/02/%E0%B8%A2%E0%B9%89%E0%B8%B2%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%9A%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C-Desktop-Windows-10-6.jpg"}
 ];

const divStyle ={
 slides:{
  height : '110px',
  width: '150px',
  marginTop : '-20px',
  marginLeft: '70px',
  marginRight: '20px',
  textAlign: 'center',
  color: 'black',
  position: 'relative',
  border: '2px solid grey',
 },
 slides1:{
  height : '110px',
  width: '150px',
  margin : '25px',
  marginLeft: '70px',
  marginRight: '30px',
  textAlign: 'center',
  color: 'black',
  position: 'relative',
  border: '1px solid black',
  backgroundImage: 'url("https://www.freepnglogos.com/uploads/plus-icon/add-plus-icon-28.png")',
  backgroundPosition: 'center',
  backgroundSize : 'cover'
 },
 col:{
  border: '1px solid ',
  maxHeight: '842px',
  backgroundColor: 'white',
  overflowY: 'maxresdefault'
 },
 number:{
  position: 'relative',
  left : '-95px',
  top: '16px',
  fontSize: '20px',
 }
};
const divSelected ={
 slides:{
  height : '110px',
  width: '150px',
  marginTop : '-20px',
  marginLeft: '70px',
  marginRight: '25px',
  textAlign: 'center',
  color: 'black',
  position: 'relative',
  border: '5px solid orange',
 },
 slides1:{
  height : '140px',
  width: '200x',
  margin : '30px',
  marginLeft: '30px',
  marginRight: '30px',
  textAlign: 'center',
  color: 'black',
  position: 'relative',
  border: '1px solid black',
 },
 col:{
  border: '1px solid ',
  maxHeight: '842px',
  backgroundColor: 'white',
  overflowY: 'maxresdefault'
 },
 number:{
  position: 'relative',
  left : '-95px',
  top: '16px',
  fontSize: '20px',
 }
};
 
export default function Slides({onDragEnd, data, currentSlide, onDelete, addSlide, setSlide, setData, setImage, currentImage}) {

  return (
        <Col 
         span={6}
         style={styles.col}
        >
        <Droppable droppableId={"droppable"}>
          {provided => (
         <div 
          style={styles.column} 
          {...provided.droppableProps}
          ref={provided.innerRef}
         >
         { data.map ((item,index) => (
           <Draggable 
            key={item.id}
            draggableId={item.id} 
            index={index}>
            {provided => (
             <div 
              ref={provided.innerRef}
              {...provided.draggableProps}
               >
              <h1 style={{...divStyle.number}}>{index}</h1>
              <div style={item.id===currentSlide ? {...divSelected.slides,backgroundImage: 'url(' + item.image + ')' } : {...divStyle.slides,backgroundImage: 'url(' + item.image + ')' }} onClick={()=>{setSlide(item.id);setImage(item.image);}} >
               <div
                {...provided.dragHandleProps}
                style={styles.smallButton1} 
                >
                <DragOutlined />
               </div>
               <div 
                style={styles.smallButton} 
                onClick={()=>onDelete(index)} 
               >
                <DeleteOutlined />
               </div>
              
              </div>
             </div>
             )}
            </Draggable>
         )
        )}
          {provided.placeholder}
          <div 
           style={{...divStyle.slides1}}
           onClick={()=>addSlide()}
          />
         </div>
         )}
        </Droppable>
        
        </Col>

    )}