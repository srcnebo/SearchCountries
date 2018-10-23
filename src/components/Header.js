import React from "react";

const Header = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      <h2>{props.count}</h2>
      <input
        type="radio"
        name="searchType"
        defaultChecked="checked"
        className="radio"
        id="startWith"
        onClick={() => props.handleSelection(true)}
      />
      <label htmlFor="startWith">Start</label>
      <input
        type="radio"
        name="searchType"
        className="radio"
        id="include"
        onClick={() => props.handleSelection(false)}
      />
      <label htmlFor="include">Include</label>
      <br />
      <input
        type="text"
        name="searchBar"
        onChange={props.handleChange}
        value={props.value}
      />
    </header>
  );
};

export default Header;
