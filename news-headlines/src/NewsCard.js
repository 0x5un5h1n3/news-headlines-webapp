import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

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
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            <CardMedia
                component="img"
                height={180}
                image={article.urlToImage || 'https://via.placeholder.com/180'}
                alt={article.title}
                sx={{ objectFit: 'cover', borderRadius: '10px 10px 0 0' }}
            />
            <CardContent sx={{ padding: 2, flex: 1 }}>
                <Typography variant="h6" gutterBottom>
                    {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {article.source.name}
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
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
