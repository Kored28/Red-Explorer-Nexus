"use client";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import placeholder from "@/public/images/placeholder image.png"
import toast from "react-hot-toast";

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
        if (!files || files.length === 0 || !files[0]) {
            return;
        }
        const file = files[0];

        if (!(file instanceof File)) {
            toast.error("Invalid file");
            return;
        }

        const reader = new FileReader();

        reader.onload = (event: ProgressEvent<FileReader>) => {
            const result = event.target?.result;

            if (typeof result === "string") {
                setBase64(result);
                handleChange(result);
            }
        }

        reader.onerror = () => {
            toast.error("Failed to read file");
        };
        
        reader.readAsDataURL(file)
    }, [handleChange]);

    const { getRootProps, getInputProps } = useDropzone({
        maxFiles: 1,
        maxSize: 300 * 1024,
        onDrop: handleDrop,
        disabled,
        accept: {
            'image/jpeg': [],
            'image/jpg': [],
            'image/png': [],
        },
        onDropRejected: (fileRejections) => {
            fileRejections.forEach((file) => {
                file.errors.forEach((err) => {
                    if (err.code === "file-too-large") {
                        toast.error(`File is too large. Max size is 300KB`);
                    }
                    if (err.code === "file-invalid-type") {
                        toast.error(`Invalid file type. Only JPEG and PNG are allowed`);
                    }
                    if (err.code === "too-many-files") {
                        toast.error(`Too many files. Only 1 file allowed`);
                    }
                });
            });
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