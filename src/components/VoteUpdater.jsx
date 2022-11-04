import { patchReviewVotes } from "../api";

function VoteUpdater({ setVoteCount, id }) {

 let voted = true

  return (
    <>
      <button
        id="upBtn"
        onClick={() => {
          patchReviewVotes(1, id);
          document.getElementById("upBtn").disabled = true;
          document.getElementById("dwnBtn").disabled = false;
          setVoteCount((currentVotes) => {
            if (voted === true) {
              voted = true;
              return currentVotes + 2 
            } else {
              voted = true
              return currentVotes + 1
            }
            
          });
        }}
      >
        Upvote
      </button>

      <button
        id="dwnBtn"
        onClick={() => {
          patchReviewVotes(-1, id);
          document.getElementById("dwnBtn").disabled = true;
          document.getElementById("upBtn").disabled = false;
          setVoteCount((currentVotes) => {
            if (voted === true) {
              voted = true;
              return currentVotes - 2 
            } else {
              voted = true
              return currentVotes - 1
            }
            
          });
        }}
      >
        Downvote
      </button>
    </>
  );
}

export default VoteUpdater;
