export const fetchReviews = () => {
  return fetch("https://nc-super-awesome-games.herokuapp.com/api/reviews").then(
    (res) => res.json()
  );
};

export const fetchCategory = (category_name) => {
  return fetch(
    `https://nc-super-awesome-games.herokuapp.com/api/reviews?category=${category_name}`
  ).then((res) => res.json());
};

export const fetchIndividualReview = (review_id) => {
  return fetch(
    `https://nc-super-awesome-games.herokuapp.com/api/reviews/${review_id}`
  ).then((res) => res.json());
};

export const patchReviewVotes = (updatedVotes, review_id) => {
  return fetch(
    `https://nc-super-awesome-games.herokuapp.com/api/reviews/${review_id}`,
    {
      method: "PATCH",
      body: JSON.stringify({
        inc_votes: updatedVotes,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  ).then((response) => response.json());
};

export const fetchComments = (review_id) => {
  return fetch(
    `https://nc-super-awesome-games.herokuapp.com/api/reviews/${review_id}/comments`
  ).then((res) => res.json());
};