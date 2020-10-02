import { useState } from 'react';
import { Droppable , DragDropContext, Draggable } from "react-beautiful-dnd";
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Col , Button} from 'antd';
import 'antd/dist/antd.css';
import { styles } from './App.js';

const datas = [{title:"fake",data:"Nimble Strikes: Your critical strikes with Attacks reduce your non-Ultimate ability cooldowns by 20% of their remaining cooldown",id:"id-1"},
 {title:"dod",data:"Every third Attack is enhanced, dealing an additional 80-120 (lv 1-18) (+30% bonus Attack Damage) true damage. ",id:"id-2"},
 {title:"ga",data:"When taking damage that would reduce you below 30% health, gain a 150-650 (lv 1-18) shield for 3 seconds. In addition, gain 20% Life Steal for 8 seconds. (90 second cooldown)",id:"id-3"},
 {title:"faker",data:"Dash in target direction, firing three missiles at the lowest-health enemy near your destination (prioritizing champions). Deals a total of 105-300 (lv 1-18) (+30% ",id:"id-4"},
 {title:"aagaa",data:" Deal 100 (+30% Ability Power) damage in a cone, slowing enemies by 65% for 1.5 seconds. Enemies at the center of the cone are Rooted instead. (45 second cooldown) ",id:"id-5"}
 ];

export default function Slides() {
    const [data, setData] = useState(datas);
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
  return (
       <DragDropContext onDragEnd={onDragEnd}>
        <Col span={6} >
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
              {...provided.dragHandleProps}
              >
              <div style={styles.flexbox}>
               <Button 
                style={styles.smallButton} 
                icon={<MinusOutlined />} 
                size="small" 
                onClick={()=>onDelete(index)} 
                type="ghost"
               >
               </Button>
               <h6 style={styles.title}>
                {item.title}
               </h6> 
               <p style={styles.data}>
               {item.data} 
               </p>
              </div>
             </div>
             )}
            </Draggable>
         )
        )}
          {provided.placeholder}
         </div>
         )}
        </Droppable>
        </Col>
       </DragDropContext>
        
    )}