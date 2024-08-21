"use client";

import React from 'react';

const NewsCard = ({ article, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="bg-white dark:bg-gray-800 dark:text-white rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform transform hover:scale-105"
        >
            {article.urlToImage ? (
                <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />
            ) : (
                <div className="w-full h-48 bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-300">Image not available</span>
                </div>
            )}
            <div className="p-4">
                <h2 className="font-bold text-lg">{article.title}</h2>
                <p className="text-gray-600 dark:text-gray-400">{article.source.name}</p>
                <p className="text-gray-800 dark:text-gray-300">{article.description}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{new Date(article.publishedAt).toLocaleString()}</p>
            </div>
        </div>
    );
};

export default NewsCard;
