import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {ListCard} from "./components/ListCard"
import {Form} from "./components/Form"
import { Modal } from './components/Modal'

function App() {

  return (
    <main className='container-contact'>
      <div className='section-list-card'>
        <ListCard/>
      </div>
      <div className='section-form'>
        <Form/>
      </div>
    </main>
  )
}

export default App
