"use client";

import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { redirect, useRouter } from "next/navigation";

import { User } from "@/app/generated/prisma/client";
import axios from "axios";
import Input from "../inputs/Input";
import AdminHeader from "../AdminHeader";
import Button from "../Button";




const NewCountry = () => {
    const CONTINENTS = [
        { value: "AFRICA", label: "Africa" },
        { value: "EUROPE", label: "Europe" },
        { value: "ASIA", label: "Asia" },
        { value: "NORTH_AMERICA", label: "North America" },
        { value: "SOUTH_AMERICA", label: "South America" },
        { value: "AUSTRALIA", label: "Australia" },
        { value: "ANTARCTICA", label: "Antarctica" },
    ];

    const [name, setName] = useState<string>('');
    const [continent, setContinent] = useState<string>('');


    const router = useRouter()
    
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback(async() => {
        try {
            setIsLoading(true);

            await axios.post('/api/countries', {
                name,
                continent
            })

            toast.success('Country Created');

            router.back()
        } catch (error) {
            toast.error("Something went wrong")
        } finally {
            setIsLoading(false);
        }
    }, [name, continent, router]);

  return (
    <div className="flex flex-col gap-10">
        <AdminHeader title="Edit Profile"/>

        <div className="flex flex-col gap-7 w-71 lg:w-[40%]">

            <Input
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                disabled={isLoading}
            />

            <select
                value={continent}
                onChange={(e) => setContinent(e.target.value)}
                className="p-4 text-lg bg-neutral-100 border-2 border-neutral-800 rounded-md"
                disabled={isLoading}
            >
                <option value="">Select continent</option>
                {CONTINENTS.map((c) => (
                    <option key={c.value} value={c.value}>
                        {c.label}
                    </option>
                ))}
            </select>
            
        </div>

        <div className="w-71 lg:w-[40%]">
            <Button 
            label="Save"
            onClick={onSubmit}
            disabled={isLoading}
            />
        </div>
    </div>
  )
}

export default NewCountry