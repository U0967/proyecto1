import { HomeIcon } from '@primer/octicons-react';
import Link from 'next/link';
import {ActiveLink} from '../active-link/ActiveLink';
// import React from 'react'

const navItems = [
    { path: '/about', text: 'About'},
    { path: '/contact', text: 'Contact'},
    
    { path: '/pricing', text: 'Pricing'},
    
    ]
    

export const Navbar = () => {
    
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
        
        <Link href={'/'} className='flex items-center'>
            <HomeIcon className='mr-2'/>
            <span>Home</span>
        </Link>
        
        <div className='flex flex-1'></div>

        {
navItems.map(navItem => (
//<Link key={navItem.path} className="mr-2" href={navItem.path}>{navItem.text}</Link>
<ActiveLink key={ navItem.path } { ...navItem }/>
))
} 



        {/* <Link className='mr-2' href="/about">About</Link>
        <Link className='mr-2' href="/contact">Contact</Link>
        <Link className='mr-2' href="/pricing">Pricing</Link>  */}
    </nav>    
)
}

// export default Navbar
