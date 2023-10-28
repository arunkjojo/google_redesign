import './ServiceTray.css'
export interface ServiceTrayProps {
  size: 'small' | 'medium' | 'large'
}


export const ServiceTray = ({ size = 'small' }: ServiceTrayProps) => {
  var ServiceWidth, ServiceHeight;
  switch (size) {
    case 'small':
      ServiceWidth = '30';
      ServiceHeight = '30';
      break;

    case 'medium':
      ServiceWidth = '50';
      ServiceHeight = '50';
      break;

    case 'large':
      ServiceWidth = '80';
      ServiceHeight = '80';
      break;
    default:
      ServiceWidth = '50';
      ServiceHeight = '50';
      break;
  }
  return (
    <div className='service-tray'>
      <svg width={ServiceWidth} height={ServiceHeight} viewBox="0 0 24 24">
        <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
      </svg>
    </div>
  )
}
