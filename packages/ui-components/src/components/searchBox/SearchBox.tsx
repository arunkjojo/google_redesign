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
    <div className={`input-group text-center search-box--${size}`}>

      <div className="input-group-append">
        <span className="input-group-text">
          <i className='icon search-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5F6368">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </i>
        </span>
      </div>

      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={searchHandler}
      />

      <div className="input-group-append">
        <span className="input-group-text">
          <i className='icon mic-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path fill="#4285F4" d="M12 15c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v7c0 1.66 1.34 3 3 3z" />
              <path fill="#34A853" d="M11 18.92h2V22h-2z" />
              <path fill="#F4B400" d="M7 12H5c0 1.93.78 3.68 2.05 4.95l1.41-1.41C7.56 14.63 7 13.38 7 12z" />
              <path fill="#EA4335" d="M12 17c-1.38 0-2.63-.56-3.54-1.47l-1.41 1.41A6.99 6.99 0 0 0 12.01 19c3.87 0 6.98-3.14 6.98-7h-2c0 2.76-2.23 5-4.99 5z" />
            </svg>
          </i>
        </span>
      </div>
    </div>
  )
}
