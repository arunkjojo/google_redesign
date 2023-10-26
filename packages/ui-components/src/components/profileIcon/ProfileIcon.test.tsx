import React from 'react';
import { expect } from 'vitest'
import { render, screen } from '../../test-utils'
import { ProfileIcon } from './ProfileIcon'

test('ProfileIcon', () => {
  render(<ProfileIcon size={'small'} src={'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'} alt={'Profile Icon'} badge={false} />)
  const imageElement = screen.getByAltText("Profile Icon")
  expect(imageElement).toBeDefined();
  expect(imageElement).toBeInstanceOf(HTMLElement);
})
