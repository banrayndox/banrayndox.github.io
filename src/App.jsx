import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import ArticleDetailPage from './pages/ArticleDetailPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

/**
 * 100% Full Static Personal Engineer's Wiki
 * Uses HashRouter for universal zero-configuration static hosting (GitHub Pages, Netlify, Vercel, file://).
 */
export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-white text-[#202122] flex flex-col font-sans selection:bg-[#c8ccd1] selection:text-black">
        <Navbar />
        
        <main className="flex-1 max-w-[1020px] w-full mx-auto px-4 sm:px-6 py-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles/:slug" element={<ArticleDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <div className="max-w-[1020px] w-full mx-auto px-4 sm:px-6">
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}
