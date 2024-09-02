import React, { useState, useRef, useEffect } from 'react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

interface TextInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onEdit?: () => void;
    onDelete?: () => void;
    className?: string;
    inputClassName?: string;
    placeholder?: string;
    editIcon?: React.ReactNode;
    deleteIcon?: React.ReactNode;
}

const TextInput: React.FC<TextInputProps> = ({
    value,
    onChange,
    onEdit,
    onDelete,
    className = '',
    inputClassName = '',
    placeholder = '',
    editIcon,
    deleteIcon,
}) => {
    const [isEditable, setIsEditable] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleEditClick = () => {
        console.log('Edit button clicked');
        setIsEditable(true);
        if (onEdit) {
            onEdit();
        }
    };

    useEffect(() => {
        if (isEditable && inputRef.current) {
            console.log('Input is now editable');
            inputRef.current.focus();
        }
    }, [isEditable]);

    return (
        <div className={`inline-flex items-center px-2 py-1 border rounded-lg ${className}`}>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`flex-grow px-4 py-2 border-none focus:outline-none rounded-lg ${inputClassName} ${!isEditable ? 'text-gray-500' : 'text-black'}`}
                readOnly={!isEditable}
                ref={inputRef}
            />
            {onEdit && (
                <button
                    type="button"
                    onClick={handleEditClick}
                    className="ml-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                    {editIcon || <FaPencilAlt size={14} />}
                </button>
            )}
            {onDelete && (
                <button
                    type="button"
                    onClick={onDelete}
                    className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                    {deleteIcon || <FaTrashAlt size={14} />}
                </button>
            )}
        </div>
    );
};

export default TextInput;
