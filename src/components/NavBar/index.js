import React from 'react';
import { Row, Col, Divider, Menu, Layout, Button} from 'antd';
import 'antd/dist/antd.css';
import { BellOutlined, UserOutlined, SwapLeftOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

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
    width: '290px',
    height: '40px',
    backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Logz.io_rectangle_logo.png/640px-Logz.io_rectangle_logo.png")',
    backgroundPosition: 'center',
    margin: '16px 24px 16px 0',
    backgroundSize: 'cover',
    float: 'left'
  },
  divider1: {
   float: 'right'
  },
 
};

export default function NavBar() {
  return (
  <Header style={styles.navBar} >
   <div style={styles.divider}>   
   </div>
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
    <div style={styles.divider1}/>
    <Menu.Item  
     key="3"
     style={styles.divider1}
    >
     <BellOutlined />
    </Menu.Item>
    <SubMenu 
     key="4"
     style={styles.divider1}
     icon={<UserOutlined />}
     > 
    <Menu.Item key="setting:1">
     <Button>
      Log out
     </Button>
    </Menu.Item>
    </SubMenu>
   </Menu>
  </Header>
)}