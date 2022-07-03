import React from 'react'
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  LogoutOutlined ,
  ContainerOutlined,
  MailOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const { SubMenu } = Menu;

class Sider extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div style={{ width: 256 
      }}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme='dark'
          inlineCollapsed={this.state.collapsed}
    
          
        >
         <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 15,textAlign:'center' }}> 
          {/* {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)} */}
        </Button> 

         <Menu.Item key="1" icon={<HomeOutlined />}><NavLink to='/Home' >
            Dashboard </NavLink>
          </Menu.Item>

          <Menu.Item key="2" icon={<ContainerOutlined />}><NavLink to='/Supplier' >
            Supplier </NavLink>
          </Menu.Item>

          <Menu.Item key="3" icon={<ContainerOutlined />}><NavLink to='/Transaction' >
            Buyer </NavLink>
          </Menu.Item>

          <Menu.Item key="4" icon={<ContainerOutlined />}><NavLink to='/Transaction' >
            Product </NavLink>
          </Menu.Item>

          <Menu.Item key="5" icon={<ContainerOutlined />}><NavLink to='/Transaction' >
            Contact  </NavLink>
          </Menu.Item>

          <Menu.Item key="5" icon={<ContainerOutlined />}><NavLink to='/Transaction' >
            About  </NavLink>
          </Menu.Item>

         

          
        </Menu>
      </div>
    );
  }
}

export default Sider;