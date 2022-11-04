import { removeComment } from "../api";

const user = "weegembump";

function DeleteComments({ comment_id, setComments, author }) {
  if (user === author) {
    return (
      <button
        id="delete_btn"
        onClick={() => {
          removeComment(comment_id);
          document.getElementById("delete_btn").disabled = true;
          setComments((currentComments) => {
            function checkComment(comment) {
              return comment.comment_id !== comment_id;
            }
            return currentComments.filter(checkComment);
          });
        }}
      >
        Remove Comment
      </button>
    );
  }
}

export default DeleteComments;
