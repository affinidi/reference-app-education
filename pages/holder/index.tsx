import { FC } from 'react'
import Image from 'next/image'
import { format } from 'date-fns'
import { StoredW3CCredential } from 'services/cloud-wallet/cloud-wallet.api'
import { useCredentialsQuery } from 'hooks/holder/useCredentials'
import { useAuthContext } from 'hooks/useAuthContext'
import { Credential } from './types'

import { Container, Header, Spinner, Typography } from 'components'
import EducationCertificate from './components/educationCertificate/educationCertificate'
import NoData from 'public/images/no-tickets.svg'
import { JSON_SCHEMA_URL } from 'utils'

import * as S from './index.styled'

const Home: FC = () => {
  const { authState } = useAuthContext()
  const { data, error, isLoading } = useCredentialsQuery()

  if (!authState.authorizedAsHolder) {
    return <Spinner />
  }

  if (isLoading) {
    return (
      <>
        <Header title='Your certificates' />
        <Container>
          <Spinner />
        </Container>
      </>
    )
  }

  if (error) {
    return (
      <>
        <Header title='Your certificates' />
        <Container>
          <div className='grid justify-content-center'>
            {error && <Typography variant='e1'>{error?.message}</Typography>}
          </div>
        </Container>
      </>
    )
  }

  const certs = data.filter((credentialItem) => {
    const credentialSchema = (credentialItem as StoredW3CCredential)
      .credentialSchema
    return credentialSchema?.id === JSON_SCHEMA_URL
  })

  if (certs.length === 0) {
    return (
      <>
        <Header title='Your certificates' />
        <Container>
          <div className='grid justify-content-center'>
            <S.IconContainer>
              <Image
                src={NoData}
                alt='No avilable certificates'
                aria-label='no-ticket'
              />
            </S.IconContainer>
            <Typography align='center' variant='p1'>
              You don’t have any certificates yet.{' '}
            </Typography>
          </div>
        </Container>
      </>
    )
  }

  // @ts-ignore
  const validCerts: StoredW3CCredential[] = certs.filter((credentialItem) => {
    const credentialSubject = (credentialItem as StoredW3CCredential)
      ?.credentialSubject
    return Date.parse(credentialSubject?.dateOfCompletion) >= Date.now()
  })

  // @ts-ignore
  const expiredCerts: StoredW3CCredential[] = certs.filter((credentialItem) => {
    const credentialSubject = (credentialItem as StoredW3CCredential)
      ?.credentialSubject
    return Date.parse(credentialSubject?.dateOfCompletion) < Date.now()
  })

  const getCertCards = ({
    certs,
    isValid,
  }: {
    certs: StoredW3CCredential[]
    isValid: boolean
  }) =>
    certs.map((credentialItem: StoredW3CCredential) => {
      const credential: Credential = {
        title: credentialItem?.credentialSubject?.courseTitle,
        date: format(
          new Date(credentialItem?.credentialSubject?.dateOfCompletion),
          'dd.MM.yyyy'
        ),
        institution: credentialItem?.credentialSubject?.institution,
        credentialId: credentialItem?.id,
      }

      return (
        <EducationCertificate
          key={credentialItem.id}
          credential={credential}
          isValid={isValid}
        />
      )
    })

  return (
    <>
      <Header title='Your certificates' />

      {validCerts.length > 0 && (
        <Container>
          <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-16'>
            {getCertCards({ certs: validCerts, isValid: true })}
          </div>
        </Container>
      )}

      {expiredCerts.length > 0 && (
        <Container>
          <S.SubTitle variant='h6'>Expired tickets</S.SubTitle>

          <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-16'>
            {getCertCards({ certs: expiredCerts, isValid: false })}
          </div>
        </Container>
      )}
    </>
  )
}

export default Home
