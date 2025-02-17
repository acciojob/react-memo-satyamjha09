import React, { useMemo } from "react";

function UseMemoComponent({ taskCount }) {
  // Expensive calculation simulation
  const calculatedValue = useMemo(() => {
    console.log("Expensive calculation running...");
    return taskCount * 10;
  }, [taskCount]);

  return (
    <div>
      <h2>Task Count Multiplied by 10: {calculatedValue}</h2>
    </div>
  );
}

export default UseMemoComponent;
