import { FC } from 'react'
import { useRouter } from 'next/router'

import { Box, Typography } from 'components'
import { ROUTES } from 'utils'

import { Ticket } from '../Ticket/Ticket'
import { Credential } from 'pages/holder/types'

import CertDateIcon from 'assets/certDateIcon'
import MortarBoardHatIcon from 'assets/mortarBoardHatIcon'

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
            <MortarBoardHatIcon />
          </S.MortarBoardHatIconContainer>

          <Typography variant='h6'>{credential.title}</Typography>
          <Typography variant='s2'>Location</Typography>
          {/* <Typography variant='s2'>{credential.location}</Typography> */}
        </Box>

        <Box direction='row' gap={8}>
          <CertDateIcon />
          <Typography variant='s2'>{credential.date}</Typography>
        </Box>
      </Box>
    </Ticket>
  )
}

export default TicketCard
