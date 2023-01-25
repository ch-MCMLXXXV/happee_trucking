import { Label, TextInput, Button, Textarea } from 'flowbite-react';
import { HiEnvelope } from 'react-icons/hi2';
import Image from 'next/image';

const Contact = () => {
   return (
      <>
         <section className=' p-10  bg-blue-600'>
            <div className=' text-center text-6xl text-white font-bold'>
               <h1>Contact Us</h1>
            </div>
         </section>
         <section className=' p-10'>
            <div className=' text-center text-3xl'>
               <h2>
                  {' '}
                  Please fill out the form below if you have questions
                  about our service!
               </h2>
            </div>
            <div className=' text-center text-2xl p-3'>
               <span>THANKS!</span>
            </div>
         </section>

         <section className=' p-5'>
            <form className='flex flex-wrap'>
               <div className=' w-2/5 flex-none p-2'>
                  <div className=' mb-2 block'>
                     <Label htmlFor='firstname' value='First Name' />
                  </div>
                  <TextInput
                     id='firstname'
                     name='firstname'
                     type='text'
                     placeholder='First Name'
                  />
               </div>
               <div className=' w-2/5 flex-none p-2'>
                  <div className=' mb-2 block'>
                     <Label htmlFor='lastname' value='Last Name' />
                  </div>
                  <TextInput
                     id='lastname'
                     name='lastname'
                     type='text'
                     placeholder='Last Name'
                  />
               </div>
               <div className=' w-2/5 flex-none p-2'>
                  <div className=' mb-2 block'>
                     <Label htmlFor='email' value='Email' />
                  </div>
                  <TextInput
                     id='email'
                     name='email'
                     type='email'
                     placeholder='your@email.com'
                  />
               </div>
               <div className=' w-2/6 flex-none p-2'>
                  <div className=' mb-2 block'>
                     <Label htmlFor='telephone' value='Phone' />
                  </div>
                  <TextInput
                     id='telephone'
                     name='telephone'
                     type='tel'
                     placeholder='(000) 000-0000'
                     pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                  />
               </div>
               <div className=' w-2/5 flex-none p-2'>
                  <div className=' mb-2 block'>
                     <Label htmlFor='message' value='Message' />
                  </div>
                  <Textarea
                     id='message'
                     name='message'
                     required={true}
                     rows={4}
                     placeholder='Your Message'
                  />
               </div>
               <div>
                  <div className=' w-2/5 flex-none'>
                     <Image
                        width={500}
                        height={500}
                        alt='Happee Trucking Logo'
                     />
                  </div>
               </div>
               <div className=' w-1/2 flex-none p-2'>
                  <Button type='submit' value='Submit'>
                     Submit
                  </Button>
               </div>
            </form>
         </section>
      </>
   );
};

export default Contact;
