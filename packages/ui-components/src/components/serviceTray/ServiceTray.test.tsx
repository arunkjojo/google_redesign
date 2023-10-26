import { expect } from 'vitest'
import { render, screen } from '../../test-utils'
import { ServiceTray } from './ServiceTray'

test('ServiceTray contains correct text', () => {
  render(<ServiceTray size={'small'} label={'ServiceTray'} onClick={console.log} />)
  const text = screen.getByText('ServiceTray')
  expect(text).toBeDefined()
})
