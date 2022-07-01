import { Routes, Route } from "react-router-dom";
import "./App.css";
import Calender from "./pages/Calender/Calender";
import CompletedTask from "./pages/CompletedTask/CompletedTask";
import Navbar from "./pages/shared/Navbar";
import ToDo from "./pages/To-Do/ToDo";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<ToDo></ToDo>} />
        <Route path="calender" element={<Calender></Calender>} />
        <Route path="completetask" element={<CompletedTask></CompletedTask>} />
      </Routes>
    </div>
  );
}

export default App;
