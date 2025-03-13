import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import { SignUp, Login, Dashboard, PropertyDetail, NotFound } from "./pages";

const App = () => {
  return (
    <Router>
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
