interface ButtonProps {
    text: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    className?: string;
}