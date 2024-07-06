// const adminPaths = [
//     {
//         name: "Dashboard",
//         path: "dashboard",
//         element: '<AdminDashboard></AdminDashboard>',
//     },
//     {
//         name: "User Management",
//         children: [
//             {
//                 name: "Create Admin",
//                 path: "create-admin",
//                 element: "<CreateAdmin></CreateAdmin>",
//             },
//             {
//                 name: "Create Faculty",
//                 path: "create-faculty",
//                 element: "<CreateFaculty></CreateFaculty>",
//             },
//             {
//                 name: "Create Student",
//                 path: "create-student",
//                 element: "<CreateStudent></CreateStudent>",
//             },
//         ],
//     },


// ];


// const adminSidebarItems = adminPaths.reduce((acc, item) => {

//     if (item.name && item.path) {
//         acc.push({
//             key: item.name,
//             label: 'Navlink'
//         })
//     }

//     if (item.children) {
//         acc.push({
//             key: item.name,
//             lable: item.name,
//             children: item.children.map(child => ({
//                 key: child.name,
//                 label: 'Navlink'
//             }))
//         })
//     }

//     return acc
// }, [])

// console.log(JSON.stringify(adminSidebarItems))


// const adminRoutes = adminPaths.reduce((acc, item) => {
//     if (item.path && item.element) {
//         acc.push({
//             path: item.path,
//             element: item.element
//         })
//     }
//     if (item.children) {
//         item.children.forEach(child => acc.push({
//             path: child.path,
//             element: child.element
//         }))
//     }

//     return acc
// }, [])

// console.log(adminRoutes)