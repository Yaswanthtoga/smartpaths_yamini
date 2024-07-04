import { UserOutlined } from "@ant-design/icons"
import { Button, Image, Layout, Menu } from "antd"
import { Content } from "antd/es/layout/layout"
import Sider from "antd/es/layout/Sider"
import client from "../utils/supabaseClient.js";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

function Home() {
  const handleSignOut = async ()=>{
    try {
      await client.auth.signOut();
      toast("Signed Out Successfully");
      <Navigate to="/login"/>
    } catch (error) {
      toast("Error Occured while logged off");
    }
  }
  return (
    <Layout style={{height:'100vh',width:'100vw'}}>
      <Sider style={{ height:'100%' }}>
        <Image 
         src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
         height="160px"
         width="100%"
        />

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined/>,
              label: 'Profile',
            },
            {
              key: '2',
              // icon: <VideoCameraOutlined />,
              label: 'My Courses',
            },
            {
              key: '3',
              // icon: <UploadOutlined />,
              label: 'Learning Path',
            }
          ]}
        />
      </Sider>
      {/* <Content>
        <Button danger onClick={handleSignOut}>Signout</Button>
      </Content> */}
    </Layout>
  )
}

export default Home
