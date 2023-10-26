import { render, screen } from '@testing-library/react';
import { Image } from './Image';

test('renders image component with correct src and alt', () => {
    const src = 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50';
    const alt = 'Image';

    render(<Image shape={'rectangle'} src={src} alt={alt} />);

    const imageElement = screen.getByAltText(alt);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.getAttribute('src')).toBe(src);
});