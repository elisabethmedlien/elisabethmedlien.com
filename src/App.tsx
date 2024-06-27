import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyAquarium from "./pages/MyAquarium/MyAquarium";
import Home from "./pages/Home/Home";
import "./App.css";
import MyNewYearsResolution from "./pages/MyNewYearsResolution/MyNewYearResolution";
import MyExercisePlan from "./pages/MyExercisePlan/MyExercisePlan";
import MyStrengthTrainingSessions from "./pages/MyStrengthTrainingSessions/MyStrenghtTrainingSessions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mitt-akvarium" element={<MyAquarium />} />
        <Route path="/mitt-nyttårsforsett" element={<MyNewYearsResolution />} />
        <Route path="/min-treningsplan" element={<MyExercisePlan />} />
        <Route
          path="/min-styrketrening"
          element={<MyStrengthTrainingSessions />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
