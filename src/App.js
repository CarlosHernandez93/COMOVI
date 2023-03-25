
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage.js";
import LoginPage from "./components/LoginPage.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </>
  );
}

export default App;
