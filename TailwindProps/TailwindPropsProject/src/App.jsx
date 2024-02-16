import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  
  let myObj={ 
    name:"Nishant"
  }

  return (
    <>
      <h1 className='bg-green-400'>Tailwind Quick Guide</h1>
      <br/>
      <Card Profile={myObj.name}/>  
    </>
  )
}

export default App
