import React, {useEffect, useState} from 'react';
import {Review} from "../../models/map/Review.ts";
import {User} from "../../models/map/User.ts";
import {users} from "../../mocks/users.ts";
import {Avatar, Rating} from "@mui/material";
import '../../styles/Review.css';

interface ReviewProps {
    review: Review;
}

export const ReviewCard: React.FC<ReviewProps> = ({ review }) => {
    const [author, setAuthor] = useState<User>();

    useEffect(() => {
        setAuthor(users.find(user => user.id === review.authorId)!)
    }, [])

    return (
        <div className="review__item">
            <div className="review__head">
                <Avatar alt={author?.name} src={author?.photoUrl} sx={{ width: 56, height: 56 }}/>
                <div className="review__head--right">
                    <h3 className="review__name">
                        {author?.name}
                    </h3>
                    <p className="review__post">Участник мероприятия</p>
                </div>
            </div>
            <div className="review__rating">
                <Rating name="half-rating-read" defaultValue={review?.rating} precision={0.5} readOnly />
            </div>
            <div className="review__text">
                <p>{review?.text}</p>
            </div>
        </div>
    );
};