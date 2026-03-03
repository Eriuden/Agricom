import { useState, useEffect } from 'react'
import { useDispatch} from 'react-redux'
import axios from 'axios'
import { Header } from './Components/Header'
import { Searcher } from './Components/Searcher'
import { Route,Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { UserProfile } from './Pages/UserProfile'
import { ResetPassword } from './Pages/ResetPassword'
import UpdatePassword from './Pages/UpdatePassword'
import { Cart } from './Pages/Cart'
import './App.css'
import { getUser } from './redux/actions/user.action'

function App() {
  
type appDispatch = () => any
  
  const [uid, setUid] = useState("")
  const useAppDispatch = () => useDispatch<appDispatch>()
  const dispatch = useAppDispatch()

  useEffect(()=> {
    const fetchToken = async () => {
      await axios({
        method:"get",
        url: `${process.env.REACT_APP_API_URL}/jwtid`,
        withCredentials: true
      })
      .then((res) => {
        console.log(res)
        setUid(res.data)
      })
      .catch(() => console.log("Pas de tokens"))
    }
    fetchToken()
    if (uid)
     getUser(uid, dispatch)
  }, [uid])

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
