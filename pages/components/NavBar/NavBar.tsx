import { FC } from 'react'

import { Typography, Modal } from 'components'

import { useNavBar } from './useNavBar'
import * as S from './NavBar.styled'
import StudId from 'assets/studId'
import { CloseMenuIcon, MenuIcon } from 'assets'

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
          <StudId onClick={handleGoHomePage} aria-label='app-logo' />
        </S.Logo>

        {isAuthorized && (
          <>
            {isMenuOpen ? (
              <S.IconWrapper>
                <CloseMenuIcon
                  onClick={() => setIsMenuOpen(false)}
                  aria-label='menu-close-icon'
                />
              </S.IconWrapper>
            ) : (
              <S.IconWrapper>
                <MenuIcon
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
