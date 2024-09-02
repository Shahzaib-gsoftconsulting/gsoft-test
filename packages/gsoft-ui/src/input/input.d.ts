
interface TextInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onEdit?: () => void;
    onDelete?: () => void;
    className?: string;
    inputClassName?: string;
    placeholder?: string;
    editIcon?: React.ReactNode;
    deleteIcon?: React.ReactNode;
}