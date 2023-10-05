import Image from 'next/image'
import Newsletter from './newsletter'

export default function FeatureList() {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto space-y-12 max-w-screen-xl lg:space-y-20 sm:py-16 lg:px-6'>
        <div className='gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16'>
          <div className='text-pblack sm:text-lg'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-primary-600'>
              Work with tools you already use
            </h2>
            <p className='mb-8 font-light lg:text-xl'>
              Deliver great service experiences fast - without the complexity of traditional ITSM
              solutions.Accelerate critical development work, eliminate toil, and deploy changes
              with ease.
            </p>
            <ul role='list' className='pt-8 my-7 space-y-5 border-t border-primary-600'>
              <li className='flex space-x-3'>
                <Image
                  loading='lazy'
                  width={10}
                  height={10}
                  alt='Contact hint illustration'
                  src={'/icons/hint.svg'}
                />
                <span className='text-base font-medium leading-tight'>
                  Continuous integration and deployment
                </span>
              </li>
              <li className='flex space-x-3'>
                <Image
                  loading='lazy'
                  width={10}
                  height={10}
                  alt='Contact hint illustration'
                  src={'/icons/hint.svg'}
                />
                <span className='text-base font-medium leading-tight'>Development workflow</span>
              </li>
              <li className='flex space-x-3'>
                <Image
                  loading='lazy'
                  width={10}
                  height={10}
                  alt='Contact hint illustration'
                  src={'/icons/hint.svg'}
                />
                <span className='text-base font-medium leading-tight'>Knowledge management</span>
              </li>
            </ul>
            <p className='mb-8 font-light lg:text-xl'>
              Deliver great service experiences fast - without the complexity of traditional ITSM
              solutions.
            </p>
          </div>
          <img
            className='hidden mb-4 w-full lg:mb-0 lg:flex rounded-lg'
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-1.png'
            alt='office feature image'
          />
        </div>
        <div className='gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16'>
          <img
            className='hidden mb-4 w-full lg:mb-0 lg:flex rounded-lg'
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-1.png'
            alt='office feature image'
          />
          <div className='text-pblack sm:text-lg'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-primary-600'>
              Work with tools you already use
            </h2>
            <p className='mb-8 font-light lg:text-xl'>
              Deliver great service experiences fast - without the complexity of traditional ITSM
              solutions.Accelerate critical development work, eliminate toil, and deploy changes
              with ease.
            </p>
            <ul role='list' className='pt-8 my-7 space-y-5 border-t border-primary-600'>
              <li className='flex space-x-3'>
                <Image
                  loading='lazy'
                  width={10}
                  height={10}
                  alt='Contact hint illustration'
                  src={'/icons/hint.svg'}
                />
                <span className='text-base font-medium leading-tight'>
                  Continuous integration and deployment
                </span>
              </li>
              <li className='flex space-x-3'>
                <Image
                  loading='lazy'
                  width={10}
                  height={10}
                  alt='Contact hint illustration'
                  src={'/icons/hint.svg'}
                />
                <span className='text-base font-medium leading-tight'>Development workflow</span>
              </li>
              <li className='flex space-x-3'>
                <Image
                  loading='lazy'
                  width={10}
                  height={10}
                  alt='Contact hint illustration'
                  src={'/icons/hint.svg'}
                />
                <span className='text-base font-medium leading-tight'>Knowledge management</span>
              </li>
            </ul>
            <p className='mb-8 font-light lg:text-xl'>
              Deliver great service experiences fast - without the complexity of traditional ITSM
              solutions.
            </p>
          </div>
        </div>
        <Newsletter />
        <div className='gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16'>
          <div className='text-pblack sm:text-lg'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-primary-600'>
              Work with tools you already use
            </h2>
            <p className='mb-8 font-light lg:text-xl'>
              Deliver great service experiences fast - without the complexity of traditional ITSM
              solutions.Accelerate critical development work, eliminate toil, and deploy changes
              with ease.
            </p>
            <ul role='list' className='pt-8 my-7 space-y-5 border-t border-primary-600'>
              <li className='flex space-x-3'>
                <Image
                  loading='lazy'
                  width={10}
                  height={10}
                  alt='Contact hint illustration'
                  src={'/icons/hint.svg'}
                />
                <span className='text-base font-medium leading-tight'>
                  Continuous integration and deployment
                </span>
              </li>
              <li className='flex space-x-3'>
                <Image
                  loading='lazy'
                  width={10}
                  height={10}
                  alt='Contact hint illustration'
                  src={'/icons/hint.svg'}
                />
                <span className='text-base font-medium leading-tight'>Development workflow</span>
              </li>
              <li className='flex space-x-3'>
                <Image
                  loading='lazy'
                  width={10}
                  height={10}
                  alt='Contact hint illustration'
                  src={'/icons/hint.svg'}
                />
                <span className='text-base font-medium leading-tight'>Knowledge management</span>
              </li>
            </ul>
            <p className='mb-8 font-light lg:text-xl'>
              Deliver great service experiences fast - without the complexity of traditional ITSM
              solutions.
            </p>
          </div>
          <img
            className='hidden mb-4 w-full lg:mb-0 lg:flex rounded-lg'
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-1.png'
            alt='office feature image'
          />
        </div>
        <div className='gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16'>
          <img
            className='hidden mb-4 w-full lg:mb-0 lg:flex rounded-lg'
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-1.png'
            alt='office feature image'
          />
          <div className='text-pblack sm:text-lg'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-primary-600'>
              Work with tools you already use
            </h2>
            <p className='mb-8 font-light lg:text-xl'>
              Deliver great service experiences fast - without the complexity of traditional ITSM
              solutions.Accelerate critical development work, eliminate toil, and deploy changes
              with ease.
            </p>
            <ul role='list' className='pt-8 my-7 space-y-5 border-t border-primary-600'>
              <li className='flex space-x-3'>
                <Image
                  loading='lazy'
                  width={10}
                  height={10}
                  alt='Contact hint illustration'
                  src={'/icons/hint.svg'}
                />
                <span className='text-base font-medium leading-tight'>
                  Continuous integration and deployment
                </span>
              </li>
              <li className='flex space-x-3'>
                <Image
                  loading='lazy'
                  width={10}
                  height={10}
                  alt='Contact hint illustration'
                  src={'/icons/hint.svg'}
                />
                <span className='text-base font-medium leading-tight'>Development workflow</span>
              </li>
              <li className='flex space-x-3'>
                <Image
                  loading='lazy'
                  width={10}
                  height={10}
                  alt='Contact hint illustration'
                  src={'/icons/hint.svg'}
                />
                <span className='text-base font-medium leading-tight'>Knowledge management</span>
              </li>
            </ul>
            <p className='mb-8 font-light lg:text-xl'>
              Deliver great service experiences fast - without the complexity of traditional ITSM
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
