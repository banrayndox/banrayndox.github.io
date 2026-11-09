import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">404: Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        The requested document or page does not exist in this archive.
      </p>
      <Link to="/" className="text-sm font-medium hover:underline">
        ← Return to Main Page
      </Link>
    </div>
  );
}
