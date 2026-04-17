import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar' // Don't forget to import your Navbar!

function App() {
  return (
    <>
      <Navbar /> 
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Use <div> instead of components until those files are created */}
          <Route path="/timeline" element={<div className="pt-32 text-center text-2xl">Timeline Page coming soon!</div>} />
          <Route path="/stats" element={<div className="pt-32 text-center text-2xl">Stats Page coming soon!</div>} />
          
          <Route path="*" element={<div className="pt-32 text-center">404 - Page Not Found</div>} />
        </Routes>
      </main>
    </>
  )
}

export default App