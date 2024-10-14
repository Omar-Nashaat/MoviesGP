import "./App.css";
// import ResultPage from "./components/ui/ResultPage/ResultPage";
import ResultPage from "./components/ui/ResultPage/ResultPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResultPage />} />
        <Route path="/:type" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
