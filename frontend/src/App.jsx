import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Explore from './pages/Explore'
import CatFactJar from './pages/CatFactJar'
import TopicPage from './pages/TopicPage'
import Saved from './pages/Saved'
import Header from './components/Header'
import Footer from './components/Footer'
import { SavedTopicsProvider } from './context/SavedTopicsContext'

function App() {
  return (
    <SavedTopicsProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/cat-fact-jar" element={<CatFactJar />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/topics/:slug" element={<TopicPage />} />
      </Routes>
      <Footer />
    </SavedTopicsProvider>
  )
}

export default App