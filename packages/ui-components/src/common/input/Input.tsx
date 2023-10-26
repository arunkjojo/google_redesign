import './Input.css'

export interface InputProps {
    size: 'small' | 'medium' | 'large'

    // type: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'

    type: string

    value: string

    placeholder: string

    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const Input: React.FC<InputProps> = ({ type = 'text', placeholder, value, onChange, size = 'medium', ...props }) => {
    const handleChange = (event: any) => onChange(event.target.value)
    return (
        <input type={type} placeholder={placeholder} onChange={handleChange} className={['input', `input--${size}`].join(' ')} {...props} />
    )
}