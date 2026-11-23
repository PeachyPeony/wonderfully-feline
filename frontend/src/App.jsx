import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Explore from './pages/Explore'
import TopicPage from './pages/TopicPage'
import Saved from './pages/Saved'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/topics/:slug" element={<TopicPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App