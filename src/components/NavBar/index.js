import React from 'react';
import { Row, Col, Divider, Menu, Layout} from 'antd';
import 'antd/dist/antd.css';
import { BellOutlined, UserOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
const styles = {
  navBar: {
    marginRight: '-8px',
    backgroundColor: 'white'

  },
  button: {
    height:'50px',
    width: '100%',
    fontColor:'white'
  },
  divider: {
    width: '890px',
    height: '31px',
    background: 'rgba(255, 255, 255, 0.2)',
    margin: '16px 24px 16px 0',
    float: 'left'
  }
};

export default function NavBar() {
  return (
  <Header style={styles.navBar} >
   <div style={styles.divider}/>
   
   <Menu defaultSelectedKeys={['2']} mode="horizontal">
    <Menu.Item 
     key="1"
    >
     CLIENTS
    </Menu.Item>
    <Menu.Item
     key="2"
     >
     OVERVIEW
    </Menu.Item>
    
    <Menu.Item  
     key="3"
    >
     <BellOutlined />
    </Menu.Item>
    <Menu.Item 
     key="4"
     > 
     <UserOutlined />
    </Menu.Item>
   </Menu>
  </Header>
)}