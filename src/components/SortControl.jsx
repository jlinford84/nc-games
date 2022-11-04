import { useState } from "react";
import Main from "./Main";

export default function SortControl({ searchTerm, setSearchTerm }) {
  const [reviews, setReviews] = useState([]);
  return (
    <div>
      <section>
        <Main
          reviews={reviews}
          setReviews={setReviews}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
        />
      </section>
    </div>
  );
}
