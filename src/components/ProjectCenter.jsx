import React from "react";

const ProjectCenter = () => {
  const projects = [
    {
      id: 716,
      name: "7th Floor Upgrade of Equipment and Design",
      start: "2/17/2020",
      finish: "4/29/2020",
      complete: "0%",
      work: "0h",
      duration: "53d",
      owner: "spepmadminuat"
    },
    {
      id: 709,
      name: "Abeers test",
      start: "2/17/2020",
      finish: "4/29/2020",
      complete: "0%",
      work: "0h",
      duration: "53d",
      owner: "Abeer N. Al Shatti"
    },
    // Add more project objects as needed
  ];

  return (
    <div className="project-center bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Project Center</h1>
      <div className="overflow-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="px-4 py-2 text-left font-semibold">Project ID</th>
              <th className="px-4 py-2 text-left font-semibold">Project Name</th>
              <th className="px-4 py-2 text-left font-semibold">% Complete</th>
              <th className="px-4 py-2 text-left font-semibold">Start</th>
              <th className="px-4 py-2 text-left font-semibold">Finish</th>
              <th className="px-4 py-2 text-left font-semibold">Work</th>
              <th className="px-4 py-2 text-left font-semibold">Duration</th>
              <th className="px-4 py-2 text-left font-semibold">Owner</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{project.id}</td>
                <td className="px-4 py-2 text-blue-600">{project.name}</td>
                <td className="px-4 py-2">{project.complete}</td>
                <td className="px-4 py-2">{project.start}</td>
                <td className="px-4 py-2">{project.finish}</td>
                <td className="px-4 py-2">{project.work}</td>
                <td className="px-4 py-2">{project.duration}</td>
                <td className="px-4 py-2">{project.owner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectCenter;
