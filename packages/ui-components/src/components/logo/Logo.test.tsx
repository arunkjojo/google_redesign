import { expect } from 'vitest'
import { render, screen } from '../../test-utils'
import { Logo } from './Logo'

test('Header contains correct text', () => {
  render(<Logo primary={false} size={'small'} label={'Logo'} onClick={console.log} />)
  const text = screen.getByText('Logo')
  expect(text).toBeDefined()
})
