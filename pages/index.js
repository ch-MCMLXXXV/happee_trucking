import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
   return (
      <>
         <Head>
            <title>Happee Trucking</title>
            <meta name='description' content='BuiltbyCHarris' />
            <meta
               name='viewport'
               content='width=device-width, initial-scale=1'
            />
            <link rel='icon' href='/images/happee.webp' />
         </Head>
         <main>
            <section>
               <Header />
            </section>
            <section className='p-10 md:flex md:justify-center md:p-28'>
               <article className='p-5 md:w-2/5 md:flex-none'>
                  <h3 className='text-2xl font-bold tracking-tight text-center underline decoration-blue-600 underline-offset-8 decoration-4 md:text-right'>
                     Who We Are ?
                  </h3>
                  <p className='mt-4 tracking-tight text-center md:text-right'>
                     At HAPPEE Trucking, you can rely on the HAPPEE
                     Trucking expedite team to get your shipment where
                     it needs to be and fast! When minutes count, our
                     exclusive-use equipment can be the best method
                     for all your expedited shipments. We take care of
                     all the details, from pick-up through final
                     delivery, keeping you informed every step of the
                     way.
                  </p>
               </article>
               <article className='flex-none p-3 '>
                  <Image
                     src='/images/shipyard.avif'
                     width={400}
                     height={400}
                     unoptimized={true}
                     alt='shipyard'
                     className='shadow-xl shadow-blue-600 rounded-xl'
                  />
               </article>
            </section>
         </main>
      </>
   );
}
