import './Button.css'

export interface ButtonProps {
    size: 'small' | 'medium' | 'large'
    children?: React.ReactElement | string,


    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const Button: React.FC<ButtonProps> = ({ children, size = 'medium', ...props }) => {
    return (
        <button className={['button', `button--${size}`].join(' ')} {...props}>
            {children}
        </button>
    )
}
