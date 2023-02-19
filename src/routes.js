import Cabecalho from 'components/Cabecalho'
import Container from 'components/Container'
import RodaPe from 'components/rodaPe'
import FavoritosProvider from 'Contextos/Favoritos'
import Favoritos from 'pages/Favoritos'
import Inicio from 'pages/Inicio'
import Player from 'pages/Player'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
          <Routes>
            <Route path='/' element={<Inicio />}/>
            <Route path='/Favoritos' element={<Favoritos />} />
            <Route path='/:id' element={<Player/>} />
          </Routes>
        </FavoritosProvider>
      </Container>
      <RodaPe />
    </BrowserRouter>
  )
}
