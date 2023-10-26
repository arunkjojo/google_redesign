import * as S from './HeaderNavbar.style'

export interface HeaderNavbarProps {
  /**
   * How large should the button be?
   */
  size: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const HeaderNavbar = ({ size = 'medium', label, ...props }: HeaderNavbarProps) => {
  return (
    <S.ButtonWrapper type="button" className={['storybook-button', `storybook-button--${size}`, `storybook-button--default`].join(' ')} {...props}>
      {label}
    </S.ButtonWrapper>
  )
}
