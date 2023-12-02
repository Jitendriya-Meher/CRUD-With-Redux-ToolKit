import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserList from "./Componets/UserList";
import AddUser from "./Pages/AddUser";
import EditUser from "./Pages/EditUser";

function App() {
  return (
    
    <div className="">

<div className=" absolute top-2 right-2 text-gray-500">
  Created By Jitendriya Meher
</div>

<div className=" container mx-auto px-2 max-w-5xl pt-10 md:pt-20">


<h1 className=" text-center font-bold text-2xl text-gray-700">
  CRUD With Redux ToolKit
</h1>

<Routes>
  <Route path="/" element={<UserList></UserList>}></Route>
  <Route path="/add-user" element={<AddUser></AddUser>}></Route>
  <Route path="/edit-user/:id" element={<EditUser></EditUser>}></Route>
</Routes>

</div>
    </div>
  );
}

export default App;
