import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import { useTranslate } from '../../hooks/useTranslate'
import { useRouter } from 'next/router'
import { allProjects } from '../../api/projects'
import Container from '../../components/container'
import Image from 'next/image'
import Newsletter from '../../components/newsletter'
import Heading from '../../components/heading'

export default function ProjectSlug() {
  const router = useRouter()
  const { t } = useTranslate()
  const [project, setProject] = useState()

  useEffect(() => {
    if (router.query.slug?.length > 0) {
      setProject(allProjects.find((item) => item.name === router.query.slug))
    }
  }, [router.query])

  return (
    <Layout>
      {project && (
        <>
          <Heading
            title='projects.heading.title'
            description='projects.heading.description'
            label='projects.heading.label'
            link='/about'
            cta='projects.heading.cta'
            image='/images/projects.png'
            cardLabel='projects.card.label'
            cardTitle='projects.card.title'
            cardDescription='projects.card.description'
          />
          <div className='bg-white w-full'>
            <Container>
              <div className='max-w-xl text-base text-black items-start justify-between flex flex-col gap-4 lg:gap-10 p-5 md:p-0'>
                <div className='font-bold text-xl text-primaryDark-600'>
                  {t('project.detail.description')}
                </div>
                <div className='font-bold text-base'>{project.description}</div>
                <div>
                  <div className='mt-2 flex flex-row gap-5 text-center items-center text-sm'>
                    <Image
                      loading='lazy'
                      width={10}
                      height={10}
                      alt='Contact hint illustration'
                      src={'/icons/hint.svg'}
                    />
                    <div>{t('project.feature.name')}</div>
                  </div>
                  <div className='mt-2 flex flex-row gap-5 text-center items-center text-sm'>
                    <Image
                      loading='lazy'
                      width={10}
                      height={10}
                      alt='Contact hint illustration'
                      src={'/icons/hint.svg'}
                    />
                    <div>{t('project.feature.name')}</div>
                  </div>
                  <div className='mt-2 flex flex-row gap-5 text-center items-center text-sm'>
                    <Image
                      loading='lazy'
                      width={10}
                      height={10}
                      alt='Contact hint illustration'
                      src={'/icons/hint.svg'}
                    />
                    <div>{t('project.feature.name')}</div>
                  </div>
                  <div className='mt-2 flex flex-row gap-5 text-center items-center text-sm'>
                    <Image
                      loading='lazy'
                      width={10}
                      height={10}
                      alt='Contact hint illustration'
                      src={'/icons/hint.svg'}
                    />
                    <div>{t('project.feature.name')}</div>
                  </div>
                </div>
                <div className='font-bold text-xl text-primaryDark-600'>
                  {t('project.detail.brand')}
                </div>
                <div className='text-base'>
                  {project.textBrand.split('\n\n').map((paragraph, index) => (
                    <p key={`p-${index}`} className='py-2'>
                      {paragraph
                        .split('\n')
                        .reduce((total, line) => [total, <br key={`br-${index}`} />, line])}
                    </p>
                  ))}
                </div>

                <div className='font-bold text-xl text-primaryDark-600'>
                  {t('project.detail.web')}
                </div>
                <div className='text-base'>
                  {project.textWeb.split('\n\n').map((paragraph, index) => (
                    <p key={`p-${index}`} className='py-2'>
                      {paragraph
                        .split('\n')
                        .reduce((total, line) => [total, <br key={`br-${index}`} />, line])}
                    </p>
                  ))}
                </div>
                <Newsletter />
              </div>
            </Container>
          </div>
        </>
      )}
    </Layout>
  )
}
