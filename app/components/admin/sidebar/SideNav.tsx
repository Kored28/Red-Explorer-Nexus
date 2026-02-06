"use client";

import { usePathname } from 'next/navigation';
import { MdAirplaneTicket, MdDashboard, MdPowerSettingsNew } from 'react-icons/md';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { FaMapLocationDot, FaUser } from 'react-icons/fa6';
import { User } from '@prisma/client';
import { signOut } from 'next-auth/react';
import { TiWorld } from 'react-icons/ti';

interface RouteProps  {
  href: string;
  label: string;
  Icon: IconType;
  active: boolean;
};

interface SideNavProps {
  currentUser?: User | null
}


const SideNav: React.FC<SideNavProps> = ({ currentUser }) => {

    const pathname = usePathname();
    const routes: RouteProps[] = [
        {
            href: '/admin',
            Icon: MdDashboard,
            label: 'Dashboard',
            active: pathname === '/admin'
        },
        {
            href: '/admin/destinations',
            Icon: FaMapLocationDot,
            label: 'Destinations',
            active: pathname === '/about-us'
        },
        {
            href: '/admin/travel-tips',
            Icon: MdAirplaneTicket,
            label: 'Travel Tips',
            active: pathname === '/admin/travel-tips'
        },
        {
            href: '/admin/countries',
            Icon: TiWorld,
            label: 'Countries',
            active: pathname === '/admin/countries'
        },
        // {
        //     href: '/admin/categories',
        //     Icon: FaListUl,
        //     label: 'Categories',
        //     active: pathname === '/admin/categories'
        // },
        {
            href: `/admin/users/${currentUser?.id}`,
            Icon: FaUser,
            label: 'Profile',
            active: pathname === `/admin/users/${currentUser?.id}`
        }
    ]


  return (
    <div className='flex flex-col gap-6'>
        {
            routes.map((route, index) => {
                const Icon  = route.Icon
                return (
                    <Link
                        key={index}
                        href={route.href}
                        className={`
                            flex flex-row gap-1 items-center font-roboto font-medium text-xl
                           ${route.active ? "text-[#FFA500]" : "text-white"}
                           hover:text-[#FFA500]
                        `}
                    >
                        <Icon  />
                        <p className='hidden lg:block'>
                            {route.label}
                        </p>
                    </Link>
                )
            })
        }

        {currentUser && (
            <>
                <hr className='text-white'/>
                <button 
                    onClick={() => signOut({ callbackUrl: '/login' })}
                    className={`flex flex-row gap-1 items-center text-white hover:text-[#FFA500]
                        font-roboto font-medium text-xl cursor-pointer
                    `}
                >
                    <MdPowerSettingsNew />
                    <span className='hidden lg:block'>Logout</span>
                </button>
            </>
        )}
    </div>
  )
}

export default SideNav