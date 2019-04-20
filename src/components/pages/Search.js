import React from "react";

function Search() {
  return (
    <div>
      <h1 className="text-center mb-3">Search By Breed!</h1>
      <input
        type="text"
        name="search"
        placeholder="Type in a dog breed to begin"
        className="w-100"
      />
      <button className="btn btn-success float-right mt-1">Search</button>
    </div>
  );
}

export default Search;
