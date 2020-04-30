import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const HeaderExampleSettingsIcon = () => (
  <Header style={{marginBottom:20,color:"white"}} as='h1' icon>
    <Icon name='currency' />
    Currency Converter
    <Header.Subheader style={{marginBottom:10,color:"white"}}>
      Convert your currency for free!
    </Header.Subheader>
  </Header>
)

export default HeaderExampleSettingsIcon
