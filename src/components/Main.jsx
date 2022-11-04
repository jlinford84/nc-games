import { useEffect, useState } from "react";
import { fetchReviews } from "../api";
import { Link } from "react-router-dom";


function Main({ reviews, setReviews, searchTerm }) {
  const [isLoading, setIsLoading] = useState(true);
  console.log(searchTerm);
  useEffect(() => {
    setIsLoading(true);
    fetchReviews(searchTerm).then((reviews) => {
      setReviews(reviews);
      console.log(reviews)
      setIsLoading(false);
    });
  }, [searchTerm]);

  if (isLoading) return <p className="loading">Loading...</p>;
  return (
    <>
      <section className="reviews">
        <ul>
          {reviews.map(({ review_id, title, review_body, review_img_url }) => {
            return (
              <li key={review_id}>
                <Link className="rev-link" to={`/reviews/${review_id}`}>
                  <img className="img" alt={`${title}`} src={review_img_url} />
                  <h2>Name: {title}</h2>
                </Link>
                <p>Review: {review_body}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default Main;
