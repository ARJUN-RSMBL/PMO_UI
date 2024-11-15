import React from "react";

const PortfolioManagement = () => {
  return (
    <div className="portfolio-management bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center bg-gray-700 text-white p-4 rounded-t-lg">
        <span className="font-medium">PMO Department</span>
        <h1 className="text-2xl font-semibold">Portfolio Management</h1>
        <span className="font-medium">Resemble EPM</span>
      </div>

      <div className="bg-gray-50 border-t border-b border-gray-300 p-4 text-blue-700 font-semibold">
        <span className="flex items-center space-x-2">
          <i className="fas fa-bars"></i> {/* Placeholder icon for menu */}
          <span>Select to manage Portfolio</span>
        </span>
      </div>

      <div className="flex justify-center space-x-4 mt-6">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded">
          Strategic Initiative
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded">
          Departments
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded">
          Portfolio Analysis
        </button>
      </div>
    </div>
  );
};

export default PortfolioManagement;
