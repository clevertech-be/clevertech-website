import React from 'react'
import Layout from '../container/layout'
import Image from 'next/image'
import ContactHandler from '../components/contact'

export default function Contact() {
  return (
    <Layout>
      <div className='w-full flex flex-row gap-10 justify-between text-start items-center text-white rounded-xl border-2 border-white/50 font-bold text-2xl'>
        <h1 className='border-r-2 border-white/50 p-5'>Get in touch</h1>
        <p className='p-5'>
          Have a question or an exciting project in mind? We wouldd love to hear from you. Let us
          connect and create something amazing.
        </p>
      </div>
      <div className='flex flex-col gap-4 justify-between text-center items-center text-white my-20'>
        <p className='text-2xl font-bold'>Let’s connect and create</p>
        <p className='text-base text-white/60'>
          Have a question or an exciting project in mind? We wouldd love to hear from you. Let us
          connect and create something amazing.
        </p>
      </div>
      <div className='flex flex-col gap-10 justify-center items-center mx-auto px-5 md:px-20'>
        <Image
          src='/images/contact.png'
          width={1000}
          height={500}
          alt='About'
          className='rounded-xl'
          loading='lazy'
        />
        <p className='text-2xl font-bold'>Get in touch</p>
        <ContactHandler />
      </div>
    </Layout>
  )
}
