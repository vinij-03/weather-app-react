import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Search  from './components/search'
import Display from './components/display'
import './App.css'

function App() {
  

  return (
    <div className='main'>
    <Search/>
    <Display/>
    </div>
  )
}

export default App
