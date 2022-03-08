import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomBar from "./Components/BottomBar";
import "./index.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Weather from "./Components/Weather";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <BottomBar />
      </div>

    </Router>

  );
}
export default App;
