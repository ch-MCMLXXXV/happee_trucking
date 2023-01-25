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
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <main>
            <section>
               <Header />
            </section>
            <section className=' flex flex-wrap p-28 justify-center'>
               <article className=' w-2/5 flex-none p-3'>
                  <h3 className=' tracking-tight font-bold text-right text-2xl'>
                     Who We Are ?
                  </h3>
                  <p className=' mt-2 tracking-tight text-right'>
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
               <article className=' w-2/5 flex-none p-3 bg-red-500 static z-0'></article>
               <Image
                  src='/images/trucking.jpeg'
                  width={200}
                  height={280}
                  alt='handshake'
                  className=' relative z-auto'
               />
            </section>
         </main>
      </>
   );
}
