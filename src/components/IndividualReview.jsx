import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { fetchIndividualReview } from "../api";

function IndividualReview() {
  const { id } = useParams();
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchIndividualReview(id).then(({ review }) => {
      setReview(review);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) return <p className="loading">Loading...</p>;

  return (
    <section className="reviews">
      <img className="img" alt={`${review.title}`} src={review.review_img_url} />
      <h2>Title: {review.title}</h2>
      <p>Category: {review.category}</p>
      <p>Designer: {review.designer}</p>
      <p>Owner: {review.owner}</p>
      <p>Review: {review.review_body}</p>
      <p>Votes: {review.votes}</p>
    </section>
  );
}

export default IndividualReview;
