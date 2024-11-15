// src/components/WorkflowTasks.js
import React from "react";
// import "./WorkflowTasks.css";

export default function WorkflowTasks() {
  return (
    <div className="card p-6 border rounded shadow-md">
      <h2 className="text-xl font-semibold text-blue-600 mb-6">Workflow Tasks</h2>
      <div className="space-y-6">
        <div className="border-b pb-4">
          <h3 className="text-lg font-medium mb-4">Filters</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="task-name">
                Task Name
              </label>
              <input
                id="task-name"
                className="border rounded p-2 w-full"
                placeholder="Search by task name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="status">
                Status
              </label>
              <select id="status" className="border rounded p-2 w-full">
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>
        </div>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Task Name</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Created</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Project Planning Phase</td>
              <td className="border p-2">In Progress</td>
              <td className="border p-2">2024-02-15</td>
            </tr>
            <tr>
              <td className="border p-2">Resource Allocation</td>
              <td className="border p-2">Pending</td>
              <td className="border p-2">2024-02-14</td>
            </tr>
            <tr>
              <td className="border p-2">Budget Review</td>
              <td className="border p-2">Completed</td>
              <td className="border p-2">2024-02-13</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
