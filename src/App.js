import { Navigate, BrowserRouter as Router, useRoutes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import UpdatePassword from "./components/UpdatePassword";
import AllBlog from "./components/AllBlog";
import AllBlogSidebar from "./components/AllBlogSidebar";

const RoutesConfig = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/forgotPassword", element: <ForgotPassword /> },
    { path: "/updatePassword", element: <UpdatePassword /> },
    {
      path: "/allBlog",
      element: <AllBlog />,
      children: [
        { path: "", element: <Navigate replace to="latest" /> },
        { path: ":blogFilter", element: <AllBlogSidebar /> },
      ],
    },
  ]);
};

function App() {
  return (
    <div>
      <Router>
        <div className="App w-full h-screen flex flex-col bg-white">
          <Header />
          <RoutesConfig />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
