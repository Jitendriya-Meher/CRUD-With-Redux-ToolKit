import React, { useState } from 'react'
import TextFiled from '../Componets/TextFiled'
import Button from '../Componets/Button'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/Slices/userSlices';
import toast from 'react-hot-toast';

const AddUser = () => {
    
    const [value, setValue] = useState({
        name:"",
        email:"",
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAddUser = () => {
        
        if( !value.name || !value.email){
          toast.error("Please enter all required fields");
            return;
        }
        
        dispatch(addUser(value));
        setValue({
            name:"",
            email:"",
        });
        toast.success("User added successfully");
        navigate("/");
    }

  return (
    <div className='mt-10 max-w-xl mx-auto'>
      
      <TextFiled
      label={"Name"}
      inputProps={{type:"test", placeholder:"Jiten"}}
      value={value.name}
      onChange={(e) => setValue({...value, name: e.target.value})}
      ></TextFiled>
      <br />
      <TextFiled
      label={"Email"}
      inputProps={{type:"email", placeholder:"jiten@gmail.com"}}
      value={value.email}
      onChange={(e) => setValue({...value, email: e.target.value})}
      ></TextFiled>

      <Button onClick={handleAddUser}>
        Submit
      </Button>
    </div>
  )
}

export default AddUser

