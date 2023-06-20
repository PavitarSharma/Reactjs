import Login from "./login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todos from "./todos/Todos";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Todos />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
