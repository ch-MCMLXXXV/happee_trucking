import Image from 'next/image';
const About = () => {
   return (
      <>
         <section className=' p-10  bg-blue-600'>
            <div className=' text-center text-6xl text-white font-bold'>
               <h1>About Us</h1>
            </div>
         </section>

         <section className='   md:p-16'>
            <article className=' p-10 text-center '>
               <div className=' flex justify-center'>
                  <Image
                     src='/images/wavinghand.svg'
                     width={100}
                     height={100}
                     alt='handshake'
                     className=' mb-2 '
                  />
               </div>
               <span className='  text-3xl md:text-4xl font-bold text-black tracking-tight'>
                  Who
               </span>{' '}
               <span className='text-3xl  text-blue-600 font-bold md:text-4xl tracking-tight'>
                  We
               </span>{' '}
               <span className='text-3xl  md:text-4xl font-bold text-black tracking-tight'>
                  Are
               </span>
               <p className=' tracking-tight text-center pt-4'>
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
            <article className=' md:w-2/5 md:flex-none p-10'>
               <Image
                  src='/images/handshake2.svg'
                  width={45}
                  height={45}
                  alt='handshake'
                  className=' block mb-2'
               />
               <span className=' text-black font-bold text-3xl tracking-tight'>
                  Our
               </span>{' '}
               <span className=' text-blue-600 font-bold text-3xl tracking-tight'>
                  Mission
               </span>
               <p className=' mt-2 tracking-tight'>
                  At HAPPEE Trucking, you can rely on the HAPPEE
                  Trucking expedite team to get your shipment where it
                  needs to be and fast! When minutes count, our
                  exclusive-use equipment can be the best method for
                  all your expedited shipments. We take care of all
                  the details, from pick-up through final delivery,
                  keeping you informed every step of the way.
               </p>
            </article>
            <article className=' md:w-2/5 md:flex-none p-10'>
               <Image
                  src='/images/goal.svg'
                  width={45}
                  height={45}
                  alt='handshake'
                  className=' block mb-2'
               />
               <span className=' text-black font-bold text-3xl tracking-tight'>
                  Our
               </span>{' '}
               <span className=' text-blue-600 font-bold text-3xl tracking-tight'>
                  Goal
               </span>
               <p className=' tracking-tight mt-2'>
                  HAPPEE Trucking operates 24/7/365 supporting our
                  customer’s needs with no fail. No mission is too
                  big, no mission is not critical! All shipments,
                  receives our highest level of service so that our
                  customers can focus on what they do best.
               </p>
            </article>
            <article className=' md:w-2/5 md:flex-none p-10'>
               <Image
                  src='/images/MBE.png'
                  width={300}
                  height={300}
                  alt='Minority Owned Business Certification'
               />
            </article>
            <article className=' md:w-2/5 md:flex-none p-10'>
               <Image
                  src='/images/VOB.png'
                  width={500}
                  height={500}
                  alt='Veteran Owned Business'
               />
            </article>
         </section>
         <section className=' grid grid-cols-12 grid-rows-6 gap-3 p-5'>
            <div className=' col-span-full text-center text-2xl font-semibold'>
               <h1>Our Customers:</h1>
            </div>
            <div className=' row-start-2 col-span-3'>
               <Image
                  src='/images/lear.svg'
                  width={300}
                  height={300}
                  alt='Lear'
               />
            </div>
            <div className=' row-start-4 col-start-2 col-span-3'>
               <Image
                  src='/images/chrobinson.png'
                  width={300}
                  height={300}
                  alt='C.H. Robinson'
               />
            </div>
            <div className=' row-start-3 col-start-5 col-span-3 row-span-1'>
               <Image
                  src='/images/pinnanclet.png'
                  width={300}
                  height={300}
                  unoptimized='true'
                  alt='Pinnancle'
               />
            </div>
            <div className=' row-start-5 col-start-6 col-span-3'>
               <Image
                  src='/images/amazon.png'
                  width={300}
                  height={300}
                  alt='Amazon Relay'
                  className=' bg-amazon rounded-md'
               />
            </div>
            <div className=' row-start-2 col-start-10 col-span-3'>
               <Image
                  src='/images/fetch_freight.png'
                  width={300}
                  height={300}
                  alt='Fetch Freight'
               />
            </div>
            <div className=' row-start-4 col-start-9 col-span-3 row-span-1'>
               <Image
                  src='/images/uber-freight.svg'
                  width={300}
                  height={300}
                  alt='Uber Freight'
               />
            </div>
            {/* <div className=''>
               <Image
                  src='/images/mobis.jpeg'
                  width={500}
                  height={500}
                  alt='Mobis'
               />
            </div> */}
         </section>
      </>
   );
};

export default About;
