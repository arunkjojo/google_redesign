import { expect } from 'vitest'
import { render, screen } from '../../test-utils'
import { SearchBox } from './SearchBox'

test('SearchBox contains correct text', () => {
  render(<SearchBox size={'medium'} placeholder={'Search Box'} onClick={console.log} value={''} />)
  const textBoxElement = screen.getByPlaceholderText('Search Box')
  expect(textBoxElement).toBeInTheDocument()
})
