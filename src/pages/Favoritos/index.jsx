import styles from './Favoritos.module.css'

import React from 'react'
import Banner from 'components/banner'
import Titulo from 'components/titulo'
import Cards from 'components/cards'

export default function Favoritos() {
  return (
    <>
      <Banner imagen={"favoritos"} />
      <Titulo>
        <h1>Meus favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        <Cards id={1} titulo={"Gato bonifácio"} capa='https://thecatapi.com/api/images/get?format=src&type=png'/>
      </section>
    </>
  )
}
