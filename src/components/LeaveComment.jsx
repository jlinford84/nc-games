import { postComments } from "../api";
import { useParams } from "react-router-dom";

function LeaveComment({ setComments, owner }) {
  const { id } = useParams();
  const commentToPost = { username: "weegembump" };

  function handleSubmit(event) {
    event.preventDefault();
    postComments(commentToPost, id).then((res) => {
      setComments((currentComments) => {
        return [...currentComments, res.comment];
      });
    });
    document.getElementById("comment").value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username" placeholder="Enter username">
        Logged in as: {commentToPost.username}
      </label>
      <br />
      <textarea
        id="comment"
        className="comment"
        rows="5"
        cols="45"
        placeholder={`Hi ${commentToPost.username},
feel free to leave a comment on this review...`}
        required
      ></textarea>
      <br />
      <button
        type="submit"
        id="post_btn"
        onClick={() => {
          commentToPost.body = document.getElementById("comment").value;
        }}
      >
        Post
      </button>
    </form>
  );
}

export default LeaveComment;
