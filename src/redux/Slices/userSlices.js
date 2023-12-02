import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [];

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        addUser:(state,action) => {
            state.push({
                ...action.payload,
                id:nanoid()
            });
        },
        editUser:(state,action) => {
            const {id, name, email} = action.payload;

            const existingUser = state.find( user => user.id === id);

            if( existingUser){
                existingUser.name = name;
                existingUser.email = email;
            }
        },
        deleteUser:(state, action) => {
            return state.filter((user) =>(
                user.id !== action.payload
            ))
        }
    }
});

export const { addUser, editUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;