import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const NewsCard = ({ article, onClick }) => {
    return (
        <Card
            onClick={onClick}
            sx={{
                margin: 2,
                cursor: 'pointer',
                '&:hover': {
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                },
            }}
        >
            <CardMedia
                component="img"
                height={140}
                image={article.urlToImage || 'https://via.placeholder.com/140'}
                alt={article.title}
                sx={{ objectFit: 'cover' }}
            />

            <CardContent>
                <Typography variant="h5" gutterBottom>
                    {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {article.source.name}
                </Typography>
                <Typography variant="body1" color="text.primary">
                    {article.description}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    {new Date(article.publishedAt).toLocaleString()}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default NewsCard;
