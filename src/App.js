import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";

const RoutesConfig = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/forgotPassword", element: <ForgotPassword /> },
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
