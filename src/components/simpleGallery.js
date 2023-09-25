export default function SimpleGallery() {
  return (
    <section className=''>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:px-12 sm:text-center lg:py-16'>
        <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-white'>
          We did not reinvent the wheel
        </h2>
        <p className='font-light text-white/80 sm:text-lg md:px-20 lg:px-38 xl:px-48'>
          We are strategists, designers and developers. Innovators and problem solvers. Small enough
          to be simple and quick, but big enough to deliver the scope you want at the pace you need.
        </p>
        <div className='gap-4 mt-8 sm:grid sm:grid-cols-4 sm:mt-12'>
          <img
            className='col-span-2 mb-4 sm:mb-0 rounded-lg'
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-1.png'
            alt='content gallery 1'
          />
          <img
            className='hidden col-span-1 sm:block rounded-lg'
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-2.png'
            alt='content gallery 2'
          />
          <img
            className='hidden col-span-1 sm:block rounded-lg'
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png'
            alt='content gallery 3'
          />
          <img
            className='hidden col-span-1 sm:block rounded-lg'
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-4.png'
            alt='content gallery 4'
          />
          <img
            className='col-span-2 rounded-lg'
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-5.png'
            alt='content gallery 5'
          />
          <img
            className='hidden col-span-1 sm:block rounded-lg'
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-6.png'
            alt='content gallery 6'
          />
        </div>
      </div>
    </section>
  )
}
