import React, {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import TaskListPage from "./views/TaskListPage";
import LoginPage from "./views/LoginPage";

function App() {
  const [currentUser, setCurrentUser] = useState(false);
  useEffect(() => {
    // @ts-ignore
    const userData = JSON.parse(localStorage.getItem("userData")) || undefined;
    console.log(userData)
    if (typeof userData !== 'undefined') {
      setCurrentUser(true);
    }else{
      setCurrentUser(false)
    }
  }, [currentUser]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>


          <Route  path="/" element={
            currentUser?<TaskListPage/>:<Navigate to="/login" />
          } />

          <Route  path="/login" element={
            currentUser?<Navigate to="/" />:<LoginPage/>
          } />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
