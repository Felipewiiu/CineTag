import Banner from 'components/banner'
import Cabecalho from 'components/Cabecalho'
import Cards from 'components/cards'
import RodaPe from 'components/rodaPe'
import Titulo from 'components/titulo'
import React from 'react'
import videos from 'json/db.json'
import styles from './Inicio.module.css'

export default function Inicio() {
  return (
    <>
    <Cabecalho/>
    <Banner imagen="home" />
    <Titulo>
      <h1>Um lugar para guardar seus vídeos e  filmes</h1>
    </Titulo>
    <section className={styles.container}>
      {videos.map(videos => {
        return <Cards {...videos} key={videos.id}/>
      })}
    </section>
    <RodaPe/>
    </>
  )
}
