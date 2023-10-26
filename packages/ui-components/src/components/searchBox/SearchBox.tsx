import { Image } from '../../common/image/Image'
import { Input } from '../../common/input/Input'
import './SearchBox.css'

export interface SearchBoxProps {
  size: 'small' | 'medium' | 'large'

  type: string

  value: string

  placeholder: string

  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const SearchBox = ({ type = 'text', placeholder, value, onChange, size = 'medium', ...props }: SearchBoxProps) => {
  const searchHandler = (event: any) => {
    console.log(event.target.value);
  }
  return (
    <div className='search-box'>

      <svg className="search-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7">
        <g className="search-path" fill="none" stroke="gray">
          <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
          <circle cx="8" cy="8" r="7" />
        </g>
      </svg>

      <div className="search-input">
        <Input type={type} placeholder={placeholder} value={value} onChange={searchHandler} size={size} />
      </div>

      <svg className="mic-icon" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
        <g>
          <g fill="blue" id="g17480" transform="translate(646.3034,236.3789)">
            <path className="st6" d="M-571.3-147.3c7.9,0,14.2-6.4,14.2-14.2l0-33.2c0-7.9-6.4-14.2-14.2-14.2    c-7.9,0-14.2,6.4-14.2,14.2v33.2C-585.5-153.7-579.1-147.3-571.3-147.3" id="path17482" />
          </g>
          <g fill="green" id="g17484" transform="translate(645.4803,233.1492)">
            <path className="st5" d="M-575.2-125.5L-575.2-125.5v14.9h9.5v-14.8c-1.5,0.2-3.1,0.2-4.7,0.2    C-572.1-125.1-573.6-125.2-575.2-125.5" id="path17486" />
          </g>
          <g fill="yellow" id="g17488" transform="translate(643.3809,235.9115)">
            <path className="st9" d="M-585.2-144.1c-4.2-4.3-6.9-9.5-6.9-16.6h-9.5c0,9.5,3.7,17.3,9.7,23.3l0.1-0.1c0,0,0,0-0.1-0.1L-585.2-144.1z" id="path17490" />
          </g>
          <g fill="red" id="g17492" transform="translate(650.4081,238.79)">
            <path className="st7" d="M-551.7-163.6c0,11.9-10.5,23.6-23.7,23.6c-6.6,0-12.5-2.7-16.8-7l-0.1,0.1l-6.6,6.6c0,0,0,0,0.1,0.1c4.9,4.9,11.4,8.2,18.7,9.3c1.6,0.2,3.2,0.4,4.8,0.4c1.6,0,3.2,0,4.7-0.2c16.1-2.3,28.4-16.1,28.4-32.7H-551.7z" id="path17494" />
          </g>
        </g>
      </svg>

    </div>
  )
}
