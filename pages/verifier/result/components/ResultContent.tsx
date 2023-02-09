import { FC } from 'react'
import Image from 'next/image'

import IssuedIcon from 'public/images/issued-icon.svg'
import ValidCredential from 'public/images/valid-credential.svg'
import InvalidCredential from 'public/images/invalid-credential.svg'

import * as S from './Result.styled'

export type ResultContentProps = {
  isValid: boolean
  isIssuance?: boolean
}
export const ResultContent: FC<ResultContentProps> = ({
  isValid,
  isIssuance,
}) => {
  return (
    <>
      {isValid ? (
        isIssuance ? (
          <Image
            src={IssuedIcon}
            alt='Illustration to show that certificate has been issued'
            aria-label='issued-icon'
          />
        ) : (
          <Image
            src={ValidCredential}
            alt='Illustration to show that certificate is valid'
            aria-label='valid-credential'
          />
        )
      ) : (
        <Image
          src={InvalidCredential}
          alt='Illustration to show that certificate is invalid'
          aria-label='invalid-credential'
        />
      )}
      <S.ResultTitle
        variant='h5'
        $isVerified={isValid}
        $isIssuance={isIssuance}
      >
        {isValid
          ? isIssuance
            ? 'Certificate successfully issued'
            : 'Valid certificate'
          : 'Invalid certificate'}
      </S.ResultTitle>
    </>
  )
}
