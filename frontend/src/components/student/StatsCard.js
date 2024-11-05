import React from "react";

const StatsCard = ({ title, value }) => {
  return (
    <div className="flex flex-row p-4 bg-white shadow rounded-lg items-center">
      <h3 className="text-sm font-semibold text-gray-500">{title}</h3>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  );
};

export default StatsCard;
