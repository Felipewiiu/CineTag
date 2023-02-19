import styles from './Favoritos.module.css'

import React from 'react'
import Banner from 'components/banner'
import Titulo from 'components/titulo'
import Cards from 'components/cards'
import { useFavoritoContext } from 'Contextos/Favoritos'

export default function Favoritos() {
  const {favorito} = useFavoritoContext();

  return (
    <>
      <Banner imagen={"favoritos"} />
      <Titulo>
        <h1>Meus favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map(elemento =>{
          return <Cards {...elemento} key={elemento.id}/>
        })}
      </section>
    </>
  )
}
