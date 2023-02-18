import styles from './titulo.module.css'

import React from 'react'

export default function Titulo({children}) {
  return (
    <div className={styles.texto}>
        {children}
    </div>
  )
}
