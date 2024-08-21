import React from 'react';

const NewsCard = ({ article, onClick }) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-lg cursor-pointer" onClick={onClick}>
            <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="font-bold">{article.title}</h2>
                <p className="text-gray-600">{article.source.name}</p>
                <p className="text-gray-800">{article.description}</p>
                <p className="text-gray-500 text-sm">{new Date(article.publishedAt).toLocaleString()}</p>
            </div>
        </div>
    );
};

export default NewsCard;
