import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyAquarium from "./pages/MyAquarium/MyAquarium";
import Home from "./pages/Home/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mitt-akvarium" element={<MyAquarium />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
