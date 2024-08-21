import React from 'react';
import { useLocation } from 'react-router-dom';

const ArticleDetail = () => {
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const url = query.get('url');

    return (
        <div>
            <h1>Article Detail</h1>
            <iframe src={url} style={{ width: '100%', height: '80vh' }} title="Article" />
        </div>
    );
};

export default ArticleDetail;
