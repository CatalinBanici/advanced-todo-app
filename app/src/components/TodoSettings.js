import React from "react";

export default function TodoSettings() {
  return (
    <aside>
      <p>5 items left</p>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <button>Clear Completed</button>
    </aside>
  );
}
