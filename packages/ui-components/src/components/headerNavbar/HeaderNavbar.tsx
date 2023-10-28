import { ProfileIcon } from '../profileIcon/ProfileIcon'
import { ServiceTray } from '../serviceTray/ServiceTray'
import './HeaderNavbar.css'

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
    <div className="google-header">
      <div className="gmail-img">
        <ProfileIcon size={'small'} src={'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'} alt={'profile'} badge={true} />
      </div>
      <div className="header-icons">
        <ServiceTray size={'small'} />
        <a href="#">Images</a>
        <a href="#">Gmail</a>
      </div>
    </div>
  )
}
