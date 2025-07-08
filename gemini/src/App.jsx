import { useState } from 'react'
import React from 'react'
import './App.css'
import Side from './component/side.jsx/Side'
import Main from './component/main/Main'

function App() {
  return (
    <div className="flex">
      <Side/>
      <Main/>
    </div>
  )
}

export default App
