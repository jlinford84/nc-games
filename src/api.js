export const fetchReviews = () => {
    return fetch('https://nc-super-awesome-games.herokuapp.com/api/reviews').then((res) => 
        res.json()
    );
};