import Link from 'next/link';
import DismissableModal from '/components/Modal';

const Header = () => {
   return (
      <header>
         <div className='w-full bg-bottom bg-cover bg-trucking2 h-96'>
            <div className='flex items-center justify-end w-full h-full p-32 bg-opacity-50 bg-slate-900'>
               <div className='text-right'>
                  <h1 className='text-2xl font-semibold text-white uppercase md:text-3xl'>
                     Happee Trucking{' '}
                  </h1>
                  <h3 className='text-xl text-white md:text-xl'>
                     We invite you to join us as we celebrate this
                     year&apos;s NTDAW from
                     <br /> September 10-16, 2023. Join the
                     industry-wide image movement, <br />
                     Trucking Moves America Forward.
                  </h3>
                  <Link href='/Contact'>
                     <button className='px-4 py-2 mt-4 text-sm font-medium text-white uppercase bg-blue-600 rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500'>
                        Get Started
                     </button>
                  </Link>
                  {/* <DismissableModal /> */}
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
