import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Explore from './pages/Explore'
import TopicPage from './pages/TopicPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/topics/:slug" element={<TopicPage />} />
    </Routes>
  )
}

export default App