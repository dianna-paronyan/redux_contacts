import { Routes, Route } from 'react-router-dom'
import './App.css'
import AddContact from './components/AddContact'
import EditContact from './components/EditContact'
import Home from './components/Home'
import Layout from './components/Layouts/Layout'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/add' element={<AddContact/>} />
          <Route path='/edit/:id' element={<EditContact />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
