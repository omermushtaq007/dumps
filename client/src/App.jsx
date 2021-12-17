// import logo from './logo.svg';
import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Home from './page/Home'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
    </BrowserRouter>
  )
}

export default App
