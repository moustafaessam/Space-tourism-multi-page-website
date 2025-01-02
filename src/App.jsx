import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import BackgroundWrapper from "./components/BackgroundWrapper";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import DestinationSpecific from "./components/DestinationSpecific";

function App() {
  return (
    <Router>
      <BackgroundWrapper>
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="destination" element={<Destination />}>
            <Route index element={<DestinationSpecific />} />
            <Route path="moon" element={<DestinationSpecific />} />
            <Route path="europa" element={<DestinationSpecific />} />
            <Route path="mars" element={<DestinationSpecific />} />
            <Route path="titan" element={<DestinationSpecific />} />
          </Route>
        </Routes>
      </BackgroundWrapper>
    </Router>
  );
}

export default App;
