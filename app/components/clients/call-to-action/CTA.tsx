"use client";

import Image from 'next/image'
import ClientInput from '../inputs/ClientInput';
import { useCallback, useState } from 'react';
import ClientButton from '../ClientButton';

interface CTAProps{
    images: {
        url: string,
        alt: string
    }[];
    hideButton?: boolean;
}

const CTA: React.FC<CTAProps> = ({
    images,
    hideButton
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState<string>("");

    const onSubmit = useCallback(() => {
    
    }, []);
  return (
    <div >
        {/* Slider */}
        <div
            className={`
                relative flex flex-row justify-center w-full overflow-hidden
            `}
        >
            <div className="absolute inset-0 bg-[#0336FF1A]"></div>

            {images.map((image, index) => (
                <div 
                    key={index}
                    className='relative w-57 h-74'
                >
                    <Image 
                        src={image.url}
                        alt={image.alt}
                        fill
                        className='object-cover'
                    />
                </div>
            ))}

            <button
                className={`
                    bg-[#0336FF] rounded-lg shadow-md text-white
                    font-lato text-xl text-center pt-[13.14px] pb-[18.29px]
                    pl-[14.26px] pr-[18.29px] absolute top-1/2
                    ${hideButton ? "hidden" : "block"}
                `}
            >
                Follow @ instagram
            </button>
        </div>

        {/* Subscribe */}
        <div
            className={`
                grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-0
                mx-auto max-w-271.75 mt-34.25 pb-30 px-4 md:px-0
            ` }
        >
            <h2
                className={`
                    font-lato font-bold text-3xl
                `}
            >
                Join <span className='text-[#0336FF]'>98,641 </span>
                Monthly Readers. <br/>Subscribe Today!
            </h2>

            <div
                className='flex flex-row gap-4.75'
            >
                <ClientInput
                    placeholder="Email"
                    type="text"
                    disabled={isLoading}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    subscribe
                />
                <div className='w-50.25'>
                    <ClientButton
                        label="Subscribe"
                        onClick={onSubmit}
                        disabled={isLoading}
                        subscribe
                        disabledText='Subscribing'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CTA