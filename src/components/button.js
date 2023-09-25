import Link from 'next/link'
import React from 'react'

export default function Button({ message, link, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`${className} rounded-xl px-4 py-3 transition-all ease-in-out duration-300 hover:text-white hover:bg-transparent bg-white text-black font-bold text:xs md:text-md leading-normal border-2 border-white`}
      type='submit'
    >
      {link ? <Link href={link}>{message}</Link> : <span>{message}</span>}
    </button>
  )
}

export function InvertedButton({ message, link, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`${className} rounded-xl px-4 py-3 transition-all ease-in-out duration-300 hover:bg-primary-900 bg-primary-600 text-white font-bold text:xs md:text-md leading-normal border-2 border-primary-600 hover:border-primary-900`}
      type='submit'
    >
      {link ? <Link href={link}>{message}</Link> : <span>{message}</span>}
    </button>
  )
}
