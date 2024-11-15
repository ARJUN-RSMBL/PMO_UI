import React from "react";

const BenefitRegister = () => {
  const projectDetails = {
    projectName: "Portal Templatization",
    projectNumber: "23432",
    approvedWithPlanning: "Yes",
    requestStatus: "Not Started",
    approvalStatus: "Not Started",
    pendingWith: "Project Manager",
  };

  const benefitDetails = {
    benefitName: "Portal Benefit",
    benefitReferenceNo: "23432-52662",
    benefitDescription: "Organizational Efficiency Improvement",
    // Add more fields as necessary
  };

  return (
    <div className="benefit-register bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Benefits Register</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Send for Approval
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-100 p-4 rounded-md mb-6">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">Project Name</span>
            <span>{projectDetails.projectName}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Approved with Planning Document</span>
            <span>{projectDetails.approvedWithPlanning}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Approval Status</span>
            <span>{projectDetails.approvalStatus}</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">Project Number</span>
            <span>{projectDetails.projectNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Request Status</span>
            <span>{projectDetails.requestStatus}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Pending With</span>
            <span>{projectDetails.pendingWith}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Select Benefit</h3>
          <div className="flex items-center justify-between mb-4">
            <span>{benefitDetails.benefitName}</span>
            <div className="flex items-center space-x-2">
              <button className="bg-gray-300 p-2 rounded hover:bg-gray-400">
                <i className="fas fa-pen"></i> {/* Icon for edit */}
              </button>
              <button className="bg-red-300 p-2 rounded hover:bg-red-400">
                <i className="fas fa-trash"></i> {/* Icon for delete */}
              </button>
            </div>
          </div>
          <button className="text-blue-600 font-semibold hover:underline">
            + Add New Benefit
          </button>
        </div>

        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Benefit Details</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Benefit Name</span>
              <span>{benefitDetails.benefitName}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Benefit Reference No</span>
              <span>{benefitDetails.benefitReferenceNo}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Benefit Description</span>
              <span>{benefitDetails.benefitDescription}</span>
            </div>
            {/* Add more benefit details as necessary */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitRegister;
