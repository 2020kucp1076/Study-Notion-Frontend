import React, {useState} from 'react'
import Card from "./Card"

const Cards = ({courses, category}) => {
    

    const [likedCourses, setLikedCourses] = useState([]);

    // returns you a list of all courses received form the api response
    function getCourses(){

        if(category === "All"){
            let allCourses = []; 
            Object.values(courses).forEach(courseCategory=>{
                courseCategory.forEach(course=>{
                    allCourses.push(course);
                })
            })

            return allCourses;
        }
        
        return courses[category];
        
    }

    return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
    {
        getCourses().map((courseData) => {
            console.log(courseData);
            return <Card key = {courseData.id} courseData={courseData} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
        })
    }
    </div>
  )
}

export default Cards