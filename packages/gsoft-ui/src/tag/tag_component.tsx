import React from 'react';

const Tag: React.FC<TagProps> = ({ label, onRemove, className = '' }) => {
    return (
        <div className={`inline-flex items-center px-4 py-2 bg-gray-200 border border-gray-300 rounded-full ${className}`}>
            <span className="mr-2 text-black">{label}</span>
            <button
                type="button"
                onClick={onRemove}
                className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none text-xl"
                style={{ lineHeight: '0' }}
            >
                &times;
            </button>
        </div>
    );
};

export default Tag;
