import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCategory } from "../api";
import { Link } from "react-router-dom";

function Category() {
  const { category_name } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchCategory(category_name).then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [category_name]);

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

export default Category;
