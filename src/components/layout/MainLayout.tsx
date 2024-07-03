import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
import { adminSidebarItems } from "../../routes/adminRoutes";
const { Header, Content, Footer, Sider } = Layout;
//? HARD CODED WAY
// const items: MenuProps["items"] = [
//   {
//     key: "Dashboard",
//     label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
//   },
//   {
//     key: "User Management",
//     label: "User Management",
//     children: [
//       {
//         key: "Create Admin",
//         label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,
//       },
//       {
//         key: "Create Faculty",
//         label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>,
//       },
//       {
//         key: "Create Student",
//         label: <NavLink to="/admin/create-student">Create Student</NavLink>,
//       },
//     ],
//   },
// ];

//

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <h1 style={{ color: "white" }}>Bond University</h1>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", margin: "0.5rem" }}
          className="demo-logo-vertical"
        />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={adminSidebarItems}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          BonDeV ©{new Date().getFullYear()} Created by Bondon Datta
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
