export default function Faq() {
  return (
    <section className=''>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 '>
        <h2 className='mb-6 lg:mb-8 text-3xl lg:text-4xl tracking-tight font-extrabold text-center text-black'>
          Frequently asked questions
        </h2>
        <div className='mx-auto max-w-screen-md'>
          <div
            id='accordion-flush'
            data-accordion='collapse'
            data-active-classes='text-black'
            data-inactive-classes='text-black/60'
          >
            <h2 id='accordion-flush-heading-1'>
              <button
                type='button'
                className='flex justify-between items-center py-5 w-full font-medium text-left text-black border-b border-black'
                data-accordion-target='#accordion-flush-body-1'
                aria-expanded='true'
                aria-controls='accordion-flush-body-1'
              >
                <span>Can I use Flowbite in open-source projects?</span>
                <svg
                  data-accordion-icon=''
                  className='text-primary-600 w-6 h-6 rotate-180 shrink-0'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id='accordion-flush-body-1'
              className=''
              aria-labelledby='accordion-flush-heading-1'
            >
              <div className='py-5 border-b border-black'>
                <p className='mb-2 text-black'>
                  Flowbite is an open-source library of interactive components built on top of
                  Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
                </p>
                <p className='text-black'>
                  Check out this guide to learn how to{' '}
                  <a href='#' className='text-primary-600 underline underline-offset-4'>
                    get started
                  </a>{' '}
                  and start developing websites even faster with components on top of Tailwind CSS.
                </p>
              </div>
            </div>
            <h2 id='accordion-flush-heading-2'>
              <button
                type='button'
                className='flex justify-between items-center py-5 w-full font-medium text-left text-black/60 border-b border-black'
                data-accordion-target='#accordion-flush-body-2'
                aria-expanded='false'
                aria-controls='accordion-flush-body-2'
              >
                <span>Is there a Figma file available?</span>
                <svg
                  data-accordion-icon=''
                  className='text-primary-600 w-6 h-6 shrink-0'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id='accordion-flush-body-2'
              className='hidden'
              aria-labelledby='accordion-flush-heading-2'
            >
              <div className='py-5 border-b border-black'>
                <p className='mb-2 text-black'>
                  Flowbite is first conceptualized and designed using the Figma software so
                  everything you see in the library has a design equivalent in our Figma file.
                </p>
                <p className='text-black'>
                  Check out the{' '}
                  <a href='#' className='text-primary-600 underline underline-offset-4'>
                    Figma design system
                  </a>{' '}
                  based on the utility classes from Tailwind CSS and components from Flowbite.
                </p>
              </div>
            </div>
            <h2 id='accordion-flush-heading-3'>
              <button
                type='button'
                className='flex justify-between items-center py-5 w-full font-medium text-left text-black/60 border-b border-black'
                data-accordion-target='#accordion-flush-body-3'
                aria-expanded='false'
                aria-controls='accordion-flush-body-3'
              >
                <span>What are the differences between Flowbite and Tailwind UI?</span>
                <svg
                  data-accordion-icon=''
                  className='text-primary-600 w-6 h-6 shrink-0'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id='accordion-flush-body-3'
              className='hidden'
              aria-labelledby='accordion-flush-heading-3'
            >
              <div className='py-5 border-b border-black'>
                <p className='mb-2 text-black'>
                  The main difference is that the core components from Flowbite are open source
                  under the MIT license, whereas Tailwind UI is a paid product. Another difference
                  is that Flowbite relies on smaller and standalone components, whereas Tailwind UI
                  offers sections of pages.
                </p>
                <p className='mb-2 text-black'>
                  However, we actually recommend using both Flowbite, Flowbite Pro, and even
                  Tailwind UI as there is no technical reason stopping you from using the best of
                  two worlds.
                </p>
                <p className='mb-2 text-black'>Learn more about these technologies:</p>
                <ul className='pl-5 list-disc text-black'>
                  <li>
                    <a href='#' className='text-primary-600 underline underline-offset-4'>
                      Flowbite Pro
                    </a>
                  </li>
                  <li>
                    <a href='#' className='text-primary-600 underline underline-offset-4'>
                      Tailwind UI
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h2 id='accordion-flush-heading-4'>
              <button
                type='button'
                className='flex justify-between items-center py-5 w-full font-medium text-left text-black/60 border-b border-black'
                data-accordion-target='#accordion-flush-body-4'
                aria-expanded='false'
                aria-controls='accordion-flush-body-4'
              >
                <span>What about browser support?</span>
                <svg
                  data-accordion-icon=''
                  className='text-primary-600 w-6 h-6 shrink-0'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id='accordion-flush-body-4'
              className='hidden'
              aria-labelledby='accordion-flush-heading-4'
            >
              <div className='py-5 border-b border-black'>
                <p className='mb-2 text-black'>
                  The main difference is that the core components from Flowbite are open source
                  under the MIT license, whereas Tailwind UI is a paid product. Another difference
                  is that Flowbite relies on smaller and standalone components, whereas Tailwind UI
                  offers sections of pages.
                </p>
                <p className='mb-2 text-black'>
                  However, we actually recommend using both Flowbite, Flowbite Pro, and even
                  Tailwind UI as there is no technical reason stopping you from using the best of
                  two worlds.
                </p>
                <p className='mb-2 text-black'>Learn more about these technologies:</p>
                <ul className='pl-5 list-disc text-black'>
                  <li>
                    <a href='#' className='text-primary-600 underline underline-offset-4'>
                      Flowbite Pro
                    </a>
                  </li>
                  <li>
                    <a href='#' className='text-primary-600 underline underline-offset-4'>
                      Tailwind UI
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
