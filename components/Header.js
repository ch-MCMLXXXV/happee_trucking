import Link from 'next/link';

const Header = () => {
   return (
      <header>
         <div className=' w-full bg-cover bg-bottom bg-trucking2  h-96'>
            <div className='flex items-center justify-end h-full w-full  bg-slate-900 bg-opacity-50 p-32'>
               <div className='text-right'>
                  <h1 className='text-white text-2xl font-semibold uppercase md:text-3xl'>
                     Happee Trucking{' '}
                  </h1>
                  <Link href='/Contact'>
                     <button className='mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500'>
                        Get Started
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
