import React, {useEffect, useState} from 'react';
import {Place} from "../../models/map/Place.ts";
import {Box, Button, Dialog, DialogActions, DialogContent, Rating, TextField, Typography} from '@mui/material';
import {Review} from "../../models/map/Review.ts";
import {reviews} from "../../mocks/reviews.ts";
import {ReviewCard} from "./ReviewCard.tsx";

interface PlaceDialogProps {
    open: boolean;
    onClose: () => void;
    place: Place | null;
}

export const PlaceDialog: React.FC<PlaceDialogProps> = ({ open, onClose, place }) => {
    const [currentReviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        setReviews(reviews.filter((review) => review.placeId === place?.id));
    }, [place?.id])


    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth PaperProps={{ sx: { borderRadius: 8 } }}>
            <DialogContent>
                {place?.imageUrl && (
                    <Box mb={2}>
                        <img
                            src={place.imageUrl}
                            alt={place?.name}
                            style={{ width: '100%', borderRadius: 8 }}
                        />
                    </Box>
                )}
                <Rating name="half-rating-read" defaultValue={place?.rating || 0} precision={0.5} readOnly />

                <Typography variant="h5" component="h2" gutterBottom  sx={{ fontWeight: 600 }}>
                    {place?.name}
                </Typography>

                <Typography paragraph>
                    {place?.description}
                </Typography>


                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <Typography variant="h6" component="h3" gutterBottom  sx={{ fontWeight: 600 }}>
                        Отзывы
                    </Typography>

                    <Box>
                        <TextField
                            id="outlined-multiline-static"
                            label="Оцените и напишите отзыв"
                            multiline
                            rows={4}
                            style={{ width: '100%' }}
                            placeholder="Комментарий"
                        />
                    </Box>

                    <Box className="reviews" sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        {currentReviews.map((review) => (
                            <ReviewCard review={review} key={review.id} />
                        ))}
                    </Box>
                </Box>
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>Закрыть</Button>
            </DialogActions>
        </Dialog>
    );
};