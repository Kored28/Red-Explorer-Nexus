
interface ClientButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    small?: boolean;
    subscribe?: boolean;
    disabledText?: string;
}

const ClientButton: React.FC<ClientButtonProps> = ({
    label,
    onClick,
    disabled,
    small,
    subscribe,
    disabledText
}) => {
  return (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`
            bg-[#0336FF] rounded-lg shadow-md text-white
            ${small ? "font-roboto": "font-lato"}
            ${small ? "py-1.75 px-9" : "py-5.5 px-11.5"}
            ${subscribe ? "font-normal" : "font-medium"}
            ${subscribe ? "text-[20px]" : "text-[16px]"}
        `}
    >
        {disabled ? disabledText : label}
    </button>
  )
}

export default ClientButton