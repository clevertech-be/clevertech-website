export default function Blog() {
  return (
    <section className=''>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm text-center mb-8 lg:mb-16'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-white'>Our Blog</h2>
          <p className='font-light text-white/80 sm:text-xl '>
            We use an agile approach to test assumptions and connect with the needs of your audience
            early and often.
          </p>
        </div>
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          <article className='p-4 bg-white rounded-lg shadow-md'>
            <a href='#'>
              <img
                className='mb-5 rounded-lg'
                src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png'
                alt='office laptop working'
              />
            </a>
            <span className='bg-primary-800 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded '>
              Article
            </span>
            <h2 className='my-2 text-2xl font-bold tracking-tight text-black'>
              <a href='#'>Our first office</a>
            </h2>
            <p className='mb-4 font-light text-black/80'>
              Over the past year, Volosoft has undergone many changes! After months of preparation
              and some hard work, we moved to our new office.
            </p>
            <div className='flex items-center space-x-4'>
              <img
                className='w-10 h-10 rounded-full'
                src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png'
                alt='Jese Leos avatar'
              />
              <div className='font-medium text-black'>
                <div>Jese Leos</div>
                <div className='text-sm font-normal text-black/80'>Aug 15, 2021 · 16 min read</div>
              </div>
            </div>
          </article>
          <article className='p-4 bg-white rounded-lg shadow-md'>
            <a href='#'>
              <img
                className='mb-5 rounded-lg'
                src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-hq.png'
                alt='Google HQ'
              />
            </a>
            <span className='bg-primary-800 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded '>
              Article
            </span>
            <h2 className='my-2 text-2xl font-bold tracking-tight text-black'>
              <a href='#'>We partnered up with Google</a>
            </h2>
            <p className='mb-4 font-light text-black/80'>
              Over the past year, Volosoft has undergone many changes! After months of preparation
              and some hard work, we moved to our new office.
            </p>
            <div className='flex items-center space-x-4'>
              <img
                className='w-10 h-10 rounded-full'
                src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png'
                alt='Roberta Casas avatar'
              />
              <div className='font-medium text-black'>
                <div>Roberta Casas</div>
                <div className='text-sm font-normal text-black/80'>Aug 15, 2021 · 16 min read</div>
              </div>
            </div>
          </article>
          <article className='p-4 bg-white rounded-lg shadow-md'>
            <a href='#'>
              <img
                className='mb-5 rounded-lg'
                src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png'
                alt='office laptops'
              />
            </a>
            <span className='bg-primary-800 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded '>
              Article
            </span>
            <h2 className='my-2 text-2xl font-bold tracking-tight text-black'>
              <a href='#'>Our first project with React</a>
            </h2>
            <p className='mb-4 font-light text-black/80'>
              Over the past year, Volosoft has undergone many changes! After months of preparation
              and some hard work, we moved to our new office.
            </p>
            <div className='flex items-center space-x-4'>
              <img
                className='w-10 h-10 rounded-full'
                src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png'
                alt='Sofia McGuire avatar'
              />
              <div className='font-medium text-black'>
                <div>Sofia McGuire</div>
                <div className='text-sm font-normal text-black/80'>Aug 15, 2021 · 16 min read</div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
