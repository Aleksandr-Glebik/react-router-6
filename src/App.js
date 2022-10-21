import {Routes, Route, Link} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import NoFoundPage from './pages/NoFoundPage'

function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
      </header>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/posts' element={<BlogPage />}/>
        <Route path='*' element={<NoFoundPage />}/>
      </Routes>
    </>
  )
}

export default App
