import { BrowserRouter, Route, Routes, useNavigate } from 'react-router'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'
import WriteBlog from './pages/WriteBlog'
import AllBlogs from './pages/AllBlogs'
import Unauthorized from './pages/Unauthorized'
import UserContext from './utils/UserContext'
import { useEffect, useState } from 'react'
import MyBlogs from './pages/MyBlogs'
import { BACKEND_URL } from './config'
import axios from 'axios'

function App() {
const [isLoggedInUser, setIsLoggedInUser] = useState(false);
const [authorName, setAuthorName] = useState("")

useEffect(()=>{
  axios.get(`${BACKEND_URL}/api/v1/blog/check`, {withCredentials:true}).then((res)=>{
    setIsLoggedInUser(true)
    setAuthorName(localStorage.getItem("authorName")||"")
   }).catch((error)=>{
     setIsLoggedInUser(false);
   })
 }, [])


  return (
    <>
<UserContext.Provider value={{isLoggedInUser:isLoggedInUser, setIsLoggedInUser, authorName, setAuthorName}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:blogId" element={<Blog />} />
          <Route path="/myBlogs" element={<MyBlogs />} />
          <Route path="/publish" element={<WriteBlog/>}></Route>
          <Route path="/feed" element={<AllBlogs />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

        </Routes>
      </BrowserRouter>


</UserContext.Provider>

    </>
  )
}

export default App