import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import VoteUpdater from "./VoteUpdater";
import { fetchIndividualReview } from "../api";

function IndividualReview() {
  const { id } = useParams();
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [voteCount, setVoteCount] = useState(0);

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
      <img
        className="img"
        alt={`${review.title}`}
        src={review.review_img_url}
      />
      <h2>Title: {review.title}</h2>
      <p>Category: {review.category}</p>
      <p>Designer: {review.designer}</p>
      <p>Owner: {review.owner}</p>
      <p>Review: {review.review_body}</p>
      <p>
        Votes: {review.votes + voteCount}
        {
          <VoteUpdater
            setVoteCount={setVoteCount}
            id={id}
            votes={review.votes}
          />
        }
      </p>
    </section>
  );
}

export default IndividualReview;
