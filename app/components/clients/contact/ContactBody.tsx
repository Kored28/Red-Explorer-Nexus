"use client"

import { useCallback, useState } from "react"
import ClientInput from "../inputs/ClientInput"
import ClientButton from "../ClientButton";
import toast from "react-hot-toast";

const ContactBody = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [firstName, setfirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [subject, setSubject] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    const onSubmit = useCallback(() => {
        try {
            setIsLoading(true);
            toast.success("Subscribed");
            setfirstName("");
            setLastName("");
            setEmail("");
            setSubject("");
            setMessage("")
        } catch (error) {
            toast.error("Oops. Try again")
        } finally{
            setIsLoading(false);
        }
    }, [
        setIsLoading,
        setfirstName,
        setLastName,
        setEmail,
        setSubject,
        setMessage,
    ]);


  return (
    <div className="w-full flex flex-col items-center gap-14.5 pt-21 pb-24.25 px-5 lg:px-17.75">
        <h4
            className={`
                font-roboto font-medium text-base text-center
            `}
        >
            PLEASE, FEEL YOURSELF COMFORTABLE TO FILL IN OUR CONTACT FORM
        </h4>

        <div
            className={` 
                flex flex-col items-center gap-8 w-full max-w-213.75 mx-auto
            `}
        >
           <div
            className={` 
                flex flex-row gap-6 w-full
            `}
           >
                <ClientInput 
                    placeholder="First Name"
                    type="text"
                    disabled={isLoading}
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                />
                <ClientInput 
                    placeholder="Last Name"
                    type="text"
                    disabled={isLoading}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>  

           <div
            className={` 
                flex flex-row gap-6 w-full
            `}
           >
                <ClientInput 
                    placeholder="Email"
                    type="text"
                    disabled={isLoading}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <ClientInput 
                    placeholder="Subject"
                    type="text"
                    disabled={isLoading}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
            </div>  
            
            <textarea 
                disabled={isLoading}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Message"
                className={`w-full h-53 px-6 pt-4.25 pb-5 text-base bg-white border border-[#DDE2E5] rounded-lg outline-none
                text-black focus:border-sky-500 focus:border transition disabled:bg-neutral-900 disabled:opacity-70
                disabled:cursor-not-allowed placeholder:text-[#6E7191] placeholder:underline
                `}
            ></textarea>

            <div className="pt-0.75">
                <ClientButton
                    label="Submit"
                    onClick={onSubmit}
                    disabled={isLoading}
                    small
                    disabledText="Submitting"
                />
            </div>

        </div>

    </div>
  )
}

export default ContactBody