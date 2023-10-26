import './Image.css'

export interface ImageProps {

    src: string

    alt: string

    shape: 'rectangle' | 'rounded' | 'circle'
}

export const Image: React.FC<ImageProps> = ({ src, alt, shape = 'rectangle', ...props }) => {
    return (
        <img src={src} alt={alt} className={['image', `image--${shape}`].join(' ')} {...props} />
    )
}
