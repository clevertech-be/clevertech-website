import { InvertedButton } from './button'

export default function Pricing() {
  return (
    <section className=''>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-md text-center mb-8 lg:mb-12'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-black'>
            Designed for business teams like yours
          </h2>
          <p className='mb-5 font-light text-black/80 sm:text-xl '>
            Here at Flowbite we focus on markets where technology, innovation, and capital can
            unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className='space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0'>
          <div className='flex flex-col p-6 mx-auto max-w-lg text-center text-black bg-white rounded-lg border shadow xl:p-8'>
            <h3 className='mb-4 text-2xl font-semibold'>Starter</h3>
            <p className='font-light text-black sm:text-lg '>
              Best option for personal use & for your next project.
            </p>
            <div className='flex justify-center items-baseline my-8'>
              <span className='mr-2 text-5xl font-extrabold'>$29</span>
            </div>
            <ul role='list' className='mb-8 space-y-4 text-left'>
              <li className='flex items-center space-x-3'>
                <svg
                  className='flex-shrink-0 w-5 h-5 text-green-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span>Individual configuration</span>
              </li>
              <li className='flex items-center space-x-3'>
                <svg
                  className='flex-shrink-0 w-5 h-5 text-green-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span>No setup, or hidden fees</span>
              </li>
              <li className='flex items-center space-x-3'>
                <svg
                  className='flex-shrink-0 w-5 h-5 text-green-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span>
                  Team size: <span className='font-semibold'>1 developer</span>
                </span>
              </li>
              <li className='flex items-center space-x-3'>
                <svg
                  className='flex-shrink-0 w-5 h-5 text-green-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span>
                  Premium support: <span className='font-semibold'>6 months</span>
                </span>
              </li>
              <li className='flex items-center space-x-3'>
                <svg
                  className='flex-shrink-0 w-5 h-5 text-green-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span>
                  Free updates: <span className='font-semibold'>6 months</span>
                </span>
              </li>
            </ul>
            <InvertedButton link={'/pricing'} message={'Get Started'} />
          </div>
          <div className='flex flex-col p-6 mx-auto max-w-lg text-center text-black bg-white rounded-lg border shadow xl:p-8'>
            <h3 className='mb-4 text-2xl font-semibold'>Company</h3>
            <p className='font-light text-black sm:text-lg '>
              Relevant for multiple users, extended & premium support.
            </p>
            <div className='flex justify-center items-baseline my-8'>
              <span className='mr-2 text-5xl font-extrabold'>$99</span>
            </div>
            <ul role='list' className='mb-8 space-y-4 text-left'>
              <li className='flex items-center space-x-3'>
                <svg
                  className='flex-shrink-0 w-5 h-5 text-green-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span>Individual configuration</span>
              </li>
              <li className='flex items-center space-x-3'>
                <svg
                  className='flex-shrink-0 w-5 h-5 text-green-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span>No setup, or hidden fees</span>
              </li>
              <li className='flex items-center space-x-3'>
                <svg
                  className='flex-shrink-0 w-5 h-5 text-green-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span>
                  Team size: <span className='font-semibold'>10 developers</span>
                </span>
              </li>
              <li className='flex items-center space-x-3'>
                <svg
                  className='flex-shrink-0 w-5 h-5 text-green-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span>
                  Premium support: <span className='font-semibold'>24 months</span>
                </span>
              </li>
              <li className='flex items-center space-x-3'>
                <svg
                  className='flex-shrink-0 w-5 h-5 text-green-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span>
                  Free updates: <span className='font-semibold'>24 months</span>
                </span>
              </li>
            </ul>
            <InvertedButton link={'/pricing'} message={'Get Started'} />
          </div>
          <div className='flex flex-col p-6 mx-auto max-w-lg text-center text-black bg-white rounded-lg border shadow xl:p-8'>
            <h3 className='mb-4 text-2xl font-semibold'>Enterprise</h3>
            <p className='font-light text-black sm:text-lg '>
              Best for large scale uses and extended redistribution rights.
            </p>
            <div className='flex justify-center items-baseline my-8'>
              <span className='mr-2 text-5xl font-extrabold'>$499</span>
            </div>
            <ul role='list' className='mb-8 space-y-4 text-left'>
              <li className='flex items-center space-x-3'>
                <svg
                  className='flex-shrink-0 w-5 h-5 text-green-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span>Individual configuration</span>
              </li>
              <li className='flex items-center space-x-3'>
                <svg
                  className='flex-shrink-0 w-5 h-5 text-green-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span>No setup, or hidden fees</span>
              </li>
              <li className='flex items-center space-x-3'>
                <svg
                  className='flex-shrink-0 w-5 h-5 text-green-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span>
                  Team size: <span className='font-semibold'>100+ developers</span>
                </span>
              </li>
              <li className='flex items-center space-x-3'>
                <svg
                  className='flex-shrink-0 w-5 h-5 text-green-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span>
                  Premium support: <span className='font-semibold'>36 months</span>
                </span>
              </li>
              <li className='flex items-center space-x-3'>
                <svg
                  className='flex-shrink-0 w-5 h-5 text-green-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span>
                  Free updates: <span className='font-semibold'>36 months</span>
                </span>
              </li>
            </ul>
            <InvertedButton link={'/pricing'} message={'Get Started'} />
          </div>
        </div>
      </div>
    </section>
  )
}
