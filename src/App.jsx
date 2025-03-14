import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import { SignUp, Login, Dashboard, PropertyDetail, NotFound } from "./pages";

// Redux
import { useSelector } from "react-redux";

// Toast
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

const App = () => {
  const { message, type } = useSelector((state) => state.toast);

  useEffect(() => {
    if (message) {
      toast[type](message);
    }
  }, [message, type]);

  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
