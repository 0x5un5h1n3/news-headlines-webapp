"use client";

import React from 'react';
import { useSearchParams } from 'next/navigation';

const ArticleDetail = () => {
    const searchParams = useSearchParams();
    const url = searchParams.get('url');

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Article Detail</h1>
            {url && (
                <iframe src={url} style={{ width: '100%', height: '80vh' }} title="Article" className="border border-gray-300 rounded"></iframe>
            )}
        </div>
    );
};

export default ArticleDetail;
