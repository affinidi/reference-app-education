import { FC } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { ROUTES } from 'utils'
import HolderFlowIcon from '/public/images/holder-flow.svg'
import VerifierFlowIcon from '/public/images/verifier-flow.svg'
import IssuerFlowIcon from '/public/images/issuer-flow.svg'
import { Container, Header } from 'components'

import * as S from './home.styled'

export const Home: FC = () => {
  const router = useRouter()

  return (
    <>
      <Header title='Home' />

      <Container title='Please select one of the following options'>
        <S.Wrapper className='grid lg:grid-cols-3 gap-12 lg:gap-16'>
          <S.Card
            alignItems='center'
            direction='row'
            justifyContent='space-between'
            gap={8}
            onClick={() => {
              router.push(ROUTES.holder.home)
            }}
          >
            <S.Details>
              <S.Heading variant='h6'>Collect certificate</S.Heading>
              <S.Para variant='p1'>
                Collect your certificates or view them stored in your wallet
              </S.Para>
            </S.Details>
            <S.Icon>
              <Image
                src={HolderFlowIcon}
                alt='Holder Flow Icon'
                aria-label='holder-flow'
              />
            </S.Icon>
          </S.Card>

          <S.Card
            alignItems='center'
            direction='row'
            justifyContent='space-between'
            gap={8}
            onClick={() => {
              router.push(ROUTES.verifier.welcome)
            }}
          >
            <S.Details>
              <S.Heading variant='h6'>Verify certificate</S.Heading>
              <S.Para variant='p1'>
                Verify certificates with a QR code scanner
              </S.Para>
            </S.Details>
            <S.Icon>
              <Image
                src={VerifierFlowIcon}
                alt='Verifier Flow Icon'
                aria-label='verifier-flow'
              />
            </S.Icon>
          </S.Card>

          <S.Card
            alignItems='center'
            direction='row'
            justifyContent='space-between'
            gap={8}
            onClick={() => {
              router.push(ROUTES.issuer.credentialForm)
            }}
          >
            <S.Details>
              <S.Heading variant='h6'>Issue certificate</S.Heading>
              <S.Para variant='p1'>
                Issue certificates to your students easily
              </S.Para>
            </S.Details>
            <S.Icon>
              <Image
                src={IssuerFlowIcon}
                alt='Issuer Flow Icon'
                aria-label='issuer-flow'
              />
            </S.Icon>
          </S.Card>
        </S.Wrapper>
      </Container>
    </>
  )
}
export default Home
