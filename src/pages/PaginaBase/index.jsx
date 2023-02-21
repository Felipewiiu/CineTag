import Cabecalho from 'components/Cabecalho'
import Container from 'components/Container'
import RodaPe from 'components/rodaPe'
import FavoritosProvider from 'Contextos/Favoritos'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PaginaBase() {
  return (
    <main>
        <Cabecalho/>
        <FavoritosProvider>
            <Container>
                <Outlet/>
            </Container>
        </FavoritosProvider>
        <RodaPe/>
    </main>
  )
}
