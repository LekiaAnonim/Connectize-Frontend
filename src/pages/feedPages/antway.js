import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MessageOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Input, Layout, Menu, theme, Badge } from "antd";
import Anthome from "../../components/admin/feeds/anthome";
import FeedSideBar from "../../components/admin/feeds/feedSideBar";

const { Header, Content, Sider } = Layout;
const { Search } = Input;

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          background: "white",
          padding: "0 50px",
        }}
      >
        {/* <div className="demo-logo" /> */}
        <div>
          {/* <Image 
            src={ProfileImg} 
            alt='ProfileImg'
            className='w-16 rounded-full'
            /> */}
        </div>
        <div className="text-blue-900 ml-4 hidden sm:inline">
          <h2 className="text-xl font-bold">Dashboard</h2>
        </div>
        <div>
          <Button
            type="text"
            icon={
              collapsed ? (
                <MenuUnfoldOutlined className="fw-bold h1 w-100" />
              ) : (
                <MenuFoldOutlined className="fw-bold h1  w-100" />
              )
            }
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "30px",
              width: 50,
              height: 50,
              // color: 'white'
            }}
            className="ms-4 me-4"
          />
        </div>
        {/* search bar */}
        <div className=" ms-4 mt-3" style={{ width: "35rem" }}>
          {/* <Input.Search type='text' placeholder='Search ...' className='min-w-full'/> */}
          <Search
            placeholder="Search..."
            size="large"
            onSearch={(value) => console.log(value)}
            enterButton
            className="w-full "
          />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          //items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
        <div className="hidden sm:inline">
          {/* <Button type="primary" icon={<BellOutlined/>} style={{marginRight: 8}}/> */}
          <Badge count={2} color="green">
            <Avatar
              icon={<BellOutlined />}
              style={{ marginRight: 8 }}
              className="bg-blue-900"
            />
          </Badge>

          <Badge count={5} color="green">
            <Avatar
              icon={<MessageOutlined />}
              style={{ marginRight: 8 }}
              className="bg-blue-900"
            />
          </Badge>
        </div>
        <Button
          type="primary"
          icon={<Avatar src={<img src="{ProfileImg}" alt="avatar" />} />}
        />
      </Header>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={250}
          style={{
            background: colorBgContainer,
          }}
          //you can remove this to allow icons on small screens
          breakpoint="lg"
          collapsedWidth="0"
          className="pt-5 mt-1 px-2"
        >
          <FeedSideBar />
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              //height: '100%',
              borderRight: 0,
            }}

            // items={[
            //     {
            //       key: '1',
            //       icon: <AppstoreOutlined/>,
            //       label: 'Dashboard',
            //       //children: items2,
            //     },
            //     {
            //         key: '2',
            //         icon: <PicCenterOutlined />,
            //         label: 'Components',
            //         children: [
            //             {
            //               key: '21',
            //               icon: <RightCircleOutlined />,
            //               label: 'Alert',
            //             },
            //             {
            //               key: '22',
            //               icon: <RightCircleOutlined />,
            //               label: 'Acordion',
            //             },
            //             {
            //               key: '23',
            //               icon: <RightCircleOutlined />,
            //               label: 'Badges',
            //             },
            //             {
            //               key: '24',
            //               icon: <RightCircleOutlined />,
            //               label: 'Breadcrumbs',
            //             },
            //             {
            //               key: '25',
            //               icon: <RightCircleOutlined />,
            //               label: 'Cards',
            //             },
            //             {
            //               key: '26',
            //               icon: <RightCircleOutlined />,
            //               label: 'Carousel',
            //             },
            //             {
            //               key: '27',
            //               icon: <RightCircleOutlined />,
            //               label: 'Modal',
            //             }
            //         ],
            //     },
            //     {
            //         key: '3',
            //         icon: <ContainerOutlined />,
            //         label: 'Forms',
            //         children: [
            //             {
            //               key: '31',
            //               icon: <RightCircleOutlined />,
            //               label: 'Form Elements',
            //             },
            //             {
            //               key: '32',
            //               icon: <RightCircleOutlined />,
            //               label: 'Form Layouts',
            //             },
            //             {
            //               key: '33',
            //               icon: <RightCircleOutlined />,
            //               label: 'Form Editors',
            //             },
            //             {
            //                 key: '34',
            //               icon: <RightCircleOutlined />,
            //               label: 'Validations',
            //             }
            //         ],
            //     },
            //     {
            //         key: '4',
            //         icon: <TableOutlined />,
            //         label: 'Tables',
            //         children: [
            //             {
            //               key: '41',
            //               icon: <RightCircleOutlined />,
            //               label: 'Basic Tables',
            //             },
            //             {
            //               key: '42',
            //               icon: <RightCircleOutlined />,
            //               label: 'Data Tables',
            //             },
            //             {
            //               key: '43',
            //               icon: <RightCircleOutlined />,
            //               label: 'Editable Tables',
            //             },
            //             {
            //               key: '44',
            //               icon: <RightCircleOutlined />,
            //               label: 'Draggable Tables',
            //             }
            //         ],
            //     },
            //     {
            //         key: '5',
            //         icon: <BarChartOutlined />,
            //         label: 'Charts',
            //         children: [
            //             {
            //               key: '51',
            //               icon: <RightCircleOutlined />,
            //               label: 'Charts.js',
            //             },
            //             {
            //               key: '52',
            //               icon: <RightCircleOutlined />,
            //               label: 'ApexCharts',
            //             },
            //             {
            //               key: '53',
            //               icon: <RightCircleOutlined />,
            //               label: 'ECharts',
            //             }
            //         ],
            //     },
            //     {
            //         key: '6',
            //         icon: <SketchOutlined />,
            //         label: 'Icons',
            //         children: [
            //             {
            //               key: '61',
            //               icon: <RightCircleOutlined />,
            //               label: 'Bootstrap Icon',
            //             },
            //             {
            //               key: '62',
            //               icon: <RightCircleOutlined />,
            //               label: 'Remix Icon',
            //             },
            //             {
            //               key: '63',
            //               icon: <RightCircleOutlined />,
            //               label: 'BoxIcon',
            //             }
            //         ],
            //     },
            //     {
            //         key:'7',
            //         label:'PAGES',
            //     },
            //     {
            //         key:'8',
            //         icon:<UserOutlined/>,
            //         label:'Profile',
            //     },
            //     {
            //       key:'9',
            //       icon:<QuestionCircleOutlined />,
            //       label:'F.A.Q',
            //     },
            //     {
            //       key:'10',
            //       icon:<IdcardOutlined />,
            //       label:'Contact',
            //     },
            //     {
            //       key:'11',
            //       icon:<ProfileOutlined />,
            //       label:'Register',
            //     },
            //     {
            //       key:'12',
            //       icon:<LoginOutlined />,
            //       label:'Login',
            //     }

            // ]}
            // //items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: "24px",
          }}
          className="bg-blue-50"
        >
          <Content
            style={{
              //padding: 24,
              margin: 0,
              // minHeight: 280,
              // background: colorBgContainer,
              // borderRadius: borderRadiusLG,
            }}
            className="bg-blue-50"
          >
            {/* <Home/> */}
            <Anthome />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Navbar;
