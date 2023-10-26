import { expect } from 'vitest'
import { render, screen } from '../../test-utils'
import { Button } from './Button'

test('Header contains correct text', () => {
    render(<Button size={'small'} children={'button'} onClick={console.log} />)
    const buttonLabel = screen.getByText('button')
    expect(buttonLabel).toBeDefined()
})
