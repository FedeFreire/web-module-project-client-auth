import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/Login";
import FriendsList from "./components/FriendList";
import AddFriend from "./components/AddFriend";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./utils/ProtectedRoute";
import Logout from "./components/LogOut";

function App() {
  return (
    <div className="App">
      <h2>Client Auth Project</h2>
      <NavBar />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/friends"
          element={
            <ProtectedRoute>
              <FriendsList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/friends/add"
          element={
            <ProtectedRoute>
              <AddFriend />
            </ProtectedRoute>
          }
        />
      <Route path="/logout" element={
      <ProtectedRoute>
      <Logout />
      </ProtectedRoute>
      } />
      </Routes>
    </div>
  );
}

export default App;
