import React from 'react'
import Image from 'next/image'

import { ButtonColor, ButtonSize, ButtonVariant } from './Button.themes'
import * as S from './Button.styled'
import LoadingIcon from 'public/images/loading.svg'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  iconButton?: boolean
  fullWidth?: boolean
  icon?: React.ReactElement
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  color = 'primary',
  variant = 'solid',
  size = 'm',
  loading = false,
  iconButton = false,
  fullWidth = false,
  icon,
  ...rest
}) => (
  <S.Button
    disabled={disabled}
    $loading={loading}
    $color={color}
    $variant={variant}
    $hasIcon={!!icon}
    $size={size}
    $iconButton={iconButton}
    $fullWidth={fullWidth}
    {...rest}
  >
    {loading && (
      <S.SpinnerWrapper>
        <Image
          src={LoadingIcon}
          alt='Loading Icon spinning'
          aria-label='loading'
        />
      </S.SpinnerWrapper>
    )}

    {icon && <S.IconWrapper $loading={loading}>{icon}</S.IconWrapper>}

    {children && (
      <S.Content variant='b2' $loading={loading} $iconButton={iconButton}>
        {children}
      </S.Content>
    )}
  </S.Button>
)

export default Button
