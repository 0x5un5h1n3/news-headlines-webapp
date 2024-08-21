import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';
import { useRouter } from 'next/router';

const NewsList = () => {
    const [articles, setArticles] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`);
            setArticles(response.data.articles);
        };
        fetchArticles();
    }, []);

    const handleCardClick = (url) => {
        router.push(`/article?url=${encodeURIComponent(url)}`);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {articles.map((article, index) => (
                <NewsCard key={index} article={article} onClick={() => handleCardClick(article.url)} />
            ))}
        </div>
    );
};

export default NewsList;
