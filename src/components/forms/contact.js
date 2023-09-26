import React from 'react'
import { useTranslate } from '../../hooks/useTranslate'
import Button from '../button'

export default function ContactForm({ handleSubmit }) {
  const { t } = useTranslate()
  return (
    <form
      method='POST'
      onSubmit={handleSubmit}
      name='contact'
      netlify='true'
      className='grid grid-cols-1 gap-8 mx-auto max-w-screen-md sm:grid-cols-2'
    >
      <input type='hidden' name='form-name' value='contact' />
      <div className='flex flex-col gap-2 items-left'>
        <label htmlFor='first-name' className='block mb-2 text-sm font-bold text-white'>
          {t('contact.form.firstName')}
        </label>
        <input
          type='text'
          name='first-name'
          className='block w-full text-sm rounded-lg shadow-sm border-2 bg-primary-500 text-white focus:border-white focus:ring-white border-white placeholder:text-white'
          placeholder='Bonnie'
          required
        />
      </div>
      <div className='flex flex-col gap-2 items-left'>
        <label htmlFor='last-name' className='block mb-2 text-sm font-bold text-white'>
          {t('contact.form.lastName')}
        </label>
        <input
          type='text'
          name='last-name'
          className='block w-full text-sm rounded-lg shadow-sm border-2 bg-primary-500 text-white focus:border-white focus:ring-white border-white placeholder:text-white'
          placeholder='Green'
          required
        />
      </div>
      <div className='flex flex-col gap-2 items-left'>
        <label htmlFor='email' className='block mb-2 text-sm font-bold text-white'>
          {t('contact.form.email')}
        </label>
        <input
          type='email'
          name='email'
          className='shadow-sm border-2 text-sm rounded-lg bg-primary-500 text-white focus:border-white focus:ring-white border-white placeholder:text-white'
          placeholder='name@clevertech.be'
          required
        />
      </div>
      <div className='flex flex-col gap-2 items-left'>
        <label htmlFor='phone-number' className='block mb-2 text-sm font-bold text-white'>
          {t('contact.form.phoneNumber')}
        </label>
        <input
          type='number'
          name='phone-number'
          className='block w-full text-sm rounded-lg shadow-sm border-2 bg-primary-500 text-white focus:border-white focus:ring-white border-white placeholder:text-white'
          placeholder='+12 345 6789'
          required
        />
      </div>
      <div className='sm:col-span-2'>
        <label htmlFor='message' className='block mb-2 text-sm font-bold text-white '>
          {t('contact.form.message')}
        </label>
        <textarea
          name='message'
          rows='6'
          className='block p-2.5 w-full text-sm rounded-lg shadow-sm border-2 bg-primary-500 text-white focus:border-white focus:ring-white border-white placeholder:text-white'
          placeholder='...'
        ></textarea>
        <p className='mt-4 text-sm text-white/90'>{t('contact.form.privacy')}</p>
      </div>
      <Button message={t('contact.form.submit')} className={'sm:col-span-2'} />
    </form>
  )
}