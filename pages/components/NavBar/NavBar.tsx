import { FC } from 'react'
import Image from 'next/image'

import { Typography, Modal } from 'components'

import { useNavBar } from './useNavBar'
import Logo from 'public/images/logo.svg'
import CloseIcon from 'public/images/icon-close.svg'
import MenuIcon from 'public/images/icon-menu.svg'

import * as S from './NavBar.styled'

const NavBar: FC = () => {
  const {
    isMenuOpen,
    setIsMenuOpen,
    handleLogOut,
    handleGoHomePage,
    isAuthorized,
  } = useNavBar()

  return (
    <>
      <S.Container
        justifyContent='space-between'
        alignItems='center'
        direction='row'
      >
        <S.Logo>
          <Image
            onClick={handleGoHomePage}
            src={Logo}
            alt='StudId'
            aria-label='app-logo'
          />
        </S.Logo>

        {isAuthorized && (
          <>
            {isMenuOpen ? (
              <S.IconWrapper>
                <Image
                  src={CloseIcon}
                  alt='Close modal'
                  onClick={() => setIsMenuOpen(false)}
                  aria-label='menu-close-icon'
                />
              </S.IconWrapper>
            ) : (
              <S.IconWrapper>
                <Image
                  src={MenuIcon}
                  alt='Open Menu'
                  onClick={() => setIsMenuOpen(true)}
                  aria-label='menu-open-icon'
                />
              </S.IconWrapper>
            )}
          </>
        )}
      </S.Container>

      {isAuthorized && (
        <Modal
          open={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          position='rightSide'
        >
          <S.Content alignItems='flex-end'>
            <S.ButtonContainer onClick={handleLogOut}>
              <Typography variant='b1'>Log out</Typography>
            </S.ButtonContainer>
          </S.Content>
        </Modal>
      )}
    </>
  )
}

export default NavBar
