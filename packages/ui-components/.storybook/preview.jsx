import { ThemeProvider } from '@emotion/react'
import createTheme from '@monorepo/design-tokens'

console.log(createTheme, 'themeee')

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color|boarder)$/i,
      date: /Date$/
    }
  }
}

export const decorators = [
  Story => (
    <ThemeProvider theme={createTheme}>
      <Story />
    </ThemeProvider>
  )
]
