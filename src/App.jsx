import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Designs from "./pages/Designs.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/designs" element={<Designs />} />
      </Routes>
    </Router>
  );
}

export default App;
