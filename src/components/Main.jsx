
// import Link from 'react-router-dom '

import { useEffect, useState } from "react"
import { fetchReviews } from "../api";



function Main() {
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true);
        fetchReviews().then(( reviews ) => {
            setReviews(reviews);
            setIsLoading(false)
        });
    }, []);

if (isLoading) return <p className="loading">Loading...</p>
    return (
        <section className="reviews">
            <ul>
            {reviews.map(
                ({
                    review_id,
                    title,
                    // category,
                    // designer,
                    // owner,
                    review_body,
                    review_img_url,
                    // votes,
                    // comment_count
                }) => {
                    return (
                        <li key={review_id}>
                            <img class='img' src={review_img_url}/>
                            <br/>
                            <br/>
                            Name: {title}
                            <br/>
                            <br/>
                            Review: {review_body}
                            <br/>
                            <br/>
                        </li>
                    )
                }
            )}
            </ul>
        </section>
        
    )
}

export default Main