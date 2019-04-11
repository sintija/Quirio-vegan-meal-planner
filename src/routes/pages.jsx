import LoginPage from "views/Pages/LoginPage.jsx";
import RegisterPage from "views/Pages/RegisterPage.jsx";

/**
 * Paths to Register and Login Pages
 * @type {*[]}
 */
const pagesRoutes = [
  {
    path: "/pages/register-page",
    name: "Register Page",
    short: "Register",
    mini: "RP",
    icon: "tech_mobile",
    component: RegisterPage
  },
  {
    path: "/pages/login-page",
    name: "Login Page",
    short: "Login",
    mini: "LP",
    icon: "users_circle-08",
    component: LoginPage
  }
];

export default pagesRoutes;
