import React from 'react'
import styles from './cabecalho.module.css'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import CabecalhoLink from 'components/cabecalhoLink'


export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <img src={logo} alt="Logo Cinetag" />
      </Link>
      <nav>
        <CabecalhoLink url="./">
          Home
        </CabecalhoLink>
        <CabecalhoLink url='./Favoritos'>
          Favoritos
        </CabecalhoLink>
      </nav>
    </header>
  )
}
