import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import BackgroundWrapper from "./components/BackgroundWrapper";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import DestinationSpecific from "./components/DestinationSpecific";
import Crew from "./pages/Crew";
import CrewSpecific from "./components/CrewSpecific";
import Technology from "./pages/Technology";
import TechnologySpecific from "./components/TechnologySpecific";

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
          <Route path="crew" element={<Crew />}>
            <Route index element={<CrewSpecific />} />
            <Route path="douglas" element={<CrewSpecific />} />
            <Route path="mark" element={<CrewSpecific />} />
            <Route path="victor" element={<CrewSpecific />} />
            <Route path="anousheh" element={<CrewSpecific />} />
          </Route>
          <Route path="technology" element={<Technology />}>
            <Route index element={<TechnologySpecific />} />
            <Route path="launch" element={<TechnologySpecific />} />
            <Route path="spaceport" element={<TechnologySpecific />} />
            <Route path="capsule" element={<TechnologySpecific />} />
          </Route>
        </Routes>
      </BackgroundWrapper>
    </Router>
  );
}

export default App;
