import Pages from "../layouts/Pages/Pages.jsx";
import Dashboard from "../layouts/Dashboard/Dashboard.jsx";

const indexRoutes = [
  {path: "/pages", name: "Pages", component: Pages},
  {path: "/", name: "Home", component: Dashboard}
];

export default indexRoutes;
