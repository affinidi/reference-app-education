import { FC } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { Box, Container, Header } from 'components'
import ScanQr from 'public/images/scan-qr.svg'

import { ROUTES } from 'utils'

import * as S from './index.styled'

const Verifier: FC = () => {
  const router = useRouter()

  return (
    <>
      <Header title='Welcome' hasBackIcon />

      <Container>
        <div className='grid lg:grid-cols-3 lg:gap-16'>
          <Box alignItems='center' className='lg:col-start-2'>
            <S.IconBox>
              <Image src={ScanQr} alt='qr scanner icon' aria-label='scan-qr' />
            </S.IconBox>
            <S.WelcomeMessage variant='p1'>
              Welcome to the StudID scanner. Tap “scan QR code” to start
              checking certificates.
            </S.WelcomeMessage>
            <S.ScanButton onClick={() => router.push(ROUTES.verifier.scan)}>
              SCAN QR CODE
            </S.ScanButton>
          </Box>
        </div>
      </Container>
    </>
  )
}

export default Verifier
