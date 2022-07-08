import { Routes, Route } from 'react-router-dom'
import './App.css'
import AddContact from './components/AddContact'
import EditContact from './components/EditContact'
import Home from './components/Home'
import Layout from './components/Layouts/Layout'
import NotFound from './components/NotFound'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/add' element={<AddContact/>} />
          <Route path='/edit/:id' element={<EditContact />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
