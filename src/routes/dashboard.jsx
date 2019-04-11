import Dashboard from "views/Dashboard/Dashboard.jsx";
import ShoppingList from "views/Components/shoppingList/shoppingList.jsx"
import Panels from "views/Components/Preferences";

/**
 * Routes of the pages
 * @type {*[]}
 */
var dashRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "design_app",
        component: Dashboard
    }, {
        path: "/preferences",
        name: "Panels",
        mini: "P",
        component: Panels
    }, {
        path: "/shoppinglist",
        name: "ShoppingList",
        mini: "P",
        component: ShoppingList
    }, {
        redirect: true,
        path: "/",
        pathTo: "/dashboard",
        name: "Dashboard"
    }
];
export default dashRoutes;
