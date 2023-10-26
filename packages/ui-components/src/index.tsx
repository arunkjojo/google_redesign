import { ThemeProvider } from '@emotion/react'
import createTheme from '@monorepo/design-tokens'

const CustomThemeProvider = ({ theme = createTheme, children }: any) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export * from './common/button/Button'
export * from './common/image/Image'
export * from './common/input/Input'
export * from './common/label/Label'

export * from './components/headerNavbar/HeaderNavbar'
export * from './components/linkIcon/LinkIcon'
export * from './components/logo/Logo'
export * from './components/profileIcon/ProfileIcon'
export * from './components/searchBox/SearchBox'
export * from './components/serviceTray/ServiceTray'

export { CustomThemeProvider }
