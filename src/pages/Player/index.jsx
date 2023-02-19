import styles from './Player.module.css'

import React from 'react'
import Banner from 'components/banner'
import Titulo from 'components/titulo'
import { useParams } from 'react-router-dom'
import videos from 'json/db.json'

export default function Player() {

    const parametros = useParams();
    const video = videos.find(video => {
        return video.id === Number(parametros.id)
    })

    console.log(video)

  return (
    <>
    <Banner imagen={"player"}/>
    <Titulo>
        <h1>Player</h1>
    </Titulo>
    <iframe 
    width="560" 
    height="315" 
    src={video.link}
    title={video.titulo}
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen></iframe>

    </>
  )
}
