import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCategory } from "../api";

function Category() {
    const { category_name } = useParams()
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
              <img className="img" src={review_img_url} alt='Game'/>
              <br />
              <br />
              Name: {title}
              <br />
              <br />
              Review: {review_body}
              <br />
              <br />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Category;
