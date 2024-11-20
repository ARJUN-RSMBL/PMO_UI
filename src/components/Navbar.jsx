// src/components/Navbar.js
import React from "react";
import { Search } from "lucide-react";
// import "./Navbar.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProjectCenter from "./ProjectCenter";
import BenefitRegister from "./BenefitRegister";
import Home from "./Home";
import PortfolioManagement from "./PortfolioManagement";
import BusinessCase from "./BusinessCase";

export default function Navbar() {
  return (
    <Router>
    <header className="border-b h-[80px] bg-[#002337] flex items-center justify-center" >
      <div className="flex h-50 items-center px-4 sm:px-6">
        <a
          className="mr-6 flex items-center text-lg font-semibold text-white"
          href="#"
        >
           <Link to="/"> EPM</Link>
        </a>
        <nav className="flex flex-1 items-center space-x-4 text-sm">
          <a className="text-white/90 transition-colors hover:text-white" href="#">
            <Link to="/"> Home</Link>
          </a>
          <a className="text-white/90 transition-colors hover:text-white" href="#">
            <Link to="/business-case"> Business Case</Link>
          </a>
          <a className="text-white/90 transition-colors hover:text-white" href="#">
            <Link to="/workflow-tasks"> Workflow Tasks</Link>
          </a>
          <a className="text-white/90 transition-colors hover:text-white" href="#">
            <Link to="/projects"> Projects</Link>
          </a>
          <a className="text-white/90 transition-colors hover:text-white" href="#">
            <Link to="/portfolio"> Portfolio</Link>
          </a>
          <a className="text-white/90 transition-colors hover:text-white" href="#">
            <Link to="/cost-management"> Cost Management</Link>
          </a>
          <a className="text-white/90 transition-colors hover:text-white" href="#">
            <Link to="/archived-projects"> Archived Projects</Link>
          </a>
        </nav>
        <div className="ml-auto flex items-center ml-[30px] space-x-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <input
              className="w-72 pl-8 border rounded p-1"
              placeholder="Search this site"
              type="search"
            />
          </div>
        </div>
      </div>
    </header>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectCenter />} />
          <Route path="/business-case" element={<BusinessCase />} />
          <Route path="/portfolio" element={<PortfolioManagement />} />
          <Route path="/workflow-tasks" element={<BenefitRegister />} />
        </Routes>
    </Router>
  );
}
