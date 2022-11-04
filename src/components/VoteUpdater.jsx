import { patchReviewVotes } from "../api";

function VoteUpdater({ setVoteCount, id }) {

let count = 0

  return (
    <>
      <button
        id="upBtn"
        onClick={() => {
          patchReviewVotes(1, id);
          setVoteCount((currentVotes) => {
              return currentVotes + 1
          });
        }}
      >
        Upvote
      </button>

      <button
        id="dwnBtn"
        onClick={() => {
          patchReviewVotes(-1, id);
          setVoteCount((currentVotes) => {
              return currentVotes - 1
          });
        }}
      >
        Downvote
      </button>
    </>
  );
}

export default VoteUpdater;
