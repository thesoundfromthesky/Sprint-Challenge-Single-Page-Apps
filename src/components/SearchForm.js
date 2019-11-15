import React, { useState } from "react";

export default function SearchForm({ term, setTerm }) {
  // const [term, setTerm] = useState("");

  const handleChange = e => {
    console.log(e.target.value);
    setTerm(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(term);
    setTerm("");
  };
  return (
    <section className="search-form">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="search">Search: </label>
        <input
          id="search"
          type="search"
          name="term"
          value={term}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </section>
  );
}
