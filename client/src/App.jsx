import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import UserManagement from "./pages/UserManagement.jsx";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>  } />
        <Route path="/register" element={<SignUpPage/>} />
        <Route path="/users" element={<UserManagement/>} />
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </>
  )
}

export default App
