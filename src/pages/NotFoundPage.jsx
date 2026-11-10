import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">404: Page Not Found</h1>
      <p className="text-gray-600 dark:text-[#9aa0a6] mb-6">
        The requested document or page does not exist in this archive.
      </p>
      <Link to="/" className="text-sm font-medium text-[#0645ad] dark:text-[#6da8ff] hover:underline">
        ← Return to Main Page
      </Link>
    </div>
  );
}
