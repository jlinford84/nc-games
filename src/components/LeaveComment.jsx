import { postComments } from "../api";
import { useParams } from "react-router-dom";

function LeaveComment({ setComments }) {
  const { id } = useParams();
  const commentToPost = {username: 'weegembump'};

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
        Username: { commentToPost.username }
      </label>
      <br/>
      <textarea
        id="comment"
        className="comment"
        placeholder={`${commentToPost.username} leave your comment here...`}
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
