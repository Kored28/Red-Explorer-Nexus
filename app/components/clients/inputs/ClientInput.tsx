interface ClientInputProps{
  placeholder: string;
  value: string;
  type: string;
  disabled: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  subscribe?: boolean;
}

const ClientInput: React.FC<ClientInputProps> = ({
  placeholder,
  value,
  type,
  disabled,
  onChange,
  subscribe
}) => {
  return (
    <input 
    type={type}
    disabled={disabled} 
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`w-full px-6 pt-4.25 pb-5 text-base bg-white border border-[#DDE2E5] rounded-lg outline-none
      text-black focus:border-sky-500 focus:border transition disabled:bg-neutral-900 disabled:opacity-70
      disabled:cursor-not-allowed 
      ${subscribe ? 'placeholder:text-[#C4C4C4] placeholder:no-underline' : 'placeholder:text-[#6E7191] placeholder:underline'}
    `}
    />
  )
}

export default ClientInput;