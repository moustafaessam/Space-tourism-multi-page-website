import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackgroundWrapper from "./components/BackgroundWrapper";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

function App() {
  return (
    <Router>
      <BackgroundWrapper>
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </BackgroundWrapper>
    </Router>
  );
}

export default App;
