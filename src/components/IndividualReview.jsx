import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import VoteUpdater from "./VoteUpdater";
import { fetchIndividualReview } from "../api";
import ReviewComments from "./ReviewComments";

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
      <div className="expand_box">
        <input type="checkbox" id="trigger" />
        <label id="dropdown" htmlFor="trigger">
          Click to View or Post a Comment: {review.comment_count}
        </label>
        <div>
          <ReviewComments />
        </div>
      </div>
    </section>
  );
}

export default IndividualReview;
