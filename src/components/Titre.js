import styled from 'styled-components'
import Logo from '../assets/logo.png'

const Header = styled.div`
  background: black;
  display: flex;
  align-items: center;
  height: 91px;
  padding-left: 29px;
  nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  a {
    color: white;
    text-decoration: none;
    margin-right: 87px;
    margin-left: 150px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
  }
`

export default function Title() {
  return (
    <Header>
      <img src={Logo} alt="" />
      <nav>
        <a href=".">Accueil</a>
        <a href=".">Profil</a>
        <a href=".">Réglage</a>
        <a href=".">Communauté</a>
      </nav>
    </Header>
  )
}
