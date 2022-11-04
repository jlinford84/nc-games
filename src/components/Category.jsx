import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCategory } from "../api";
import { Link } from "react-router-dom";

function Category() {
  const { category_name } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchCategory(category_name).then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    })
    .catch((err) => {
      setError({ err })
    });
  }, [category_name]);

  if (error) {
    return <>
            <h2>Requested Category Does Not Exist!!</h2>
            <Link className="nav-link" to="/">
            Back to home
            </Link>
          </>
    
  }

  if (isLoading) return <p className="loading">Loading...</p>;
  return (
    <section className="reviews">
      <ul>
        {reviews.map(({ review_id, title, owner, created_at, votes, review_img_url, comment_count }) => {
          return (
            <li key={review_id}>
              <Link className="rev-link" to={`/reviews/${review_id}`}>
                <img className="img" alt={`${title}`} src={review_img_url} />
                <h2>Name: {title}</h2>
              </Link>
              <p>Author: {owner}</p>
                <p>Created at: {Date(created_at)}</p>
                <p>Comments: {comment_count}</p>
                <p>Votes: {votes}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Category;
