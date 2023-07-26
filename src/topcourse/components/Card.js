import React from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import {toast} from "react-toastify";

const Card = ({courseData, likedCourses, setLikedCourses}) => {
    
    function clickHandler(){
        if(likedCourses.includes(courseData.id)){
            setLikedCourses((prev) => prev.filter((cid)=>cid !== courseData.id))
            toast.warning("like removed");
        }
        else{
            if(likedCourses.length === 0){
                setLikedCourses([courseData.id]);
                toast.success("Liked Successfully")
            }
            else{
                setLikedCourses((prev)=>[...prev, courseData.id])
                toast.success("Liked Successfully")
            }
        }
    }

    return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden border border-solid'>
    
        <div className='relative'>
            <img src={courseData.image.url}/>
        
        
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
            <button onClick={clickHandler}>
                {
                    likedCourses.includes(courseData.id) ? (<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>)
                }
            </button>
        </div>
        </div>

        <div className='p-4'>
            <p className="text-white font-semibold text-lg leading-6">{courseData.title}</p>
            <p  className='mt-2 text-white'>
            {
                courseData.description.length >100 ? (courseData.description.substr(0,100)+"..."):(courseData.description)
            }</p>
        </div>
        
    </div>
  )
}

export default Card