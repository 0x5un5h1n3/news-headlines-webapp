import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import NewsList from './NewsList';
import ArticleDetail from './ArticleDetail';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<NewsList />} />
        <Route path="/article" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
