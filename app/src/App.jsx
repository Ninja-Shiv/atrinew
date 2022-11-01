import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Indexatri from "./pages/Indexatri.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/indexatri" element={<Indexatri />} />
    </Routes>
  );
}
