import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      {/* Navigation */}
      <Navigation />
      <Routes>
        {/* Homepage */}
        <Route></Route>
        {/* Destination */}
        <Route></Route>
        {/* Crew */}
        <Route></Route>
        {/* Technology */}
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;
