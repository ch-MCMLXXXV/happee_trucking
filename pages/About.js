import Image from 'next/image';
const About = () => {
   return (
      <>
         <section className='p-10 bg-blue-600 '>
            <div className='text-6xl font-bold text-center text-white '>
               <h1>About Us</h1>
            </div>
         </section>

         <section className=' md:p-16'>
            <article className='p-10 text-center '>
               <div className='flex justify-center '>
                  <Image
                     src='/images/wavinghand.svg'
                     width={100}
                     height={100}
                     alt='handshake'
                     className='mb-2 '
                  />
               </div>
               <span className='text-3xl font-bold tracking-tight text-black md:text-4xl'>
                  Who
               </span>{' '}
               <span className='text-3xl font-bold tracking-tight text-blue-600 md:text-4xl'>
                  We
               </span>{' '}
               <span className='text-3xl font-bold tracking-tight text-black md:text-4xl'>
                  Are
               </span>
               <p className='pt-4 tracking-tight text-center '>
                  HAPPEE Trucking was formed out of the need to create
                  a minority owned and veteran led full-service
                  provider of mission critical transportation
                  requirements for our selected customers. Our
                  management team has more than 75+ years of logistics
                  experience. However, you can’t see it, but it might
                  be made of steel – no minority owned and veteran led
                  transportation company has broken past more than
                  .05% market share in this industry. We owe it to
                  ourselves, the veterans we deploy, our drivers and
                  partners to break it, for good!!!!
               </p>
            </article>
         </section>
         <section className='md:flex md:flex-wrap md:p-16 md:justify-center bg-slate-200'>
            <article className='p-10 md:w-2/5 md:flex-none'>
               <Image
                  src='/images/handshake2.svg'
                  width={45}
                  height={45}
                  alt='handshake'
                  className='block mb-2 '
               />
               <span className='text-3xl font-bold tracking-tight text-black '>
                  Our
               </span>{' '}
               <span className='text-3xl font-bold tracking-tight text-blue-600 '>
                  Mission
               </span>
               <p className='mt-2 tracking-tight '>
                  At HAPPEE Trucking, you can rely on the HAPPEE
                  Trucking expedite team to get your shipment where it
                  needs to be and fast! When minutes count, our
                  exclusive-use equipment can be the best method for
                  all your expedited shipments. We take care of all
                  the details, from pick-up through final delivery,
                  keeping you informed every step of the way.
               </p>
            </article>
            <article className='p-10 md:w-2/5 md:flex-none'>
               <Image
                  src='/images/goal.svg'
                  width={45}
                  height={45}
                  alt='handshake'
                  className='block mb-2 '
               />
               <span className='text-3xl font-bold tracking-tight text-black '>
                  Our
               </span>{' '}
               <span className='text-3xl font-bold tracking-tight text-blue-600 '>
                  Goal
               </span>
               <p className='mt-2 tracking-tight '>
                  HAPPEE Trucking operates 24/7/365 supporting our
                  customer’s needs with no fail. No mission is too
                  big, no mission is not critical! All shipments,
                  receives our highest level of service so that our
                  customers can focus on what they do best.
               </p>
            </article>
            <article className='p-10 md:w-2/5 md:flex-none'>
               <Image
                  src='/images/MBE.png'
                  width={300}
                  height={300}
                  alt='Minority Owned Business Certification'
               />
            </article>
            <article className='p-10 md:w-2/5 md:flex-none'>
               <Image
                  src='/images/VOB.png'
                  width={500}
                  height={500}
                  alt='Veteran Owned Business'
               />
            </article>
         </section>
         <section className='grid grid-cols-12 grid-rows-6 gap-3 p-5 '>
            <div className='text-2xl font-semibold text-center col-span-full'>
               <h1>Our Customers:</h1>
            </div>
            <div className='col-span-3 row-start-2 '>
               <Image
                  src='/images/lear.svg'
                  width={200}
                  height={200}
                  alt='Lear'
               />
            </div>
            <div className='col-span-3 col-start-1 row-start-4 '>
               <Image
                  src='/images/chrobinson.png'
                  width={200}
                  height={200}
                  alt='C.H. Robinson'
               />
            </div>
            <div className='col-span-3 col-start-5 row-span-1 row-start-3 '>
               <Image
                  src='/images/pinnanclet.png'
                  width={200}
                  height={200}
                  unoptimized='true'
                  alt='Pinnancle'
               />
            </div>
            <div className='col-span-3 col-start-7 row-start-4 '>
               <Image
                  src='/images/amazon.png'
                  width={200}
                  height={200}
                  alt='Amazon Relay'
                  className='p-1 bg-amazon'
               />
            </div>
            <div className='col-span-3 col-start-10 row-start-2 '>
               <Image
                  src='/images/fetch_freight.png'
                  width={200}
                  height={200}
                  alt='Fetch Freight'
               />
            </div>
            <div className='col-span-3 col-start-10 row-span-1 row-start-4 '>
               <Image
                  src='/images/uber-freight.svg'
                  width={200}
                  height={200}
                  alt='Uber Freight'
               />
            </div>
            <div className='col-span-3 col-start-4 row-span-1 row-start-4 '>
               <Image
                  src='/images/BuddyMoreT.png'
                  width={200}
                  height={200}
                  alt='Buddy Moore Trucking'
               />
            </div>
            <div className='col-span-3 col-start-2 row-span-1 row-start-3 '>
               <Image
                  src='/images/datfreight.png'
                  width={200}
                  height={200}
                  alt='DAT Freight'
               />
            </div>
            <div className='col-span-3 col-start-8 row-span-1 row-start-3 '>
               <Image
                  src='/images/greenbush.png'
                  width={200}
                  height={200}
                  alt='GreenBush'
               />
            </div>
            <div className='col-span-3 col-start-4 row-span-1 row-start-2 '>
               <Image
                  src='/images/logisticsone.png'
                  width={200}
                  height={200}
                  alt='Logistics One'
               />
            </div>
            <div className='col-span-3 col-start-7 row-span-1 row-start-2 '>
               <Image
                  src='/images/stord.png'
                  width={200}
                  height={200}
                  alt='Stord'
               />
            </div>
            <div className='col-span-3 col-start-11 row-span-1 row-start-3 '>
               <Image
                  src='/images/tql.png'
                  width={200}
                  height={200}
                  alt='TQL Logistics'
               />
            </div>
            <div className='col-span-3 col-start-2 row-span-1 row-start-5 '>
               <Image
                  src='/images/wayfinder.png'
                  width={200}
                  height={200}
                  alt='Wayfinder Logistics'
               />
            </div>
            <div className='col-span-3 col-start-5 row-span-1 row-start-5 '>
               <Image
                  src='/images/Grace.png'
                  width={200}
                  height={200}
                  alt='Grace Group'
               />
            </div>
            <div className='col-span-3 col-start-8 row-span-1 row-start-5 '>
               <Image
                  src='/images/Venture.jpeg'
                  width={150}
                  height={150}
                  alt='Venture Logistics'
               />
            </div>
            <div className='col-span-3 col-start-11 row-span-1 row-start-5 '>
               <Image
                  src='/images/hyundai-mobis.png'
                  width={200}
                  height={200}
                  alt='Hyundai Mobis'
               />
            </div>
         </section>
      </>
   );
};

export default About;
