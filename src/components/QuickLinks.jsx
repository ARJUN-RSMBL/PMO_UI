// // src/components/QuickLinks.js
// import React from "react";
// // import "./QuickLinks.css";

// export default function QuickLinks() {
//   return (
//     <div>
//       <h2 className="text-xl font-semibold text-blue-600 mb-4">Quick links</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
//         <button className="h-24 text-lg bg-blue-600 hover:bg-blue-700 text-white">
//           Business Case
//         </button>
//         <button className="h-24 text-lg bg-gray-400 hover:bg-gray-500 text-white">
//           Project Center
//         </button>
//         <button className="h-24 text-lg bg-[#002337] hover:bg-[#003355] text-white">
//           Reports
//         </button>
//         <button className="h-24 text-lg bg-gray-400 hover:bg-gray-500 text-white">
//           PMO Library
//         </button>
//         <button className="h-24 text-lg bg-blue-600 hover:bg-blue-700 text-white">
//           Performance Management
//         </button>
//       </div>
//     </div>
//   );
// }

// src/components/QuickLinks.js
import React from "react";
import { Link } from "react-router-dom";

export default function QuickLinks() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-blue-600 mb-4">Quick links</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <Link
          to="/business-case"
          className="h-24 flex items-center justify-center text-lg bg-blue-600 hover:bg-blue-700 text-white"
        >
          Business Case
        </Link>
        <Link
          to="/projects"
          className="h-24 flex items-center justify-center text-lg bg-gray-400 hover:bg-gray-500 text-white"
        >
          Project Center
        </Link>
        <Link
          to="/reports"
          className="h-24 flex items-center justify-center text-lg bg-[#002337] hover:bg-[#003355] text-white"
        >
          Reports
        </Link>
        <Link
          to="/pmo-library"
          className="h-24 flex items-center justify-center text-lg bg-gray-400 hover:bg-gray-500 text-white"
        >
          PMO Library
        </Link>
        <Link
          to="/performance-management"
          className="h-24 flex items-center justify-center text-lg bg-blue-600 hover:bg-blue-700 text-white"
        >
          Performance Management
        </Link>
      </div>
    </div>
  );
}

