import { useEffect, useState } from "react";
import { fetchReviews } from "../api";
import { Link } from "react-router-dom";

function Main() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchReviews().then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p className="loading">Loading...</p>;
  return (
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
  );
}

export default Main;
