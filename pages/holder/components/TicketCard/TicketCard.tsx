import { FC } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { Box, Typography } from 'components'
import { ROUTES } from 'utils'

import { Ticket } from '../Ticket/Ticket'
import { Credential } from 'pages/holder/types'

import CertDateIcon from '/public/images/cert-icon.svg'
import MortarBoard from '/public/images/mortar-board.svg'

import * as S from '../Ticket/Ticket.styled'

export type TicketCardProps = {
  credential: Credential
  isValid: boolean
}

const TicketCard: FC<TicketCardProps> = ({ credential, isValid }) => {
  const router = useRouter()

  return (
    <Ticket
      isValid={isValid}
      onClick={() =>
        router.push(`${ROUTES.holder.credential}/${credential.credentialId}`)
      }
    >
      <Box gap={32}>
        <Box>
          <S.MortarBoardHatIconContainer>
            <Image
              src={MortarBoard}
              alt='Mortar Board Hat Icon'
              aria-label='mortar-board'
            />
          </S.MortarBoardHatIconContainer>

          <Typography variant='h6'>{credential.title}</Typography>
          <Typography variant='s2'>{credential.location}</Typography>
        </Box>

        <Box direction='row' gap={8}>
          <Image
            src={CertDateIcon}
            alt='Cert Date Icon'
            aria-label='cert-icon'
          />
          <Typography variant='s2'>{credential.date}</Typography>
        </Box>
      </Box>
    </Ticket>
  )
}

export default TicketCard
