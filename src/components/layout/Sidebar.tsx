import { Layout, Menu } from "antd";
import sidebarRoutes from "../../routes/sidebarRoutes";
import { adminPaths } from "../../routes/adminRoutes";
import { facultyPaths } from "../../routes/facultyRoutes";
import { studentPaths } from "../../routes/studentRoutes";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {
  const role = "student";
  let sidebaritems;
  switch (role) {
    case userRole.ADMIN:
      sidebaritems = sidebarRoutes(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebaritems = sidebarRoutes(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebaritems = sidebarRoutes(studentPaths, userRole.STUDENT);
      break;

    default:
      break;
  }
  console.log(sidebaritems);
  return (
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
        items={sidebaritems}
      />
    </Sider>
  );
};

export default Sidebar;
