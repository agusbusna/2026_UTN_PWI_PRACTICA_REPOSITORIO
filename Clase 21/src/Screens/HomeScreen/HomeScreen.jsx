import React from 'react'
import { Link } from 'react-router'
import ContactOption from '../../Componentes/ContactOption/ContactOption'
import Sidebar from '../../Componentes/Sidebar/Sidebar'
import { LangContext, LANGS_AVIABLES } from '../../Context/LangContext'
import { useContext } from 'react'

export default function HomeScreen() {
    const { langSelected, changeLang } = useContext(LangContext)

    const listaDeIdiomas = []

    for (const lang of LANGS_AVIABLES) {
        listaDeIdiomas.push(
            <div key={lang.value}>
                <span>{lang.nombre}</span>
                {langSelected === lang.value && <span>seleccionado</span>}
                <img src={lang.icon} alt={lang.nombre} width={30} />
                <button onClick={() => changeLang(lang.value)}>
                    Cambiar idioma
                </button>
            </div>
        )
    }
    
    return (
        <div className='home-container'>
                
            <div className='contact-screen-container'>
                <Sidebar/>
            </div> 
            <div className='contenido-principal'>
                {listaDeIdiomas}
            </div>
        </div>
    )
}