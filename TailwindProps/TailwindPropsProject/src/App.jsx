import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  
  let myObj={ 
    LinkTo:"See Profile",
    DispName:"Nishant Tomer"
  }

  return (
    <>
      <h1 className='bg-gray-400'>Tailwind Quick Guide</h1>
      <br/>
      <Card Profile={myObj.LinkTo} userName={myObj.DispName}/>  
    </>
  )
}

export default App
