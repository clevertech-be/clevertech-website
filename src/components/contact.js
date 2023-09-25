import Button from './button'

export default function Contact() {
  return (
    <section className='from-primary-600 to-primary-800 bg-gradient-to-tr p-5 rounded-lg'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 flex-col flex gap-4'>
        <div className='px-4 mx-auto max-w-screen-sm text-center lg:px-6 mb-8 lg:mb-16'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-white'>Contact Us</h2>
          <p className='font-light text-white/90  sm:text-xl'>
            We use an agile approach to test assumptions and connect with the needs of your audience
            early and often.
          </p>
        </div>
        <div className='flex items-center text-left'>
          <form
            action='#'
            className='grid grid-cols-1 gap-8 mx-auto max-w-screen-md sm:grid-cols-2'
          >
            <div className='flex flex-col gap-2 items-left'>
              <label htmlFor='first-name' className='block mb-2 text-sm font-bold text-white'>
                First Name
              </label>
              <input
                type='text'
                id='first-name'
                className='block w-full text-sm rounded-lg shadow-sm border-2 bg-primary-500 text-white focus:border-white focus:ring-white border-white placeholder:text-white'
                placeholder='Bonnie'
                required
              />
            </div>
            <div className='flex flex-col gap-2 items-left'>
              <label htmlFor='last-name' className='block mb-2 text-sm font-bold text-white'>
                Last Name
              </label>
              <input
                type='text'
                id='last-name'
                className='block w-full text-sm rounded-lg shadow-sm border-2 bg-primary-500 text-white focus:border-white focus:ring-white border-white placeholder:text-white'
                placeholder='Green'
                required
              />
            </div>
            <div className='flex flex-col gap-2 items-left'>
              <label htmlFor='email' className='block mb-2 text-sm font-bold text-white'>
                Your email
              </label>
              <input
                type='email'
                id='email'
                className='shadow-sm border-2 text-sm rounded-lg bg-primary-500 text-white focus:border-white focus:ring-white border-white placeholder:text-white'
                placeholder='name@flowbite.com'
                required
              />
            </div>
            <div className='flex flex-col gap-2 items-left'>
              <label htmlFor='phone-number' className='block mb-2 text-sm font-bold text-white'>
                Phone Number
              </label>
              <input
                type='number'
                id='phone-number'
                className='block w-full text-sm rounded-lg shadow-sm border-2 bg-primary-500 text-white focus:border-white focus:ring-white border-white placeholder:text-white'
                placeholder='+12 345 6789'
                required
              />
            </div>
            <div className='sm:col-span-2'>
              <label htmlFor='message' className='block mb-2 text-sm font-bold text-white '>
                Your message
              </label>
              <textarea
                id='message'
                rows='6'
                className='block p-2.5 w-full text-sm rounded-lg shadow-sm border-2 bg-primary-500 text-white focus:border-white focus:ring-white border-white placeholder:text-white'
                placeholder='Leave a comment...'
              ></textarea>
              <p className='mt-4 text-sm text-white/90'>
                By submitting this form you agree to our{' '}
                <a href='#' className='underline underline-offset-4 text-white'>
                  terms and conditions
                </a>{' '}
                and our{' '}
                <a href='#' className='underline underline-offset-4 text-white'>
                  privacy policy
                </a>{' '}
                which explains how we may collect, use and disclose your personal information
                including to third parties.
              </p>
            </div>
            <Button message={'Send message'} className={'sm:col-span-2'} />
          </form>
        </div>
        <div className='grid grid-cols-1 col-span-1 gap-8 text-center md:grid-cols-3 mt-20'>
          <div>
            <div className='flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-white rounded-lg lg:h-16 lg:w-16'>
              <svg
                className='w-5 h-5 text-primary-600'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </div>
            <p className='text-white/90 '>
              Call us to speak to a member of our team. We are always happy to help.
            </p>
            <p className='font-semibold text-white'>+1 (646) 786-5060</p>
          </div>
          <div>
            <div className='flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-white rounded-lg lg:h-16 lg:w-16'>
              <svg
                className='w-5 h-5 text-primary-600'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </div>
            <p className='text-white/90 '>
              SILVER LAKE, United States 1941 Late Avenue <br /> Zip Code/Postal code:03875
            </p>
          </div>
          <div>
            <div className='flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-white rounded-lg lg:h-16 lg:w-16'>
              <svg
                className='w-5 h-5 text-primary-600'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z'></path>
              </svg>
            </div>
            <p className='mb-3 text-white/90 '>
              Call us to speak to a member of our team. We are always happy to help.
            </p>
            <p className='font-semibold text-white'>+1 (646) 786-5060</p>
          </div>
        </div>
      </div>
    </section>
  )
}
