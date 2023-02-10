import { FC } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { Box, Typography } from 'components'
import { ROUTES } from 'utils'

import { Credential } from 'pages/holder/types'

import CertDateIcon from 'public/images/cert-icon.svg'
import MortarBoard from 'public/images/mortar-board.svg'

import * as S from './VcCard.styled'

export type VcCardProps = {
  credential: Credential
  isValid: boolean
}

const VcCard: FC<VcCardProps> = ({ credential, isValid }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`${ROUTES.holder.credential}/${credential.credentialId}`)
  }

  return (
    <S.VcCard onClick={handleClick}>
      <Box gap={32}>
        <Box>
          <S.MortarBoardHatIconContainer>
            <Image
              src={MortarBoard}
              alt='Mortar Board Hat Icon that shows on top of ticket'
              aria-label='mortar-board'
            />
          </S.MortarBoardHatIconContainer>

          <Typography variant='h6'>{credential.title}</Typography>
          <Typography variant='s2'>{credential.institution}</Typography>
        </Box>

        <Box direction='row' gap={8}>
          <Image
            src={CertDateIcon}
            alt='Icon that shows the certificate date'
            aria-label='cert-icon'
          />
          <Typography variant='s2'>{credential.date}</Typography>
        </Box>
      </Box>
    </S.VcCard>
  )
}

export default VcCard
