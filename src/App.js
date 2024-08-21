import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import UpdatePassword from "./components/UpdatePassword";
import AllBlog from "./components/AllBlog";
// import AllBlogSidebar from "./components/AllBlogSidebar";
import SingleBlog from "./components/SingleBlog";
import ErrorPage from "./components/ErrorPage";
import ProtectedRoute from "./components/ProtectedRoute";
import UserProfile from "./components/UserProfile";

const RoutesConfig = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/forgotPassword", element: <ForgotPassword /> },
    {
      path: "/userProfile",
      element: (
        <ProtectedRoute>
          <UserProfile />
        </ProtectedRoute>
      ),
    },
    {
      path: "/updatePassword",
      element: (
        <ProtectedRoute>
          <UpdatePassword />
        </ProtectedRoute>
      ),
    },
    {
      path: "/:category/view-all",
      element: (
        <ProtectedRoute>
          <AllBlog />
        </ProtectedRoute>
      ),
    },
    {
      path: "/:category/:id",
      element: (
        <ProtectedRoute>
          <SingleBlog />
        </ProtectedRoute>
      ),
    },
    { path: "", element: <ErrorPage /> },
    // {
    //   path: "/allBlog/:category",
    //   element: <AllBlog />,
    //   children: [
    //     { path: "", element: <Navigate replace to="latest" /> },
    //     { path: ":blogFilter", element: <AllBlogSidebar /> },
    //   ],
    // },
  ]);
};

function App() {
  return (
    <div>
      <Router>
        <div className="App w-full min-h-screen flex flex-col bg-white">
          <Header />
          <main className="flex-1 mt-auto">
            <RoutesConfig />
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
