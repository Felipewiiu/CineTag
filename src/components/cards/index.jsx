import styles from './cards.module.css'
import iconeFavoritar from './favoritar.png'
import React from 'react'

export default function Cards({id, titulo, capa}) {
  return (
    <div className={styles.container}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
        <img src={iconeFavoritar} alt="Favoritar filme" className={styles.favoritar} />
    </div>
  )
}
