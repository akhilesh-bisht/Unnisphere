import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <div className="bg-white min-h-screen flex flex-col w-full mx-auto  relative">
        {/* Navbar */}

        {/* Main content area */}
        <main className="flex-grow p-4 md:p-8 lg:p-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
