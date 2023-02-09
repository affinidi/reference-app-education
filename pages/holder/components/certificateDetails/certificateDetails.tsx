import { FC } from 'react'
import Image from 'next/image'

import { Typography } from 'components'
import mortarBoard from 'public/images/mortar-board.svg'

import * as S from './certificatetDetails.styled'

export type EducationCertDetailsProps = {
  eventName: string
  studentName: string
  startDate: string
  qrCode: string
  location: string
}

export const EducationCertDetails: FC<EducationCertDetailsProps> = ({
  eventName,
  studentName,
  startDate,
  location,
  qrCode,
}) => (
  <S.TicketDetailsCard>
    <S.DataCard>
      <Image src={mortarBoard} alt='Mortar Board' aria-label='mortar-board' />

      <S.DataCardInnerContainer justifyContent='space-between'>
        <div className='grid grid-row-3 sm:grid-row-4'>
          <S.Data variant='h5'>{eventName}</S.Data>
          <S.Data variant='s1'>{studentName}</S.Data>
        </div>

        <div className='grid sm:grid-cols-2 gap-y-7'>
          <div className='grid'>
            <Typography variant='p3'>Issuing institution</Typography>
            <S.Data variant='p4'>{location} </S.Data>
          </div>

          <div className='grid'>
            <Typography variant='p3'>Date of completion</Typography>
            <S.Data variant='p4'>{startDate} </S.Data>
          </div>
        </div>
      </S.DataCardInnerContainer>
    </S.DataCard>

    <S.QrCodeCard>
      <img src={qrCode} alt='QR Code' />
    </S.QrCodeCard>
  </S.TicketDetailsCard>
)

export default EducationCertDetails
