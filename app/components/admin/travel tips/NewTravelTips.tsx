"use client";

import axios from "axios";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


import Input from "../inputs/Input";
import AdminHeader from "../AdminHeader";
import Button from "../Button";
import ImageUpload from "../inputs/ImageUpload";
import Textarea from "../inputs/Textarea";
import useCountries from "@/hooks/useCountries";

interface Country {
    id: string;
    name: string;
}

const NewTravelTips = () => {
  const { data: fetchedCountry, isLoading: countryLoading } = useCountries();

    const [featuredImage, setFeaturedImage] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [excerpt, setExcerpt] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [countryId, setCountryId] = useState<string>('');


    const router = useRouter()
    
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback(async() => {
        try {
            setIsLoading(true);

            await axios.post('/api/travel-tips', {
                title,
                content,
                featuredImage,
                excerpt,
                countryId
            })

            toast.success('Travel Tips Post Created');

            router.back()
        } catch  {
            toast.error("Something went wrong")
        } finally {
            setIsLoading(false);
        }
    }, [title, content, featuredImage, excerpt, countryId, router]);
  
    return (
      <div className="flex flex-col gap-10">
          <AdminHeader title="New Destination"/>
  
            <div className="flex flex-col gap-7 w-71 lg:w-[40%]">
                <ImageUpload 
                    value={featuredImage ? featuredImage : ""}
                    disabled={isLoading}
                    onChange={(image) => setFeaturedImage(image)}
                    label="Upload Featured Image"
                />
                <Input
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    disabled={isLoading}
                />
                <Input
                    placeholder="Excerpt"
                    onChange={(e) => setExcerpt(e.target.value)}
                    value={excerpt}
                    type="text"
                    disabled={isLoading}
                />
                <Textarea
                    placeholder="Content"
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                    disabled={isLoading}
                />
  
                
                <select
                    value={countryId}
                    onChange={(e) => setCountryId(e.target.value)}
                    className="p-4 text-lg bg-neutral-100 border-2 border-neutral-800 rounded-md"
                    disabled={isLoading || countryLoading}
                >
                    <option value="">
                        {!fetchedCountry || countryLoading ? "Loading countries..." : "Select country"}
                    </option>
                    {fetchedCountry?.map((c: Country) => (
                        <option key={c.id} value={c.id}>
                            {c.name}
                        </option>
                    ))}
                </select>
                
              
            </div>
  
          <div className="w-71 lg:w-[40%]">
              <Button 
              label="Save"
              onClick={onSubmit}
              disabled={isLoading}
              disabledText="Saving"
              />
          </div>
      </div>
    )
}

export default NewTravelTips