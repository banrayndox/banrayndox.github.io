import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './utils/themeContext.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import ArticleDetailPage from './pages/ArticleDetailPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

/**
 * 100% Static-Ready Personal Engineer's Wiki
 * Uses BrowserRouter for clean in-page hash anchors (#academic, #projects, #contact)
 * and seamless smooth-scrolling navigation. Includes Wikipedia-authentic Dark Mode system.
 */
export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-[#202122] text-[#202122] dark:text-[#eaecf0] flex flex-col font-sans selection:bg-[#c8ccd1] selection:text-black dark:selection:bg-[#54595d] dark:selection:text-white transition-colors duration-150">
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
      </BrowserRouter>
    </ThemeProvider>
  );
}
