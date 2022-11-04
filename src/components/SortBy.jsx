import { useState } from "react";

function SortBy({ setSearchTerm }) {
  const terms = [
    { value: "reviews?sort_by=created_at", text: "Date, Descending" },
    { value: "reviews?sort_by=created_at&&order=ASC", text: "Date, Ascending" },
    {
      value: "reviews?sort_by=comment_count",
      text: "Comment count, Descending",
    },
    {
      value: "reviews?sort_by=comment_count&&order=ASC",
      text: "Comment count, Ascending",
    },
    { value: "reviews?sort_by=votes", text: "Votes, Descending" },
    { value: "reviews?sort_by=votes&&order=ASC", text: "Votes, Ascending" },
  ];
  const [reviews, setReviews] = useState(terms[0].value);
  const handleChange = (event) => {
    setReviews(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(reviews);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="search">Sort By:</label>
        <select value={reviews} onChange={handleChange}>
          {terms.map((term) => (
            <option key={term.value} value={term.value}>
              {term.text}
            </option>
          ))}
        </select>
        <button type="submit">Search</button>
      </fieldset>
    </form>
  );
}

export default SortBy;
