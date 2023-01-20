const Header = () => {
   //    if (typeof window !== 'undefined') {
   //       document.addEventListener('DOMContentLoaded', function () {
   //          setTimeout(function () {
   //             var replacers =
   //                document.querySelectorAll('[data-replace]');
   //             for (var i = 0; i < replacers.length; i++) {
   //                console.log('hit here2');
   //                let replaceClasses = JSON.parse(
   //                   replacers[i].dataset.replace.replace(/'/g, '"')
   //                );
   //                Object.keys(replaceClasses).forEach(function (key) {
   //                   replacers[i].classList.remove(key);
   //                   replacers[i].classList.add(replaceClasses[key]);
   //                });
   //             }
   //          }, 1);
   //       });
   //    }

   return (
      <header>
         <nav class='bg-white shadow'>
            <div class='container mx-auto px-6 py-3 '>
               <div class='md:flex md:items-center md:justify-between'>
                  <div class='flex justify-between items-center'>
                     <div class='text-xl font-semibold text-gray-700'>
                        <a
                           href='#'
                           class='text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl'
                        >
                           Brand
                        </a>
                     </div>

                     {/* <!-- Mobile menu button --> */}
                     <div class='flex md:hidden'>
                        <button
                           type='button'
                           class='text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600'
                           aria-label='toggle menu'
                        >
                           <svg
                              viewBox='0 0 24 24'
                              class='h-6 w-6 fill-current'
                           >
                              <path
                                 fillRule='evenodd'
                                 d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                              ></path>
                           </svg>
                        </button>
                     </div>
                  </div>

                  {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                  <div class='hidden -mx-4 md:flex md:items-center'>
                     <a
                        href='#'
                        class='block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600'
                     >
                        Home
                     </a>
                     <a
                        href='#'
                        class='block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600'
                     >
                        About
                     </a>
                     <a
                        href='#'
                        class='block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600'
                     >
                        Services
                     </a>
                     <a
                        href='#'
                        class='block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600'
                     >
                        Contact
                     </a>
                  </div>
               </div>
            </div>
         </nav>

         <div class=' w-full bg-cover bg-bottom bg-trucking2  h-96'>
            <div class='flex items-center justify-end h-full w-full  bg-slate-900 bg-opacity-50 p-32'>
               <div class='text-right'>
                  <h1 class='text-white text-2xl font-semibold uppercase md:text-3xl'>
                     Happee Trucking{' '}
                  </h1>
                  <button class='mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500'>
                     Start project
                  </button>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
