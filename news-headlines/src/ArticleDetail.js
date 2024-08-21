import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const ArticleDetail = () => {
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const url = query.get('url');

    return (
        <Box sx={{ padding: 2, height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Article Detail
            </Typography>
            <iframe
                src={url}
                style={{ width: '100%', height: '80vh', border: 'none' }}
                title="Article"
                frameBorder="0"
                allowFullScreen
            />
        </Box>
    );
};

export default ArticleDetail;
