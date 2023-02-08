import { FC } from 'react'

import MortarBoardHatIcon from 'assets/mortarBoardHatIcon'
import { Box, Typography } from 'components'

import * as S from './TicketDetails.styled'

export type TicketDetailsProps = {
  eventName: string
  studentName: string
  startDate: string
  qrCode: string
  location: string
}

export const TicketDetails: FC<TicketDetailsProps> = ({
  eventName,
  studentName,
  startDate,
  location,
  qrCode,
}) => (
  <S.TicketDetailsCard>
    <S.DataCard>
      <Box justifyContent='space-between' gap={96}>
        <div className='grid grid-row-3'>
          <MortarBoardHatIcon />

          <S.Data variant='h5'>{eventName}</S.Data>
          <S.Data variant='s1'>{studentName}</S.Data>
        </div>

        <div className='grid grid-cols-2'>
          <div className='grid'>
            <Typography variant='p3'>Issuing institution</Typography>
            <S.Data variant='p4'>{location} </S.Data>
          </div>

          <div className='grid'>
            <Typography variant='p3'>Date of completion</Typography>
            <S.Data variant='p4'>{startDate} </S.Data>
          </div>
        </div>
      </Box>
    </S.DataCard>

    <S.QrCodeCard>
      <img src={qrCode} alt='QR Code' />
    </S.QrCodeCard>
  </S.TicketDetailsCard>
)

export default TicketDetails
