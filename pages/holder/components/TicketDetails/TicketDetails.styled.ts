import styled from 'styled-components'

import { pxToRem } from 'utils'
import { Box, Typography } from 'components'

export const DataCard = styled.div`
  background-color: ${(props) => props.theme.colors.neutral.secondary['100']};
  padding: 0 ${pxToRem(40)} ${pxToRem(40)} ${pxToRem(40)};
  width: 100%;

  svg {
    margin-bottom: ${pxToRem(24)};
  }
`

export const QrCodeCard = styled(Box)`
  background-color: ${(props) => props.theme.colors.brand.primary['100']};
  padding: ${pxToRem(40)};
  border-top-right-radius: 10%;
  border-bottom-right-radius: 10%;

  img {
    border-radius: 16px;

    @media (min-width: 1024px) {
      max-width: none;

      img {
        height: ${pxToRem(292)};
        width: ${pxToRem(292)};
      }
    }
  }
`

export const Data = styled(Typography)`
  color: ${(props) => props.theme.colors.neutral.primary['100']};
`

export const TicketDetailsCard = styled(Box)`
  margin-top: ${pxToRem(48)};
  flex-direction: row;
  box-shadow: 0 ${pxToRem(4)} ${pxToRem(20)} 0 rgba(0, 0, 0, 0.1);
  border-top-right-radius: 10%;
  border-bottom-right-radius: 10%;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    max-width: ${pxToRem(338)};
    margin: 0 auto;
  }
`
