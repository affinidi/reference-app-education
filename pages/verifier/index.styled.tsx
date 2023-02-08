import styled from 'styled-components'
import { Box, Button, Typography } from 'components'
import { pxToRem } from 'utils'

export const IconBox = styled(Box)`
  margin-top: ${pxToRem(48)};
`
export const ScanButton = styled(Button)`
  width: 100%;

  @media (max-width: 576px) {
    margin-top: ${pxToRem(128)};
  }
`

export const WelcomeMessage = styled(Typography)`
  margin-top: ${pxToRem(40)};
  text-align: center;
  @media (min-width: ${pxToRem(500)}) {
    margin: ${pxToRem(48)} 0 ${pxToRem(48)};
  }
`
