import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="error-message-container">
      <div className="error-message">
        <p>{message}</p>
        {onRetry && (
          <button onClick={onRetry} className="retry-button">
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage; 