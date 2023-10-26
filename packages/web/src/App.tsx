import { ChangeEvent, MouseEvent, useState } from 'react'
import './App.css'
import { Button, HeaderNavbar, Image, Input, Label, LinkIcon, Logo, ProfileIcon, SearchBox, ServiceTray } from '@monorepo/ui-components'

function App() {

  return (
    <div className="">
      <Button size={'small'} children={'Atom/Button'} onClick={() => console.log("Button Clicked")} />

      <br />

      <Image src={'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'} alt={'Atom/Image'} shape={'rectangle'} />

      <br />

      <Input size={'small'} type={'text'} value={'Atom/Input'} placeholder={'Atom/Input'} onChange={(e) => console.log(e.target.value)} />

      <br />

      <Label size={'small'} labelWeight={'lighter'} whiteText={false} text={'Atom/Label'} />

      <hr />

      <HeaderNavbar size={'small'} label={''} onClick={function (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void {
        throw new Error('Function not implemented.')
      }} />

      <br />

      <LinkIcon size={'small'} boarderColor={''} labelWeight={'lighter'} whiteText={false} src={''} alt={''} shape={'circle'} />

      <br />

      <Logo primary={false} size={'small'} label={''} onClick={function (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void {
        throw new Error('Function not implemented.')
      }} />

      <br />

      <ProfileIcon size={'small'} src={''} alt={''} badge={false} />

      <br />

      <SearchBox size={'small'} type={''} value={''} placeholder={''} onChange={function (event: ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.')
      }} />

      <br />

      <ServiceTray size={'small'} label={''} onClick={function (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void {
        throw new Error('Function not implemented.')
      }} />
    </div>
  )
}

export default App
