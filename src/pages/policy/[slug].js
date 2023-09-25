import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import { useRouter } from 'next/router'
import { policies } from '../../api/policies'

export default function PolicyDetail() {
  const router = useRouter()
  const [policy, setPolicy] = useState()

  useEffect(() => {
    if (router.query.slug?.length > 0) {
      setPolicy(policies.find((item) => item.name === router.query.slug))
    }
  }, [router.query])

  return <Layout>{policy && <h1 className='text-xl md:text-4xl font-bold'>{}</h1>}</Layout>
}
