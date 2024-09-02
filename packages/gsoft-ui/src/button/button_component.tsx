import React from 'react';

const Button: React.FC<ButtonProps> = (props) => {
  const { text, onClick, disabled = false, className = '' } = props
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
