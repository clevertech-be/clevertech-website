export default function Testimonials() {
  return (
    <section className='bg-primary-800 p-5 rounded-lg'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm mb-8 lg:mb-16'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-white'>Testimonials</h2>
          <p className='font-light text-white/80 sm:text-xl '>
            Explore the whole collection of open-source web components and elements built with the
            utility classes from Tailwind
          </p>
        </div>
        <div id='testimonial-carousel' className='relative' data-carousel='slide'>
          <div className='overflow-x-hidden overflow-y-visible relative mx-auto max-w-screen-md h-52 rounded-lg sm:h-48'>
            <figure className='hidden mx-auto w-full max-w-screen-md' data-carousel-item>
              <blockquote>
                <p className='text-lg font-medium text-white'>
                  Flowbite is just awesome. It contains tons of predesigned components and pages
                  starting from login screen to complex dashboard. Perfect choice for your next SaaS
                  application.
                </p>
              </blockquote>
              <figcaption className='flex justify-center items-center mt-6 space-x-3'>
                <img
                  className='w-6 h-6 rounded-full'
                  src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png'
                  alt='profile picture'
                />
                <div className='flex items-center divide-x-2 divide-white'>
                  <div className='pr-3 font-medium text-white'>Bonnie Green</div>
                  <div className='pl-3 text-sm font-light text-white/80 '>
                    Web developer at Google
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className='hidden mx-auto w-full max-w-screen-md' data-carousel-item>
              <blockquote>
                <p className='text-lg font-medium text-white'>
                  As someone who mainly designs in the browser, I have been a casual user of Figma,
                  but as soon as I saw and started playing with FlowBite my mind was blown and
                  became so productive.
                </p>
              </blockquote>
              <figcaption className='flex justify-center items-center mt-6 space-x-3'>
                <img
                  className='w-6 h-6 rounded-full'
                  src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png'
                  alt='profile picture'
                />
                <div className='flex items-center divide-x-2 divide-white'>
                  <div className='pr-3 font-medium text-white'>Helene Engels</div>
                  <div className='pl-3 text-sm font-light text-white/80 '>
                    Creative designer at Adobe
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className='hidden mx-auto w-full max-w-screen-md' data-carousel-item>
              <blockquote>
                <p className='text-lg font-medium text-white'>
                  Flowbite has code in one place and I am not joking when I say it took me a matter
                  of minutes to copy the code, customise it and integrate within a Laravel + Vue
                  application.
                </p>
              </blockquote>
              <figcaption className='flex justify-center items-center mt-6 space-x-3'>
                <img
                  className='w-6 h-6 rounded-full'
                  src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png'
                  alt='profile picture'
                />
                <div className='flex items-center divide-x-2 divide-white'>
                  <div className='pr-3 font-medium text-white'>Neil Sims</div>
                  <div className='pl-3 text-sm font-light text-white/80 '>CTO at Microsoft</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className='flex justify-center items-center'>
            <button
              type='button'
              className='flex justify-center items-center mr-4 h-full cursor-pointer group focus:outline-none'
              data-carousel-prev
            >
              <span className='text-white/80  hover:text-white'>
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span className='hidden'>Previous</span>
              </span>
            </button>
            <button
              type='button'
              className='flex justify-center items-center h-full cursor-pointer group focus:outline-none'
              data-carousel-next
            >
              <span className='text-white/80  hover:text-white'>
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span className='hidden'>Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
