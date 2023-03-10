import styles from './Player.module.css'
import React, { useEffect, useState } from 'react'
import Banner from 'components/banner'
import Titulo from 'components/titulo'
import { useParams } from 'react-router-dom'

import NaoEncontrada from 'pages/NaoEncontrada'

export default function Player() {

    const [video, setVideos] = useState([])
    const parametros = useParams();
    console.log(parametros)

    useEffect(() =>{
        fetch(`https://my-json-server.typicode.com/Felipewiiu/Json_server_cineTag/videos?id=${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideos(...dados)
        })
    }, [parametros.id])


    if(!video){
        return <NaoEncontrada/>
    }

    return (
        <>
            <Banner imagen={"player"} />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>

                </iframe>
            </section>

        </>
    )
}
