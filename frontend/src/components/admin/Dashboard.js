import React from "react";
import StatsCard from "./StatsCard.js";

const Dashboard = () => {
  return (
    <div>
        <h3 className="m-4">Admin Dashboard</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatsCard title="Total Students" value="1,200" />
        <StatsCard title="Total Job Posts" value="340" />
        <StatsCard title="Total Companies" value="45" />
        <StatsCard title="Placement Rate" value="78%" />
      </div>
      {/* Additional components like tables or charts would go here */}
    </div>
  );
};

export default Dashboard;
