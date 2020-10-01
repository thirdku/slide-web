import React from 'react';
import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Row, Col, Button} from 'antd';
import 'antd/dist/antd.css';
import { styles } from './App.js';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const datas = [{title:"fake",data:"Nimble Strikes: Your critical strikes with Attacks reduce your non-Ultimate ability cooldowns by 20% of their remaining cooldown"},{title:"dod",data:"Every third Attack is enhanced, dealing an additional 80-120 (lv 1-18) (+30% bonus Attack Damage) true damage. "},{title:"ga",data:"When taking damage that would reduce you below 30% health, gain a 150-650 (lv 1-18) shield for 3 seconds. In addition, gain 20% Life Steal for 8 seconds. (90 second cooldown) "},{title:"faker",data:"Dash in target direction, firing three missiles at the lowest-health enemy near your destination (prioritizing champions). Deals a total of 105-300 (lv 1-18) (+30% "},{title:"aagaa",data:" Deal 100 (+30% Ability Power) damage in a cone, slowing enemies by 65% for 1.5 seconds. Enemies at the center of the cone are Rooted instead. (45 second cooldown) "}]
 
export default function SlidesItems ({item,index,onDelete}) {
    const [data, setData] = useState(datas);
    
    
  return (
           <div key={index} style={styles.flexbox}>
             <Button style={styles.smallButton} icon={<MinusOutlined />} size="small" onClick={()=>onDelete(index)} type="ghost"></Button>
             <h6 style={styles.title}>
              {item.title}
             </h6> 
             <p style={styles.data}>
              {item.data} 
             </p>
             

            </div>
         
     
        
        )}