import React,{useState} from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

const SignupForm = ({setIsLoggedIn}) => {
    
    const navigate=useNavigate()

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [accountType, setAccountType] = useState("student")

    function changeHandler(event){
        setFormData((prevData)=>(
            {
            ...prevData,[event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
            event.preventDefault()
            if(formData.password!== formData.confirmPassword){
                toast.error('Passwords do not match')
                return;
            }
            setIsLoggedIn(true)
            toast.success("Accound Created")
            navigate("/dashboard")
            const AccountData={
                ...formData
            }
            const finalData = {
                ...AccountData, accountType
            }
            console.log(finalData)

    }
  
    return (
    <div>
        {/* Student-Instructor */}
        <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
            
            <button onClick={()=>setAccountType("student")}
            className={`${accountType==="student" ? 
            "bg-richblack-900 text-richblack-5":
            "bg-transparent text-richblack-200"} py-2 px-5 rounded-full
            transition-all duraton-200`}>
                Student
            </button>

            <button onClick={()=>setAccountType("instructor")}
            className={`${accountType==="instructor" ? 
            "bg-richblack-900 text-richblack-5":
            "bg-transparent text-richblack-200"} py-2 px-5 rounded-full
            transition-all duraton-200`}>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler}>
        {/* First and Last Name */}
            <div className="flex gap-x-4 w-full mt-[20px]">
                <label  className="w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    First Name<sup  className="text-pink-200">*</sup></p>
                    
                    <input type="text" name="firstName"
                    onChange={changeHandler} required
                    placeholder="Enter First Name"
                    value = {formData.firstName}
                    className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px]
                    small-shadow"
                    />
                </label>

                <label className="w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"
                    >Last Name<sup  className="text-pink-200">*</sup></p>
                    <input type="text" name="lastName"
                    onChange={changeHandler} required
                    placeholder="Enter Last Name"
                    value = {formData.lastName}
                    className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px]
                    small-shadow"
                    />
                </label>
            </div>
            
            {/* Email */}
            <div className="w-full mt-[20px]">
                <label className="w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"
                    >Email Address<sup  className="text-pink-200">*</sup></p>
                    <input type="email" name="email"
                    onChange={changeHandler} required
                    placeholder="Enter email ID"
                    value = {formData.email}
                    className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px]
                    small-shadow"
                    />
                </label>
            </div>

            {/* Passwords */}
            <div className="flex gap-x-4 justify-between mt-[20px]">
                <label className="relative w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        Create Password<sup  className="text-pink-200">*</sup>
                    </p>

                    <div className="relative">
                        <input required 
                        type={showPassword ? ("text"):("password")} 
                        value={formData.password}
                        onChange={changeHandler}
                        placeholder="Create"
                        name="password"
                        className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px]
                        small-shadow"
                        />

                        <span onClick={()=>setShowPassword(!showPassword)}
                        className="absolute right-3 top-[0.7em] cursor-pointer">
                            {showPassword ? 

                            (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):

                            (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                        </span>
                    </div>
                </label>

                <label className="relative w-full">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        Confirm Password<sup  className="text-pink-200">*</sup>
                    </p>
                    
                    <div className="relative">
                        <input required 
                        type={showConfirmPassword ? ("text"):("password")} 
                        value={formData.confirmPassword}
                        onChange={changeHandler}
                        placeholder="Confirm"
                        name="confirmPassword"
                        className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px]
                        small-shadow"
                        />

                        <span onClick={()=>setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-[0.7em] cursor-pointer">
                            {showConfirmPassword ?

                            (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):

                            (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                        </span>
                    </div>
                </label>

            </div>

            <button className="w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 
            mt-6 px-[12px] py-[8px] ">
                Create Account
            </button>

        </form>
    </div>
  )
}

export default SignupForm