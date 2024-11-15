import React from "react";

const BusinessCase = () => {
  return (
    <div className="business-case bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-blue-700 mb-4">Business Case</h1>

      <div className="flex justify-around mb-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md">
          Program
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-6 rounded-md">
          Sub-Program
        </button>
        <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded-md">
          Standalone Project
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-6 rounded-md">
          Project Under Program
        </button>
      </div>

      <div className="bg-gray-50 p-4 rounded-md border">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-1">
            <label className="font-medium text-gray-700" htmlFor="company">
              Company
            </label>
            <select id="company" className="w-full px-3 py-2 border rounded-md focus:outline-none">
              <option value="all">All</option>
              {/* Add more company options as needed */}
            </select>
          </div>
          <div className="space-y-1">
            <label className="font-medium text-gray-700" htmlFor="division">
              Division
            </label>
            <select id="division" className="w-full px-3 py-2 border rounded-md focus:outline-none">
              <option value="all">All</option>
              {/* Add more division options as needed */}
            </select>
          </div>
          <div className="space-y-1">
            <label className="font-medium text-gray-700" htmlFor="type">
              Type
            </label>
            <select id="type" className="w-full px-3 py-2 border rounded-md focus:outline-none">
              <option value="all">All</option>
              {/* Add more type options as needed */}
            </select>
          </div>
          <div className="space-y-1">
            <label className="font-medium text-gray-700" htmlFor="status">
              Request Status
            </label>
            <select id="status" className="w-full px-3 py-2 border rounded-md focus:outline-none">
              <option value="all">All</option>
              {/* Add more status options as needed */}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCase;
