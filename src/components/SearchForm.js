import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a Dog"
          id="search"
        />
        <button
          onClick={props.handleFormSubmit}
          className="btn btn-success mt-3 float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
