import React from 'react'
import { useTranslate } from '../../hooks/useTranslate'
import Button from '../button'
import { useRouter } from 'next/router'

export default function NewsletterForm({ formSuccess, handleSubmit, formError }) {
  const { t } = useTranslate()
  const router = useRouter()
  return (
    <form
      method='POST'
      onSubmit={handleSubmit}
      name='newsletter'
      netlify-honeypot='bot-field'
      action={router.pathname}
      data-netlify='true'
      className=''
    >
      <div className='flex gap-2 flex-col md:flex-row justify-between'>
        <input type='hidden' name='form-name' value='newsletter' />
        <p className='hidden'>
          <label>
            Don’t fill this out if you’re human: <input name='bot-field' />
          </label>
        </p>
        <input
          type='email'
          name='email'
          placeholder={t('newsletter.email.placeholder')}
          className='rounded-xl border-2 bg-primary-500 text-white focus:border-white focus:ring-white border-white placeholder:text-white p-5'
        />
        <Button message={t('newsletter.button')} type='submit' />
      </div>
      {formSuccess && (
        <div className='mt-4 bg-white p-2 rounded-lg text-green-500 transition-all'>
          {formSuccess.message}
        </div>
      )}
      {formError && (
        <div className='mt-4 bg-white p-2 rounded-lg text-red-500 transition-all'>
          {formError.message}
        </div>
      )}
    </form>
  )
}
