import React from 'react'
import {NavLink} from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    
    <div className="w-11/12 max-w-2xl mx-auto">
        <NavLink to={`/blogs/blog/${post.id}`}>
            <span className="font-bold text-lg">{post.title}</span>
        </NavLink>
        <p className="text-sm mt-[4px]">
            By <span className="italic">{post.author}</span> on {" "} 
            <NavLink to={`/blogs/categories/${post.category.replace(" ","-")}`}>
                <span className="underline font-bold">{post.category}</span>
            </NavLink>
        </p>
        
        <p className="text-xs mt-[4px]">Posted on {post.date}</p>
        <p className="text-md mt-[14px]">{post.content}</p>
        
        <div className="flex flex-row gap-x-3">
            {post.tags.map((tag,index)=>( 
            <NavLink key={index} to={`/blogs/tags/${tag.replace(" ","-")}`}>
                <span  
                className="text-blue-700 underline font-bold text-xs mt-[5px]">#{tag}</span>
            </NavLink>))}
        </div>

    </div>
       
    
  )
}

export default BlogDetails