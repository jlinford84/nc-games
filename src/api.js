import ErrorPage from "./components/ErrorPage";

export const fetchReviews = (searchTerm) => {
  return fetch(`https://nc-super-awesome-games.herokuapp.com/api/${searchTerm}`)
  .then((res) => res.json());
};

export const fetchCategory = (category_name) => {
  return fetch(
    `https://nc-super-awesome-games.herokuapp.com/api/reviews?category=${category_name}`
  ).then(ErrorPage)
  .then(res => res.json())
};

export const fetchIndividualReview = (review_id) => {
  return fetch(
    `https://nc-super-awesome-games.herokuapp.com/api/reviews/${review_id}`
  ).then(ErrorPage)
  .then(res => res.json())
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
  ).then((res) => res.json());
};

export const fetchComments = (review_id) => {
  return fetch(
    `https://nc-super-awesome-games.herokuapp.com/api/reviews/${review_id}/comments`
  ).then((res) => res.json());
};

export const postComments = (commentToPost, review_id) => {
  return fetch(
    `https://nc-super-awesome-games.herokuapp.com/api/reviews/${review_id}/comments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: commentToPost.username,
        body: commentToPost.body,
      }),
    }
  ).then((res) => {
    return res.json();
  });
};

export const  removeComment = (comment_id) => {
  fetch(`https://nc-super-awesome-games.herokuapp.com/api/comments/${comment_id}`, {
  method: 'DELETE'
})
  .then(res => res.json())
  .catch(err => console.log(err));
}
