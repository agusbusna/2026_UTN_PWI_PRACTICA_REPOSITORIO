import React, { useContext, useEffect, useState } from 'react'
import './global.css'
import PostList from './Componentes/PostList/Postlist'
import Counter from './Componentes/Counter/Counter'
import LoginForm from './Componentes/LoginForm/LoginForm'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import LoginScreen from './Screens/LoginScreen/LoginScreen'
import NotFoundScreen from './Screens/NotFoundScreen/NotFoundScreen'
import ProductDetailScreen from './Screens/ProductDetailScreen/ProductDetailScreen'
import ContactDetailScreen from './Screens/ContactDetailScreen/ContactDetailScreen'
import { ThemeContext } from './Context/ThemeContext'
import { LangContext } from './Context/LangContext'




export default function App() {
    const {theme, nombre_favorito} = useContext(ThemeContext)
    console.log("App.jsx", theme)
    const {langSelected} = useContext (LangContext)
    console.log("[App.jsx]", langSelected)
    return(
            <Routes>
                <Route path= "/" element= {<HomeScreen/>}/>
                <Route path= "/home" element= {<HomeScreen/>}/>
                <Route path= "/login" element= {<LoginScreen/>}/>
                <Route path="/product/:product_id" element= {<ProductDetailScreen/>}/>
                <Route path="/contact/:contact_id" element={<ContactDetailScreen />} />
                <Route path= "*" element= {<NotFoundScreen/>}/>
            </Routes>   
    )
}

/* 
Dada una lista de contactos:
  - Se debe renderizar dicha lista en el HomeScreen, idealmente como un componente llamado Sidebar
  - Cada contacto debe ser un <Link> que te lleve a /contact/{contact.id}
  - Crear una nueva Screen llamada ContactDetailScreen 
  - Asignar ContactDetailScreen a la direccion /contact/:contact_id
  - ContactDetailScreen debe buscar el detalle del contacto en la lista de contactos y renderizar en pantalla almenos el nombre del contacto
*/