import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import SinglePage from './pages/SinglePage'
import NoFoundPage from './pages/NoFoundPage'
import Layout from './components/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path='about' element={<AboutPage />}/>
          <Route path='posts' element={<BlogPage />}/>
          <Route path='posts/:id' element={<SinglePage />}/>
          <Route path='*' element={<NoFoundPage />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
