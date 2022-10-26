import React from "react";
import { Route, Routes } from "react-router-dom";
import Account from "./components/Account";
import ProtectedRoute from "./components/ProtectedRoute";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { AuthContextProvider } from "./context/AuthContext";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-red-500">
        A Movie Trailer Finder
      </h1>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
          <Route path='/main' element={<ProtectedRoute><Main /></ProtectedRoute>} />
          
          

        </Routes>
      </AuthContextProvider>
      <Routes>
        
      </Routes>
      
    </div>
  );
}

export default App;
