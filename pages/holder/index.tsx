import { FC } from 'react'
import Image from 'next/image'
import { format } from 'date-fns'
import { StoredW3CCredential } from 'services/cloud-wallet/cloud-wallet.api'
import { useCredentialsQuery } from 'hooks/holder/useCredentials'
import { useAuthContext } from 'hooks/useAuthContext'
import { Credential } from './types'

import { Container, Header, Spinner, Typography } from 'components'
import TicketCard from './components/TicketCard/TicketCard'
import NoTicket from '/public/images/no-ticket.svg'
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

  const tickets = data.filter((credentialItem) => {
    const credentialSchema = (credentialItem as StoredW3CCredential)
      .credentialSchema
    return credentialSchema?.id === JSON_SCHEMA_URL
  })

  if (tickets.length === 0) {
    return (
      <>
        <Header title='Your certificates' />
        <Container>
          <div className='grid justify-content-center'>
            <S.IconContainer>
              <Image src={NoTicket} alt='No Ticket' aria-label='no-ticket' />
            </S.IconContainer>
            <Typography align='center' variant='p2'>
              You don’t have any certificates yet.{' '}
            </Typography>
          </div>
        </Container>
      </>
    )
  }

  // @ts-ignore
  const validTickets: StoredW3CCredential[] = tickets.filter(
    (credentialItem) => {
      const credentialSubject = (credentialItem as StoredW3CCredential)
        ?.credentialSubject
      return Date.parse(credentialSubject?.startDate) >= Date.now()
    }
  )

  // @ts-ignore
  const expiredTickets: StoredW3CCredential[] = tickets.filter(
    (credentialItem) => {
      const credentialSubject = (credentialItem as StoredW3CCredential)
        ?.credentialSubject
      return Date.parse(credentialSubject?.startDate) < Date.now()
    }
  )

  const getTicketCards = ({
    tickets,
    isValid,
  }: {
    tickets: StoredW3CCredential[]
    isValid: boolean
  }) =>
    tickets.map((credentialItem: StoredW3CCredential) => {
      const credential: Credential = {
        title: credentialItem?.credentialSubject?.eventName,
        date: format(
          new Date(credentialItem?.credentialSubject?.startDate),
          'dd.MM.yyyy'
        ),
        time: format(
          new Date(credentialItem?.credentialSubject?.startDate),
          'HH:mm'
        ),
        credentialId: credentialItem?.id,
      }

      return (
        <TicketCard
          key={credentialItem.id}
          credential={credential}
          isValid={isValid}
        />
      )
    })

  return (
    <>
      <Header title='Your certificates' />

      {validTickets.length > 0 && (
        <Container>
          <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-16'>
            {getTicketCards({ tickets: validTickets, isValid: true })}
          </div>
        </Container>
      )}

      {expiredTickets.length > 0 && (
        <Container>
          <S.SubTitle variant='h6'>Expired tickets</S.SubTitle>

          <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-16'>
            {getTicketCards({ tickets: expiredTickets, isValid: false })}
          </div>
        </Container>
      )}
    </>
  )
}

export default Home
