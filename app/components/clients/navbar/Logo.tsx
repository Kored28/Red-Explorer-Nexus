"use client";

import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';



const Logo = () => {
  return (
    <div>
        <Link
          href="/"
        >
            <Image
            src="./red-logo.svg"
            alt='Logo'
            width="133"
            height="56"
            />
        </Link>
    </div>
  )
}

export default Logo