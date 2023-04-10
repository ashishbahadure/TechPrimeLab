import React ,{useState} from "react";

import axios from 'axios'
import { useNavigate } from "react-router-dom";
function Log()
{
  const navigate = useNavigate();
  const [email,setEmail]= useState('')
  const [password,setPassword] = useState('')
  function handleSubmit(event){
    event.preventDefault();
    axios.post('http://localhost:8081/login',{email,password})
    .then(res =>{
      if(res.data=="No Record")
      {
        alert('you are fire')
      }
      else
      {
        // console.log(res)
        navigate('/home');
      }
    })  
    // .catch(err => console.log(err));
  }
    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3  mt-5 w-25'>
        <h2>sign-In</h2>
        <form action='' onSubmit={handleSubmit} >
            <div className='mb-3'>
              <label><strong> Email</strong></label><br/>
              <input type='email' placeholder='Enter Email' onChange={e => setEmail(e.target.value)} name='email'  className='form-control rounded-0'/>

            </div>
            <div className='mb-3'>
              <label><strong> Password</strong></label><br/>
              <input type='password'  placeholder='Enter password' onChange={e => setPassword(e.target.value)} name='password' className='form-control rounded-0'/>
            </div>
            <button type='submit' className='btn btn-success w-100 rounded-0'><strong> Log in</strong></button>
        </form>
        </div>
    </div>

    )
}
export default Log;