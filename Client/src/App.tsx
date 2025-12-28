import Header from './Components/Header'
import Searcher from './Components/Searcher'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import UserProfile from './Pages/UserProfile'
import ResetPassword from './Pages/ResetPassword'
import UpdatePassword from './Pages/UpdatePassword'
import Cart from './Pages/Cart'
import './App.css'

function App() {
  

  return (
    <>
      <div>
        <Header/>
        <Searcher/>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/user-profile/:id"} element={<UserProfile/>}/>
          <Route path={"/reset-password"} element={<ResetPassword/>}/>
          <Route path={"/update-password"} element={<UpdatePassword/>}/>
          <Route path={"/cart"} element={<Cart/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
