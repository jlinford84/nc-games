import { removeComment } from "../api";

const user = "weegembump";

function DeleteComments({ comment_id, setComments, author }) {
  if (user === author) {
    return (
      <button
        id="delete_btn"
        onClick={() => {
          removeComment(comment_id);
          setComments((currentComments) => {
            function checkComment(comment) {
              return comment.comment_id !== comment_id;
            }
            return currentComments.filter(checkComment);
          });
        }}
      >
        Remove your Comment
      </button>
    );
  }
}

export default DeleteComments;
