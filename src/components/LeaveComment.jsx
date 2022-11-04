import { postComments } from "../api";
import { useParams } from "react-router-dom";

function LeaveComment({ setComments }) {
  const { id } = useParams();
  const commentToPost = {};

  function handleSubmit(event) {
    event.preventDefault();
    postComments(commentToPost, id).then((res) => {
      setComments((currentComments) => {
        return [...currentComments, res.comment];
      });
    });
    document.getElementById('comment').value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username" placeholder="Enter username">
        Username:
      </label>
      <input type="text" id="username" required/>
      <br />
      <label htmlFor="username">Comment:</label>
      <textarea
        id="comment"
        className="comment"
        placeholder="Leave your comment here..."
        required
      ></textarea>
      <br />
      <button
        type="submit"
        id="post_btn"
        onClick={() => {
          commentToPost.username = document.getElementById("username").value;
          commentToPost.body = document.getElementById("comment").value;
        }}
      >
        Post
      </button>
    </form>
  );
}

export default LeaveComment;
