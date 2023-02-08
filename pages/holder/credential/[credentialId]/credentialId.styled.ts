import styled from 'styled-components'
import { Box } from 'components'
import { pxToRem } from 'utils'

export const Container = styled(Box)`
  padding: 0 ${pxToRem(100)};

  @media (max-width: 576px) {
    padding: 0;
  }
`
