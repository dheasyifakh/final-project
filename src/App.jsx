import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import Movie from './components//Movie/Movie'

function App() {

  return (
    <div className="App">
      <Header/>
      <Movie/>
    </div>
  )
}

export default App
