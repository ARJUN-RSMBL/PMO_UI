// import React from "react";

// const BusinessCase = () => {
//   return (
//     <div className="business-case bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-semibold text-blue-700 mb-4">Business Case</h1>

//       <div className="flex justify-around mb-6">
//         <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md">
//           Program
//         </button>
//         <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-6 rounded-md">
//           Sub-Program
//         </button>
//         <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded-md">
//           Standalone Project
//         </button>
//         <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-6 rounded-md">
//           Project Under Program
//         </button>
//       </div>

//       <div className="bg-gray-50 p-4 rounded-md border">
//         <h2 className="text-xl font-semibold text-blue-700 mb-4">Filters</h2>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           <div className="space-y-1">
//             <label className="font-medium text-gray-700" htmlFor="company">
//               Company
//             </label>
//             <select id="company" className="w-full px-3 py-2 border rounded-md focus:outline-none">
//               <option value="all">All</option>
//               {/* Add more company options as needed */}
//             </select>
//           </div>
//           <div className="space-y-1">
//             <label className="font-medium text-gray-700" htmlFor="division">
//               Division
//             </label>
//             <select id="division" className="w-full px-3 py-2 border rounded-md focus:outline-none">
//               <option value="all">All</option>
//               {/* Add more division options as needed */}
//             </select>
//           </div>
//           <div className="space-y-1">
//             <label className="font-medium text-gray-700" htmlFor="type">
//               Type
//             </label>
//             <select id="type" className="w-full px-3 py-2 border rounded-md focus:outline-none">
//               <option value="all">All</option>
//               {/* Add more type options as needed */}
//             </select>
//           </div>
//           <div className="space-y-1">
//             <label className="font-medium text-gray-700" htmlFor="status">
//               Request Status
//             </label>
//             <select id="status" className="w-full px-3 py-2 border rounded-md focus:outline-none">
//               <option value="all">All</option>
//               {/* Add more status options as needed */}
//             </select>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusinessCase;

import React from "react";

const BusinessCase = () => {
  return (
    <div className="business-case bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-blue-700 mb-4">Business Case</h1>

      {/* Buttons Section */}
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

      {/* Filters Section */}
      <div className="bg-gray-50 p-4 rounded-md border mb-6">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-1">
            <label className="font-medium text-gray-700" htmlFor="company">
              Company
            </label>
            <select id="company" className="w-full px-3 py-2 border rounded-md focus:outline-none">
              <option value="all">All</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="font-medium text-gray-700" htmlFor="division">
              Division
            </label>
            <select id="division" className="w-full px-3 py-2 border rounded-md focus:outline-none">
              <option value="all">All</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="font-medium text-gray-700" htmlFor="type">
              Type
            </label>
            <select id="type" className="w-full px-3 py-2 border rounded-md focus:outline-none">
              <option value="all">All</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="font-medium text-gray-700" htmlFor="status">
              Request Status
            </label>
            <select id="status" className="w-full px-3 py-2 border rounded-md focus:outline-none">
              <option value="all">All</option>
            </select>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <form className="bg-gray-50 p-6 rounded-md border">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">Business Case Form</h2>

        {/* Problem Statement */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="problemStatement">
            Problem Statement
          </label>
          <textarea
            id="problemStatement"
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
            rows="3"
          ></textarea>
        </div>

        {/* Expected Benefit */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="expectedBenefit">
            Expected Benefit
          </label>
          <textarea
            id="expectedBenefit"
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
            rows="2"
          ></textarea>
        </div>

        {/* Proposal Costs */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="proposalCosts">
            Proposal Costs (Budget)
          </label>
          <input
            id="proposalCosts"
            type="number"
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>

        {/* Duration */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="duration">
            Duration
          </label>
          <input
            id="duration"
            type="text"
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>

        {/* ROI */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="roi">
            ROI
          </label>
          <input
            id="roi"
            type="text"
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>

        {/* Proposed 'Go Live' Date */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="goLiveDate">
            Proposed 'Go Live' Date
          </label>
          <input
            id="goLiveDate"
            type="date"
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>

        {/* Submit and Cancel Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md"
          >
            Submit
          </button>
          <button
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-6 rounded-md"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BusinessCase;
