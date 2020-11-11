import react from "react";
import "./Filter.css";

function Filter({ settextSearch }) {
  return (
    <div class="flexbox">
      <input
        onChange={(e) => settextSearch(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
}

export default Filter;
