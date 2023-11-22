import { cn } from '../utils/cn'

export default function CTA({ title, description, children }) {
  return (
    <section
      className={cn(
        `w-full bg-[url('/images/cta.png')] bg-no-repeat bg-cover bg-center bg-background-900/50 bg-blend-lighten rounded-xl`,
        'my-10',
      )}
    >
      <div className='p-10 md:py-40 flex flex-col justify-center items-center gap-10 text-white text-center'>
        <h1 className='text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl'>
          {title}
        </h1>
        <p className='text-2xl'>{description}</p>
        <div className=''>{children}</div>
      </div>
    </section>
  )
}
