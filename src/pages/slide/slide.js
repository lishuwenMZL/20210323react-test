
// 侧栏导航

import React from 'react';
import { Menu } from 'antd';
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;

const Sider = () => {
  const [mode] = React.useState('inline');
  const [theme] = React.useState('light');

  return (
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode={mode}
      theme={theme}
    >
      <Menu.Item key="1" icon={<MailOutlined />}>
        ****列表
      </Menu.Item>

      <Menu.Item key="2" icon={<CalendarOutlined />}>
        ****列表
      </Menu.Item>

      <SubMenu key="sub1" icon={<AppstoreOutlined />} title="***详情">
        <Menu.Item key="3">***详情1</Menu.Item>
        <Menu.Item key="4">***详情2</Menu.Item>
      </SubMenu>
    </Menu>
  );
};
export default Sider;

