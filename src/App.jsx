import '../src/styles/main.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import News from './pages/News'
import Performance from './pages/Performance'
import Settings from './pages/Settings'
import Support from './pages/Support'
import Transaction from './pages/Transaction'
import Sidebar from './components/Sidebar'
function App() {

  return (
    <Router> 
      <div className='App'>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/news' element={<News />} />
          <Route path='/performance' element={<Performance />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/Support' element={<Support />} />
          <Route path='/Transaction' element={<Transaction />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
