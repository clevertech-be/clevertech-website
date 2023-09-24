export default function Maintenance() {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='grid-cols-2 gap-8 content-center py-8 px-4 mx-auto max-w-screen-xl md:grid lg:py-16 lg:px-6'>
        <div className='self-center'>
          <h1 className='mb-4 text-2xl font-bold text-primary-600 dark:text-primary-500'>
            500 Internal Error
          </h1>
          <p className='mb-4 text-3xl tracking-tight font-bold text-gray-900 lg:mb-10 md:text-4xl dark:text-white'>
            Whoops! That page doesn’t exist.
          </p>
          <p className='mb-4 text-gray-500 dark:text-gray-400'>Here are some helpful links:</p>
          <ul className='flex items-center space-x-4 text-gray-500 dark:text-gray-400'>
            <li>
              <a href='#' className='underline hover:text-gray-900 dark:hover:text-white'>
                Support
              </a>
            </li>
            <li>
              <a href='#' className='underline hover:text-gray-900 dark:hover:text-white'>
                Search
              </a>
            </li>
          </ul>
        </div>
        <img
          className='hidden mx-auto mb-4 md:flex'
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/500/500.svg'
          alt='500 Server Error'
        />
      </div>
    </section>
  )
}
