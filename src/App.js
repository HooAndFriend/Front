import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Result from "./Result";
import Login from "./Login";
import AdminPage from "./AdminPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Text from "./components/TextEditor";
import RegisterPage from "./RegisterPage";
import Update from "./Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/AdminPage" element={<AdminPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Result" element={<Result />} />
          <Route path="/Text" element={<Text />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
          <Route path="/Update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
