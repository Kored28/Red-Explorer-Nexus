"use client";

import { useRouter } from "next/navigation";

import Button from "../Button";
import AdminHeader from "../AdminHeader";
import useCountries from "@/hooks/useCountries";
import { Spinner } from "@/components/ui/spinner";

interface Country {
    id: string
    name: string;
    continent: string
}


const CountryAdmin = () => {
    const router = useRouter();
        
    const { data: fetchedCountry, isLoading } = useCountries();

  return (
    <div>
        <div className="flex flex-col gap-10 h-full">
            <div className="flex flex-row justify-between ">
                <AdminHeader title="Countries" />

                <div className="w-30">
                    <Button 
                    label="Add new country"
                    small
                    outline
                    href="/admin/countries/new"
                    />
                </div>
            </div>
            <div className="w-full">
                {isLoading || !fetchedCountry  ? (
                    <div>
                        <Spinner color="blue" className="size-14"/>
                    </div>
                ): (
                    <div className="flex flex-col gap-7">
                        {fetchedCountry.map((country: Country) => (
                            <div 
                                key={country.id}
                                className={`
                                    grid grid-cols-2 justify-between bg-amber-50 shadow-sm px-5
                                    py-6
                                `}
                            >
                                <h2 className="text-lg font-semibold text-black">
                                    {country.name}
                                </h2>
                                <h2 className="text-base font-medium text-black">
                                    {country.continent
                                    .replace(/_/g, " ")
                                    .toLowerCase()
                                    .replace(/\b\w/g, (char) => char.toUpperCase())
                                    }
                                </h2>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default CountryAdmin