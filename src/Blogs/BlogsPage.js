import {AppContext} from "./context/AppContext"
import {useContext, useEffect} from 'react'
import Home from "./pages/Home"
import TagPage from "./pages/TagPage"
import CategoryPage from "./pages/CategoryPage"
import BlogPage from "./pages/BlogPage"
import React from 'react'
import "./BlogsPage.css"
import {Routes, Route, useSearchParams} from 'react-router-dom'
import {useLocation} from 'react-router-dom'

export default function App() {
  
  const {fetchBlogPosts} = useContext(AppContext)

  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()

  useEffect(()=>{
    const page = searchParams.get("page") ?? 1
    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replace("-", " ")
      fetchBlogPosts(Number(page), tag)
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replace("-", " ")
      fetchBlogPosts(Number(page),null, category)
    }
    else{
      fetchBlogPosts(Number(page))
    }
  },[location.pathname, location.search]);

  return(
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="blog/:blogID" element ={<BlogPage/>}/>
      <Route path="tags/:tag" element ={<TagPage/>}/>
      <Route path="categories/:category" element ={<CategoryPage/>}/>
    </Routes>
  )
}
