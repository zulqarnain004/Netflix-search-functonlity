import React from "react";
import "./SearchResult.css";
export const SearchResult = ({ result }) => {
  return (
    <div
      className="search-result"
      onClick={(e) => alert(`Yoy Clicked On ${result.name}`)}
    >
      {result.name}
    </div>
  );
};
