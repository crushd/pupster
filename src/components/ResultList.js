import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.id}>
          <img className="img-fluid" src={result} />
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
