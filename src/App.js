import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import NoFoundPage from './pages/NoFoundPage'
import Loyout from './components/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Loyout />}>
          <Route index element={<HomePage />}/>
          <Route path='about' element={<AboutPage />}/>
          <Route path='posts' element={<BlogPage />}/>
          <Route path='*' element={<NoFoundPage />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
