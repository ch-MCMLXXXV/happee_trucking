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
         <section className=' p-12'>
            <h1 className=' text-4xl font-semibold text-center'>
               Servicing the Great state of Alabama!
            </h1>
         </section>
         <section className='py-10  sm:flex sm:gap-5 md:gap-5 xl:flex xl:justify-evenly'>
            <div className=' max-w-sm mb-5'>
               <Card className=' bg-blue-500'>
                  <Image
                     src='/images/box.png'
                     width={100}
                     height={100}
                     alt='Box'
                     className=' p-2'
                  />
                  <h5 className='text-2xl font-bold tracking-tight dark:text-white'>
                     Service
                  </h5>
                  <div className=' font-normal  tracking-tight'>
                     <li>24 Hours a Day, 7 Days a Week</li>
                     <li> Operates exclusively in Alabama</li>
                     <li> Exclusive use of vehicles</li>
                     <li>
                        Dedicated Dispatch team for your every need
                     </li>
                  </div>
               </Card>
            </div>
            <div className=' max-w-sm'>
               <Card className=''>
                  <Image
                     src='/images/smalltruck.png'
                     width={100}
                     height={100}
                     alt='Truck'
                     className=' p-2'
                  />
                  <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                     LTL Intercept/ Recovery Service
                  </h5>
                  <p className='font-normal text-gray-700 dark:text-gray-400'>
                     When your LTL carrier has taken a shipment and
                     there are delays in delivery, we have a solution!
                     Call HAPPEE Trucking, we can make arrangements to
                     recover your shipment and expedite it to you!
                  </p>
               </Card>
            </div>
         </section>
         <section className=' p-10 bg-gray-200'>
            <h1 className=' text-4xl font-bold text-center p-5'>
               Vehicle Types
            </h1>
            <div className=' h-56 sm:h-64 xl:h-80 2xl:h-96'>
               <Carousel>
                  <div className='flex flex-wrap w-2/5 md:flex md:flex-wrap md:h-full md:items-center md:justify-center'>
                     <Image
                        src='/images/cargovan.avif'
                        alt='Cargo Van'
                        width={500}
                        height={500}
                        unoptimized={true}
                        className='  rounded'
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
                  <div className='md:flex md:h-full md:items-center md:justify-center'>
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
                  <div className='md:flex md:h-full md:items-center md:justify-center'>
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
                  <div className='md:flex md:h-full md:items-center md:justify-center'>
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
