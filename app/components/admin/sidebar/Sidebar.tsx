import React from 'react'
import AdminLogo from './AdminLogo'
import SideNav from './SideNav'
import { User } from '@prisma/client'

interface SidebarProps {
  currentUser?: User | null
}

const Sidebar: React.FC<SidebarProps> = ({ currentUser }) => {
  return (
    <div className='fixed left-0 top-0 h-screen w-[15%] lg:w-[20%] bg-[#0a143d] z-20'>
        <div className='px-5 py-4 flex flex-col gap-15'>
          <AdminLogo />

          <SideNav currentUser={currentUser} />
        </div>
    </div>
  )
}

export default Sidebar