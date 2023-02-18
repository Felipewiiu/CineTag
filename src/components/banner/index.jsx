import styles from './banner.module.css'
import React from 'react'

export default function Banner({imagen}) {
  return (
    <div className={styles.capa} style={{backgroundImage: `url('/imagens/banner-${imagen}.png')`}}>

    </div>
  )
}
