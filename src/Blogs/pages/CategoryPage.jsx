import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import {useLocation, useNavigate} from 'react-router-dom'
import Pagination from '../components/Pagination'

const CategoryPage = () => {
  
    const navigation = useNavigate()
    const location = useLocation()
    const category = location.pathname.split("/").at(-1)
  
    return (
    <div>
        
        <div className="w-11/12 max-w-[670px] flex flex-col mx-auto">
            <button onClick={()=>navigation(-1)}
            className="flex place-content-start">
                Back
            </button>
            <h2 >
                Blogs on <span className="underline">{category}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default CategoryPage