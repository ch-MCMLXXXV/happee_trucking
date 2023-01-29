import Image from 'next/image';
import { Carousel, Card } from 'flowbite-react';

const Services = () => {
   return (
      <>
         <section className=' p-10  bg-blue-600'>
            <div className=' text-center text-6xl text-white font-bold'>
               <h1>Services</h1>
            </div>
         </section>
         <section className=' p-10 flex flex-row gap-5'>
            <div className=' max-w-sm'>
               <Card imgSrc='https://flowbite.com/docs/images/blog/image-1.jpg'>
                  <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                     Noteworthy technology acquisitions 2021
                  </h5>
                  <p className='font-normal text-gray-700 dark:text-gray-400'>
                     Here are the biggest enterprise technology
                     acquisitions of 2021 so far, in reverse
                     chronological order.
                  </p>
               </Card>
            </div>
            <div className=' max-w-sm'>
               <Card imgSrc='https://flowbite.com/docs/images/blog/image-1.jpg'>
                  <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                     Noteworthy technology acquisitions 2021
                  </h5>
                  <p className='font-normal text-gray-700 dark:text-gray-400'>
                     Here are the biggest enterprise technology
                     acquisitions of 2021 so far, in reverse
                     chronological order.
                  </p>
               </Card>
            </div>
         </section>
         <section className=' p-10 bg-gray-200'>
            <h1 className=' text-4xl font-bold text-center p-5'>
               Vehicle Types
            </h1>
            <div className='h-56 sm:h-64 xl:h-80 2xl:h-96'>
               <Carousel>
                  <div className='flex flex-wrap h-full items-center justify-center'>
                     <Image
                        src='/images/cargovan.avif'
                        alt='Cargo Van'
                        width={500}
                        height={500}
                        className=' p-5 rounded'
                     />
                     <div className=' p-5'>
                        <h4 className=' text-xl font-semibold'>
                           Cargo Van
                        </h4>
                        <li>Capacity: 2,500lbs </li>
                        <li>Length: 96in </li>
                        <li>Width: 48in </li>
                        <li>Heigth: 48in </li>
                     </div>
                  </div>
                  <div className='flex h-full items-center justify-center'>
                     <Image
                        src='/images/sprintervan.webp'
                        alt='Cargo Van'
                        width={500}
                        height={500}
                        className=' p-5 rounded'
                     />
                     <div className=' p-5'>
                        <h4 className=' text-xl font-semibold'>
                           Sprinter Van
                        </h4>
                        <li>Capacity: 3,200 lbs</li>
                        <li>Length: 144 in</li>
                        <li>Width: 50 in</li>
                        <li>Height: 72 in</li>
                     </div>
                  </div>
                  <div className='flex h-full items-center justify-center'>
                     <Image
                        src='/images/straighttruck.jpeg'
                        alt='Cargo Van'
                        width={500}
                        height={500}
                        className=' p-5 rounded'
                     />
                     <div className=' p-5'>
                        <h4 className=' text-xl font-semibold'>
                           Straight Truck
                        </h4>
                        <li>Capacity: 12,500 lbs</li>
                        <li>Length: 288 in</li>
                        <li>Width: 96 in</li>
                        <li>Height: 96 in</li>
                     </div>
                  </div>
                  <div className='flex h-full items-center justify-center'>
                     <Image
                        src='/images/semitrailer.jpeg'
                        alt='Cargo Van'
                        width={500}
                        height={500}
                        className=' p-5 rounded'
                     />
                     <div className=' p-5'>
                        <h4 className=' text-xl font-semibold'>
                           Semi Trailer
                        </h4>
                        <li>Capacity: 45,000 lbs</li>
                        <li>Length: 636 in</li>
                        <li>Width: 102 in</li>
                        <li>Height: 110 in</li>
                     </div>
                  </div>
               </Carousel>
            </div>
         </section>
      </>
   );
};
export default Services;
