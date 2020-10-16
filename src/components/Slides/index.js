import React from 'react'
import { Droppable , Draggable } from "react-beautiful-dnd";
import { DragOutlined, DeleteOutlined } from '@ant-design/icons';
import { Col, Button } from 'antd';
import 'antd/dist/antd.css';
import { styles } from '../../App.js';
import './index.css';


const divStyle ={
 slides:{
  height : '200px',
  textAlign: 'center',
  color: 'black',
  position: 'relative',
  border: '2px solid grey',
  backgroundPosition: 'right',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
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
  backgroundImage: 'url("https://www.freepnglogos.com/uploads/plus-icon/add-plus-icon-28.png")',
  backgroundPosition: 'center',
  backgroundSize : 'cover',
  borderStyle: 'dotted',
 },
 col:{
  border: '1px solid ',
  maxHeight: '842px',
  backgroundColor: 'white',
  overflowY: 'maxresdefault'
 },
 number:{
  textAlign: 'center',
  fontSize: '10px',
 }
};
const divSelected ={
 slides:{
  height : '200px',
  textAlign: 'center',
  color: 'black',
  position: 'relative',
  backgroundPosition: 'right',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  border: '5px solid #1890ff',
 },
 slides1:{
  height : '200px',
  margin : '30px',
  marginLeft: '30px',
  marginRight: '30px',
  textAlign: 'center',
  color: 'black',
  position: 'relative',
 },
 col:{
  border: '1px solid ',
  maxHeight: '842px',
  backgroundColor: 'white',
  overflowY: 'maxresdefault'
 },
 number:{
  textAlign: 'center',
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
              <h1 style={{...divStyle.number}}>{index + 1}</h1>
              <div style={item.id===currentSlide ? {...divSelected.slides,backgroundImage: 'url(' + item.image + ')' } : {...divStyle.slides,backgroundImage: 'url(' + item.image + ')' }} onClick={()=>{setSlide(item.id);setImage(item.image);}} >
               <Button 
                {...provided.dragHandleProps}  
                type={"dashed"}
                icon={<DragOutlined />}
                style={styles.smallButton1}
               />
               <Button 
                type={"primary"}
                onClick={()=>onDelete(index)} 
                icon={<DeleteOutlined />} 
                style={styles.smallButton}
               />
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