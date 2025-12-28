import Header from './Components/Header'
import { Route,Routes } from 'react-router-dom'
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
          <Route path={"/article-page/:id"} element={<ArticlePage/>}/>
          <Route path={"/cart"} element={<Cart/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
