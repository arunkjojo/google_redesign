import * as S from './Logo.style'

export interface LogoProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary: boolean
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

export const Logo = ({ primary, size = 'medium', label, ...props }: LogoProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'
  return (
    <S.ButtonWrapper type="button" className={['storybook-button', `storybook-button--${size}`, mode].join(' ')} {...props}>
      {label}
    </S.ButtonWrapper>
  )
}
