import Cabecalho from 'components/Cabecalho'
import Container from 'components/Container'
import RodaPe from 'components/rodaPe'
import FavoritosProvider from 'Contextos/Favoritos'
import Favoritos from 'pages/Favoritos'
import Inicio from 'pages/Inicio'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
          <Routes>
            <Route path='/' element={<Inicio />}></Route>
            <Route path='/Favoritos' element={<Favoritos />} />
          </Routes>
        </FavoritosProvider>
      </Container>
      <RodaPe />
    </BrowserRouter>
  )
}
