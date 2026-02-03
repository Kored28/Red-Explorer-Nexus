"use client";

import { useEffect, useState } from "react";

interface ClientOnlyProps {
    children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({children}) => {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  if(!isClient){
    return null;
  }

  return (
    <>
    
    </>
  )
}

export default ClientOnly