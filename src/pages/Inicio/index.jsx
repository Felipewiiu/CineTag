import Banner from 'components/banner'
import Cards from 'components/cards'
import Titulo from 'components/titulo'
import React, { useEffect, useState } from 'react'

import styles from './Inicio.module.css'

export default function Inicio() {

  const [videos, setVideos] = useState([]);

  useEffect(() =>{
    fetch('https://my-json-server.typicode.com/Felipewiiu/Json_server_cineTag/videos')
    .then(resposta => resposta.json())
    .then(dados => {
        setVideos(dados)
    })
  }, [])

  return (
    <>
    <Banner imagen="home" />
    <Titulo>
      <h1>Um lugar para guardar seus vídeos e  filmes</h1>
    </Titulo>
    <section className={styles.container}>
      {videos.map(videos => {
        return <Cards {...videos} key={videos.id}/>
      })}
    </section>
    </>
  )
}
