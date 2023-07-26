import {useState} from "react"
import {toast} from "react-hot-toast"

function App() {

  const [formData, setFormData] = useState({
    firstName:"",lastName:"",email:"",country:"None",
    streetAddress:"",city:"",state:"",number:"",
    newPosting:false, existingPosting:false, offers:false,
    pushNotifications:""
  })

  function changeHandler(event){
    const {name, value, checked, type} = event.target
    setFormData((prev)=>({...prev, [name]:type==="checkbox" ? checked:value}))
  }

  function submitHandler(event){
    event.preventDefault();
   
    if(formData.pushNotifications ==="" || (formData.newPosting === false && formData.existingPosting === false && formData.offers===false)
    || formData.firstName===""||formData.lastName===""||formData.email===""||formData.country==="None"||formData.number===""){
      toast.error("Please fill the required fields");
      return;
    }

    toast.success("Your preference is saved")
    console.log("Finally printing the value of Form Data:");
    console.log(formData)
    setFormData({
      firstName:"",lastName:"",email:"",country:"None",
      streetAddress:"",city:"",state:"",number:"",
      newPosting:false, existingPosting:false, offers:false,
      pushNotifications:""
    })
  }

  return (
    <div className="w-full md:max-w-[50%] mx-auto shadow p-8 mt-2 pb-16">
      <h1 className="text-2xl font-semibold">Get Notified</h1>
      <form className="pt-6">

        <label htmlFor="firstName" className="text-sm font-medium leading-6 text-gray-900"
        >First name<sup className="text-pink-200">*</sup></label>
        <br/>
        <input type="text" name="firstName" id = "firstName"
          placeholder="Aman" value={formData.firstName}
          onChange={changeHandler} required
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          
        />

        <br/><br/>
        <label htmlFor="lastName" className=" ga text-sm font-medium leading-6 text-gray-900">
        Last name<sup className="text-pink-200">*</sup></label>
        <br/>
        <input type="text" name="lastName" id = "lastName"
          placeholder="Sharma" value={formData.lastName}
          onChange={changeHandler} required
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />

        <br/><br/>
        <label htmlFor="email" className="text-sm font-medium leading-6 text-gray-900">
        Email<sup className="text-pink-200">*</sup></label>
        <br/>
        <input type="text" name="email" id = "email"
          placeholder="aman@abcd.com" value={formData.email}
          onChange={changeHandler} required
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />
        
        <br/><br/>
        <label htmlFor="country" className="text-sm font-medium leading-6 text-gray-900">
        Country<sup className="text-pink-200">*</sup></label>

        <br/>
        <select id="country" name="country" onChange={changeHandler} required
        value={formData.country} className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 bg-white">
          <option>None</option>
          <option>India</option>
          <option>United States </option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        {/* <br/>
        <label htmlFor="streetAddress" className="text-sm font-medium leading-6 text-gray-900">Street Address</label>
        <br/>
        <input type="text" name="streetAddress" id = "streetAddress"
          placeholder="streetAddress" value={formData.streetAddress}
          onChange={changeHandler}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />

        <br/>
        <label htmlFor="city" className="text-sm font-medium leading-6 text-gray-900">City</label>
        <br/>
        <input type="text" name="city" id = "city"
          placeholder="city" value={formData.city}
          onChange={changeHandler}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />

        <br/>
        <label htmlFor="state" className="text-sm font-medium leading-6 text-gray-900">State / Province</label>
        <br/>
        <input type="text" name="state" id = "state"
          placeholder="state" value={formData.state}
          onChange={changeHandler}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        />*/}

        <br/><br/>
        <label htmlFor="number" className="text-sm font-medium leading-6 text-gray-900">
        Phone no.<sup className="text-pink-200">*</sup></label>
        <br/>
        <input type="number" name="number" id = "number"
          placeholder="9999999999" value={formData.number}
          onChange={changeHandler} required
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        /> 

        <br/><br/>
        <fieldset>
          <legend className="text-sm font-semibold leading-6 text-gray-900">
          By Email<sup className="text-pink-200">*</sup></legend>
          
          <div className="mt-4 space-y-2">
           
            <div className="flex">
              <div className="flex h-6 items-center">
                <input id="newPosting" name="newPosting" type="checkbox"
                  checked={formData.newPosting} onChange={changeHandler}
                  className="h-4 w-4 rounded"
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="newPosting" className="font-medium text-gray-900">New Jobs</label>
                <p className="text-gray-500">Get notified when new jobs available.</p>
              </div>
            </div>

          <div className="flex">
            
              <div className="flex h-6 items-center">
                <input id="existingPosting" name="existingPosting" type="checkbox"
                  checked={formData.existingPosting} onChange={changeHandler}
                  className="h-4 w-4 rounded"
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="existingPosting" className="font-medium text-gray-900">Existing Jobs</label>
                <p className="text-gray-500">Get notified on existing vacant jobs.</p>
              </div>
            
          </div>
          
          <div className="flex">
          
              <div className="flex h-6 items-center">
                <input id="offers" name="offers" type="checkbox"
                  checked={formData.offers} onChange={changeHandler}  
                  className="h-4 w-4 rounded"                
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="offers" className="font-medium text-gray-900">Offers</label>
                <p className="text-gray-500">Get notified on discount offers of courses.</p>
              </div>
           
          </div>
          </div>

        </fieldset>

       
        <br/><br/>
        <fieldset>
          <legend className="text-sm font-semibold leading-6 text-gray-900">
          Push Notifications<sup className="text-pink-200">*</sup></legend>
          <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>

          <div className="mt-4 space-y-2">
            <div className="flex items-center">
              <input type = "radio" id="pushEverything"
                name="pushNotifications" value="Everything"
                onChange={changeHandler} className="h-4 w-4"
                
              />
              <label htmlFor="pushEverything"
              className="ml-3 text-sm font-medium leading-6 text-gray-900">
              Everything</label>
            </div>

            
            <div className="flex items-center">
              <input type = "radio" id="pushEmail"
                name="pushNotifications" value="Same as email"
                onChange={changeHandler} className="h-4 w-4"
              />
              <label htmlFor="pushEmail"
              className="ml-3 text-sm font-medium leading-6 text-gray-900">
              Same as email</label>
            </div>

            
            <div className="flex items-center">
              <input type = "radio" id="pushNothing"
                name="pushNotifications" value="No Push Notifications"
                onChange={changeHandler} className="h-4 w-4"
              />
              <label htmlFor="pushNothing"
              className="ml-3 text-sm font-medium leading-6 text-gray-900">
              No Push Notifications</label>
            </div>
          </div>

        </fieldset>

        <div className="my-5">
        <button onClick={submitHandler} type="submit" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >Save</button>
        </div>
      </form>
    </div>
  );
}

export default App;
