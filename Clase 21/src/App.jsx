import React, { useEffect, useState } from 'react'
import './global.css'
import ContactList from './Componentes/ContactsList/contactsList'
import PostList from './Componentes/PostList/Postlist'
import Counter from './Componentes/Counter/Counter'
import LoginForm from './Componentes/LoginForm/LoginForm'



export default function App() {
    return(
        <div>
            <LoginForm/>   
        </div>
    )
}
