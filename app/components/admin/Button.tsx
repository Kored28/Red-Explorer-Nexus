"use client";
import { IconType } from "react-icons"

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    disabledText?: string;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
}


const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    disabledText,
    outline,
    small,
    icon: Icon
}) => {
  return (
    <button
        className={`
            relative disabled:opacity-70 disabled:cursor-not-allowed
            rounded-lg hover:opacity-80 transition w-full cursor-pointer
            ${outline ? 'bg-white' : 'bg-[#0a143d]'}
            ${outline ? 'border-black' : 'border-[#0a143d]'}
            ${outline ? 'text-black' : 'text-white'}
            ${small ? 'py-1' : 'py-3'}
            ${small ? 'text-sm' : 'text-md'}
            ${small ? 'font-normal' : 'font-semibold'}
            ${small ? 'border' : 'border-2'}
        `}
        onClick={onClick}
        disabled={disabled}
    >
        {Icon && (
            <Icon
                size={24}
                className="absolute left-4 top-3"
            />
        )}
        {disabled ? disabledText : label}
    </button>
  )
}

export default Button