import { Footer } from 'flowbite-react';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import Image from 'next/image';

const Foot = () => {
   return (
      <Footer container={true} className=' '>
         <div className=' w-full text-center '>
            <div className=' w-full justify-between sm:flex sm:items-center sm:justify-between '>
               <Image
                  src='/images/happee.webp'
                  height={70}
                  width={70}
                  alt='Happee Trucking Logo'
               />
               {/* <Footer.Brand
                  href='#'
                  src='/images/happee.webp'
                  height={300}
                  width={300}
                  alt='Happee Trucking Logo'
               /> */}
               <Footer.LinkGroup>
                  <Footer.Link href='/About'>About</Footer.Link>
                  <Footer.Link href='/Contact'>Contact</Footer.Link>
                  {/* <Footer.Link href='#'>Apply</Footer.Link> */}
               </Footer.LinkGroup>
            </div>
            <Footer.Divider />
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
               <Footer.Copyright by='BuiltByCHarris' />
               <Footer.Copyright by='Happee Trucking' year={2023} />
               <div className=' mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
                  <Footer.Icon href='#' icon={BsFacebook} />
                  <Footer.Icon href='#' icon={BsInstagram} />
                  <Footer.Icon href='#' icon={BsTwitter} />
               </div>
            </div>
         </div>
      </Footer>
   );
};

export default Foot;
