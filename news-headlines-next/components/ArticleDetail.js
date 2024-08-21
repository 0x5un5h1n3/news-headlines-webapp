import React from 'react';
import { useRouter } from 'next/router';

const ArticleDetail = () => {
    const router = useRouter();
    const { url } = router.query;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Article Detail</h1>
            {url && <iframe src={url} style={{ width: '100%', height: '80vh' }} title="Article" />}
        </div>
    );
};

export default ArticleDetail;
