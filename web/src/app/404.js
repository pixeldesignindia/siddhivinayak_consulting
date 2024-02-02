'use client'
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h2 className="not-found-heading">Not Found</h2>
        <h1 className="not-found-title">404 - Page Not Found</h1>
        <p className="not-found-message">Sorry, the page you are looking for does not exist.</p>
        <Link href="/" passHref>
          Return Home
        </Link>
      </div>
    </div>
  );
}

