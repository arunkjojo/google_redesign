import { expect } from 'vitest'
import { render, screen } from '../../test-utils'
import { LinkIcon } from './LinkIcon'

test('Header contains correct text', () => {
  render(<LinkIcon size={'small'} labelWeight={'lighter'} whiteText={false} src={'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'} alt={'icon'} />)
  const text = screen.getByText('Link LinkIcon')
  expect(text).toBeDefined()
})
