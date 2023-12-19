import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DateNavbar from "./components/DatesNavabar";
import Home1 from "./components/Home1";
import Home2 from "./components/Home2";
import Home3 from "./components/Home3";
import Home4 from "./components/Home4";
import Home5 from "./components/Home5";
import { AnimatePresence } from "framer-motion";

function App() {


  
  return (
    <AnimatePresence>
    <div className="flex flex-col min-h-screen w-screen bg-slate-50 ">
    <BrowserRouter>
    <DateNavbar/>
      <Routes>
        <Route
          path="/"
          element={<Home1/>}
        />
        <Route
          path="/yesterday"
          element={<Home2/>}
        />
        <Route
          path="/beforeYesterday"
          element={<Home3/>}
        />
        <Route
          path="/tommorrow"
          element={<Home4/>}
        />
        <Route
          path="/afterTommorrow"
          element={<Home5/>}
        />
      
      </Routes>
    
    
    </BrowserRouter>
    </div>
    </AnimatePresence>
  );
}

export default App;
