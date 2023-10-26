import { Image } from '../../common/image/Image'
import { Label } from '../../common/label/Label'
import './LinkIcon.css'

export interface LinkIconProps {
  size: 'small' | 'medium' | 'large',
  boarderColor: string

  labelWeight: 'lighter' | 'normal' | 'bolder'
  whiteText: boolean
  text?: string

  src: string
  alt: string
  shape: 'rectangle' | 'rounded' | 'circle'
}

export const LinkIcon = ({ size = 'medium', boarderColor, src, alt, shape, labelWeight = 'normal', whiteText, text }: LinkIconProps) => {
  const extraStyle = {
    border: `solid 2px ${boarderColor}`
  }
  return (
    <div className="link-icon">
      <div style={extraStyle} className={['link-icon-image', `link-icon-image--${size}`].join(' ')}>
        <Image src={src} alt={alt} shape={shape} />
      </div>
      {text && (<div className="link-icon-label">
        <Label size={size} labelWeight={labelWeight} whiteText={whiteText} text={text} />
      </div>)}
    </div>
  )
}
