import { useState } from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleCount(){
    setCount((count) => count + 1)
  }

  return (
    <>
    <Header />
    
      <Content />
      
    <Footer />
    </>
  )
}

export default App
