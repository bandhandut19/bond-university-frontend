import OfferedCourses from "../pages/Student/OfferedCourses";
import StudentDashboard from "../pages/Student/StudentDashboard";
export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard></StudentDashboard>,
  },
  {
    name: "Offered-Course",
    path: "offered-course",
    element: <OfferedCourses></OfferedCourses>,
  },
];
