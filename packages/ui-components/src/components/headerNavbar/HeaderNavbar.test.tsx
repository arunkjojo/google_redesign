import { expect } from 'vitest'
import { render, screen } from '../../test-utils'
import { HeaderNavbar } from './HeaderNavbar'

test('Header contains correct text', () => {
  render(<HeaderNavbar size={'small'} label={'Header Navbar'} onClick={console.log} />)
  const text = screen.getByText('Header Navbar')
  expect(text).toBeDefined()
})
