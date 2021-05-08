import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1 className="title404">404 Error</h1>
        <h2>Page not Found!</h2>
        <Link className="btn-primary" to="/">Go to Home</Link>
      </div>
    </section>
  );
}

export default Error
