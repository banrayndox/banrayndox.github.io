import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import ArticleDetailPage from './pages/ArticleDetailPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-gray-900 flex flex-col selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        
        <main className="flex-1 max-w-[980px] w-full mx-auto px-4 sm:px-6 md:px-8 py-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles/:slug" element={<ArticleDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <div className="max-w-[980px] w-full mx-auto px-4 sm:px-6 md:px-8">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
