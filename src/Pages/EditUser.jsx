import React, { useState } from 'react'
import TextFiled from '../Componets/TextFiled'
import Button from '../Componets/Button'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../redux/Slices/userSlices';
import toast from 'react-hot-toast';

const EditUser = () => {

    const {id} = useParams();
    const users = useSelector(state=>state.users);

    const existingUser = users.filter(user => user.id === id);
    console.log("existingUser", existingUser);
    const {name, email} = existingUser[0];
    
    const [value, setValue] = useState({
        name,
        email
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleEditUser = () => {
        if( !value.name || !value.email){
            toast.error("Please enter all required fields");
            return;
        }
        
        dispatch(editUser({
            ...value,id
        }));

        setValue({
            name:"",
            email:"",
        });
        toast.success("User edited successfully");
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

      <Button onClick={handleEditUser}>
        Edit
      </Button>
    </div>
  )
}

export default EditUser

