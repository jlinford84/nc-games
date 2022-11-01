

export const fetchReviews = () => {
    return fetch('https://nc-super-awesome-games.herokuapp.com/api/reviews').then((res) => 
        res.json()
    );
};

export const fetchCategory = (category_name) => {
    return fetch(`https://nc-super-awesome-games.herokuapp.com/api/reviews?category=${category_name}`).then((res) => 
    res.json()
);
}