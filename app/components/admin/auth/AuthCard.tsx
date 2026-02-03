"use client";

import { useCallback } from "react";
import Button from "../Button";

interface AuthCardProps {
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const AuthCard: React.FC<AuthCardProps> = ({
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel
}) => {

  const handleSubmit = useCallback(() => {
    if(disabled){
      return;
    }

    onSubmit();
  }, [disabled, onSubmit])

  const  handleSecondaryAction = useCallback(()  =>  {
    if(disabled || !secondaryAction){
      return;
    }

    secondaryAction();
  },  [disabled, secondaryAction])
  
  return (
    <div 
      className={`bg-[#f7f6f0] w-74 sm:w-125 rounded-lg shadow-sm
        sm:px-12 px-4 sm:py-12 py-8 border border-[#E2E5E9] flex flex-col
        gap-5 sm:gap-10
      `}
    >
      <div className='border-b border-b-[#eeeeff] pb-2 text-center'>
        <h4
          className="text-[28px] font-semibold font-roboto"
        >
          {title}
        </h4>
      </div>

      <div>
        {body}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-4 w-full">
          {secondaryAction && secondaryActionLabel  && (
            <Button 
              outline
              disabled={disabled}
              label={secondaryActionLabel}
              onClick={handleSecondaryAction}
            />
          )}
          
          <Button 
            disabled={disabled}
            label={actionLabel}
            onClick={handleSubmit}
            disabledText="Submitting"
          />
        </div>
        {footer}
      </div>
    </div>
  )
}

export default AuthCard