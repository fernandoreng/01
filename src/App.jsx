import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/team" element={<div className="p-8 text-white">Team Page (Coming Soon)</div>} />
          <Route path="/projects" element={<div className="p-8 text-white">Projects Page (Coming Soon)</div>} />
          <Route path="/calendar" element={<div className="p-8 text-white">Calendar Page (Coming Soon)</div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App