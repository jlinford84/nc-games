import { patchReviewVotes } from "../api";

function VoteUpdater({ setVoteCount, id, votes }) {
  return (
    <>
      <button
        id="upBtn"
        onClick={() => {
          patchReviewVotes(votes + 1, id);
          document.getElementById("upBtn").disabled = true;
          document.getElementById("dwnBtn").disabled = false;
          setVoteCount((currentVotes) => {
            return currentVotes + 1;
          });
        }}
      >
        Upvote
      </button>

      <button
        id="dwnBtn"
        onClick={() => {
          patchReviewVotes(votes - 1, id);
          document.getElementById("dwnBtn").disabled = true;
          document.getElementById("upBtn").disabled = false;
          setVoteCount((currentVotes) => {
            return currentVotes - 1;
          });
        }}
      >
        Downvote
      </button>
    </>
  );
}

export default VoteUpdater;
