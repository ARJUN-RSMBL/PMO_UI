import React from "react";
import QuickLinks from "./QuickLinks";
import WorkflowTasks from "./WorkflowTasks";

const Home = () => {
  return <div>
    <main className="flex-1 space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold text-[#002337]">
          Welcome to Enterprise Project Management, System Account
        </h1>
      </div>
      <QuickLinks />
      <WorkflowTasks />
    </main>
    </div>;
};

export default Home;
