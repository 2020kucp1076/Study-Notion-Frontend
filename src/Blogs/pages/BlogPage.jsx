import React,{useState,useContext,useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {AppContext} from "../context/AppContext"
import BlogDetails from "../components/BlogDetails"
import Header from "../components/Header";


const BlogPage = () => {
    
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/"
    const [blog, setBlog] = useState(null)
    const [relatedBlogs, setRelatedBlogs] = useState([])
    const location = useLocation()
    const navigation = useNavigate()
    const {setLoading, loading} = useContext(AppContext)
    const blogID = location.pathname.split("/").at(-1)

    async function fetchRelatedBlogs(){
        setLoading(true)
        let url = `${newBaseUrl}get-blog?blogID=${blogID}`

        try{
            const res = await fetch(url)
            const data = await res.json()
            setBlog(data.blog)
            setRelatedBlogs(data.relatedBlogs)
        }
        catch(error){
            console.log("Error in blog ID API call")
            setBlog(null)
            setRelatedBlogs([])
        }
        setLoading(false)
    }

    useEffect(()=>{
        if(blogID){
            fetchRelatedBlogs()
        }
    }, [location.pathname])    

    return (
    <div>
        
        <div>
            <button onClick={()=>navigation(-1)}>
                Back
            </button>
        </div>
        {
            loading ? <p>Loading</p>: 
            blog ? (
                <div>
                    <BlogDetails post={blog}/>
                    <h2>Related Blogs</h2>
                    {
                        relatedBlogs.map((post)=>(
                            <div key={post.id}><BlogDetails post={post}/></div>
                        ))
                    }
                </div>
            ):(<div><p> No Blog Found</p></div>)
        } 
    </div>
  )
}

export default BlogPage