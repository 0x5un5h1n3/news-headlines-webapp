import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NewsList = () => {
    const [articles, setArticles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
            setArticles(response.data.articles);
        };
        fetchArticles();
    }, []);

    const handleCardClick = (url) => {
        navigate(`/article?url=${encodeURIComponent(url)}`);
    };

    return (
        <Grid container spacing={2} sx={{ padding: 2 }}>
            {articles.map((article, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <NewsCard article={article} onClick={() => handleCardClick(article.url)} />
                </Grid>
            ))}
        </Grid>
    );
};

export default NewsList;
