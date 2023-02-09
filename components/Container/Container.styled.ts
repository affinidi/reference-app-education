import styled from 'styled-components'

import { pxToRem } from 'utils'
import Typography from '../Typography/Typography'

export const Container = styled.div`
  padding: 0 ${pxToRem(100)};

  @media (max-width: ${pxToRem(1024)}) {
    padding: 0 ${pxToRem(24)};
  }
`

export const Title = styled(Typography)`
  padding: ${pxToRem(24)} 0 ${pxToRem(40)};

  @media (max-width: ${pxToRem(1024)}) {
    padding: ${pxToRem(40)} 0 ${pxToRem(24)};
  }
`
