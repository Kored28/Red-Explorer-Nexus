"use client";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import placeholder from "@/public/images/placeholder image.png"

interface ImageUploadProps {
    onChange: (base64: string) => void;
    label: string;
    value?: string;
    disabled?: boolean;
}


const ImageUpload: React.FC<ImageUploadProps> = ({
    onChange,
    label,
    value,
    disabled
}) => {
    const [base64, setBase64] = useState(value);

    const handleChange = useCallback((base64: string) => {
        onChange(base64)
    }, [onChange]);

    const handleDrop = useCallback((files: File[]) => {
        const file = files[0];
        const reader = new FileReader();

        reader.onload = (event: ProgressEvent<FileReader>) => {
            const result = event.target?.result;

            if (typeof result === "string") {
                setBase64(result);
                handleChange(result);
            }
        }
        reader.readAsDataURL(file)
    }, [handleChange]);

    const { getRootProps, getInputProps } = useDropzone({
        maxFiles: 1,
        onDrop: handleDrop,
        disabled,
        accept: {
            'image/jpeg': [],
            'image/jpg': [],
            'image/png': [],
        }
    });

  return (
    <div
        { ...getRootProps({
            className: "w-full p-4 text-black text-center border-2 border-dotted rounded-md border-neutral-700"
        })}
    >
        <input {...getInputProps()} />
        {
            base64 ? (
                <div className="flex items-center justify-center">
                    <Image 
                        src={base64}
                        height={200}
                        width={200}
                        alt="Uploaded image"
                    />
                </div>
            ) : (
                <div className="flex flex-col items-center">
                    <Image
                        src={placeholder} 
                        height={100}
                        width={100}
                        alt="Placeholder Image"
                    />
                    <p className="text-black">
                        {label}
                    </p>
                </div>
            )
        }
    </div>
  )
}

export default ImageUpload;