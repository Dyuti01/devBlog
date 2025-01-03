import { BrowserRouter, Route, Routes } from 'react-router'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import WriteBlog from './pages/WriteBlog'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:blogId" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<WriteBlog/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App