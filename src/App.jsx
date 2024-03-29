import React from "react";
// import Editor from "./components/Editor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import GlobalSocketProvider from "./context/GlobalSocketProvider";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import EditorPage from "./pages/EditorPage";
import { ConfigProvider } from "react-avatar";
import SessionsPage from "./pages/SessionsPage";

const App = () => {
  return (
    <ConfigProvider colors={["#AB47BC", "#C2185B", "EF6C00", "green", "blue"]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/docs/:id" element={<EditorPage />} />
          <Route path="/myaccount/:id" element={<SessionsPage />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
