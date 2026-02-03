"use client";

import Image from 'next/image'
import Link from 'next/link';
import Logo from "@/public/red-logo.svg"
import { useRouter } from 'next/navigation';



const AdminLogo = () => {
  return (
    <div>
        <Link
          href="/admin"
          className='text-white'
        >
          <Image
          src={Logo}
          alt='Logo'
          width="133"
          height="56"
          />
        </Link>
    </div>
  )
}

export default AdminLogo