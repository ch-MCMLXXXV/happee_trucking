import React from 'react';
import { Navbar } from 'flowbite-react';
import Image from 'next/image';

const Nav = () => {
   return (
      <Navbar fluid={true} rounded={true}>
         <Navbar.Brand>
            <Image
               src='https://flowbite.com/docs/images/logo.svg'
               className='mr-3 h-6 sm:h-9'
               alt='Flowbite Logo'
               width={300}
               height={300}
            />
         </Navbar.Brand>
         <Navbar.Toggle />
         <Navbar.Collapse>
            <Navbar.Link href='/' active={true}>
               Home
            </Navbar.Link>
            <Navbar.Link href='/About'>About</Navbar.Link>
            <Navbar.Link href='/Services'>Services</Navbar.Link>
            <Navbar.Link href='/Contact'>Contact</Navbar.Link>
         </Navbar.Collapse>
      </Navbar>
   );
};

export default Nav;
