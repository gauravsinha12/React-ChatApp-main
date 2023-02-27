import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const MainForm = () => {

    const navigate = useNavigate();
    const [error, setError] = useState();
    const [data, setUser] = useState({username:'', room:''});

    const handleChange = (e) => {
        // console.log(e.target.name, e.target.value);
        setUser({
            ...data,
            [e.target.name]: e.target.value
        });
    }

   // form validation
    const validation = () =>{
        if(!data.username){
            setError('Please enter a name');
            return false;
        }
        if(!data.room){
            setError('Please select a room');
            return false;
        }
        setError("");
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validation()){
            navigate(`/chat/${data.room}`, {state:data});
        }
    }

  return (
      <div className='px-3 py-4 shadow bg-white text-dark border rounded row' style={{marginTop:'10%'}}>
        <form onSubmit={handleSubmit}>
            <div className='form-group mb-4'>
                <h3 className='text-dark mb-4 text-center'>Welcome to Chat club</h3>
            </div>
            <div className='form-group mb-4'>
                <input type='text' className='form-control' name='username' placeholder='Enter Name' onChange={handleChange}/>
            </div>
            <div className='form-group mb-4'>
               <select className='form-select bg-light' name='room' onChange={handleChange}>
                    <option value="">Select Room</option>
                    <option value="gaming">Gaming</option>
                    <option value="coding">Coding</option>
                    <option value="socialMedia">Social Media</option>
               </select>
            </div>
            <button className='btn btn-warning w-100 mb-2 shadow' type='submit'>Submit</button>
        </form>
      {error ? <small className='text-danger text-center w-500'>{error}</small> : ""}
    </div>
  )
}

export default MainForm