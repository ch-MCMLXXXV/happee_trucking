import React from 'react';
import { Navbar } from 'flowbite-react';
import Image from 'next/image';

const Nav = () => {
   return (
      <Navbar fluid={true} rounded={true}>
         <Navbar.Brand>
            <Image
               src='/images/happee.webp'
               className='mr-3 h-3 sm:h-12'
               alt='Happee Trucking'
               width={70}
               height={70}
            />
         </Navbar.Brand>
         <Navbar.Toggle />
         <Navbar.Collapse>
            <Navbar.Link href='/'>Home</Navbar.Link>
            <Navbar.Link href='/About'>About</Navbar.Link>
            <Navbar.Link href='/Services'>Services</Navbar.Link>
            <Navbar.Link href='/Contact'>Contact</Navbar.Link>
         </Navbar.Collapse>
      </Navbar>
   );
};

export default Nav;
