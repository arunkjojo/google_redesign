import * as S from './ProfileIcon.style'

export interface ProfileIconProps {
  size: 'small' | 'medium' | 'large'
  src: string
  alt: string
  badge: boolean
}

export const ProfileIcon = ({ size = 'medium', badge, src, alt, ...props }: ProfileIconProps) => {
  const badged = badge ? 'storybook-image--badged' : 'storybook-image--default';
  return (
    <section style={{
      position: 'relative',
      display: 'inline-block',
      alignItems: 'center',
      backgroundColor: 'transparent',
      borderRadius: '50%',
      padding: `${size == 'small' ? '2px' : '10px'} ${size == 'small' ? '2px' : '10px'} ${size == 'small' ? '2px' : '10px'} ${size == 'small' ? '2px' : '10px'}`
    }} >
      <S.ImageWrapper src={src} alt={alt} className={['storybook-image', `storybook-image--${size}`, badged].join(' ')} {...props} />

      {badge && (
        <S.Badge className={['badged', `badged--${size}`, badged].join(' ')}></S.Badge>
      )}
    </section>
  )
}