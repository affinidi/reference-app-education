import { FC } from 'react'

import { Container, Header } from 'components'
import QrScanner from './components/QrScanner'

import * as S from './index.styled'

const VerifierScan: FC = () => (
  <>
    <Header title='Scan QR Code' hasBackIcon />

    <Container>
      <S.Title variant='p1'>
        Please hold the QR code in front of the camera to scan it.
      </S.Title>
      <div className='grid lg:grid-cols-12 lg:gap-16'>
        <div className='lg:col-span-6 lg:col-start-4'>
          <QrScanner />
        </div>
      </div>
    </Container>
  </>
)

export default VerifierScan
