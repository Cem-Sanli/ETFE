import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main/Main";
import RegisterPage from "./pages/register/Register";
import LoginPage from "./pages/login/Login"
import Instructors from "./pages/instructors/Instructors"
import CalendarPage from "./pages/calendar/Calendar"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/instructors" element={<Instructors/>}/>
        <Route path="/calendar" element={<CalendarPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
