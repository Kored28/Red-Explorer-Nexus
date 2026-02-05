

interface TextareaProps{
  placeholder: string;
  value: string;
  disabled: boolean;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  value,
  disabled,
  onChange,
}) => {
  return (
    <textarea  
    disabled={disabled} 
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full p-4 text-lg bg-neutral-100 border-2 border-neutral-800 rounded-md outline-none
    text-black focus:border-sky-500 focus:border-2 transition disabled:bg-neutral-900 disabled:opacity-70
    disabled:cursor-not-allowed h-35
    "
    ></textarea>
  )
}

export default Textarea;