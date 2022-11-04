import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchComments } from "../api";
import LeaveComment from "./LeaveComment";

function ReviewComments() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchComments(id).then(({ comment }) => {
      setComments(comment);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) return <p className="loading">Loading...</p>;
  return (
    <section className="comments">
      <ol>
        {comments.map(({ comment_id, author, created_at, body, votes }) => {
          return (
            <li key={comment_id}>
              <h2>Comment by: {author}</h2>
              <p>Created on: {Date(created_at)}</p>
              <p>Comment: {body}</p>
              <p>Votes: {votes}</p>
            </li>
          );
        })}
      </ol>
      <LeaveComment setComments={setComments} />
    </section>
  );
}

export default ReviewComments;
