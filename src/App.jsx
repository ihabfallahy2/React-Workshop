import { Routes, Route, Link } from "react-router-dom";
import Menu from "./Components/Menu"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      {/* <Route path="about" element={<About />} /> */}
    </Routes>
  );
}

export default App;
