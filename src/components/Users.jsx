import React, { useEffect, useState } from 'react';
import { getAllUsers, createUser, deleteUser, updateUser } from '../services/usersService';

const Users = () => {
    const [users, setUsers] = useState([])

    const fetchData = async () => {
        try {
            const userList = await getAllUsers()
            setUsers(userList)
        } catch (error) {
            console.log(error)
        }
    }
    
    const handleCreateUser = async () => {
        try {
            const myUser = {userName: "hhh", email: "hhh@gg", password: "hhh"}
           const newUser= await createUser(myUser)
           setUsers(prevList => [...prevList, newUser])
        } catch (error) {
            console.log(error)
        }
    }

    const handleUpdateUser = async(id, user) => {
        try {
            const myUserToUpdate = user
            const updatedUser = await updateUser(id, myUserToUpdate)
            const updatedList = users.map(u => u.userId === user.userId? updatedUser : u)
            setUsers(updatedList)
        } catch (error) {
            console.log(error)
        }
      
    }

    const handleDeleteUser = async (userId) => {
        try {
            await deleteUser(userId);
            const updatedList = users.filter(u => u.userId !== userId)
            setUsers(updatedList);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    return (
        <div id='users'>
            <h2>All users</h2>
            <button onClick={handleCreateUser}>Add new user</button>
            {users.map(u => 
            <div key={u.userId}>
                <h3>name: {u.userName}</h3>
                <h5>email: {u.email}</h5>
                <h5>password: {u.password}</h5>
                <button onClick={() => handleUpdateUser(u.userId, u)} >Update user</button>
                <button onClick={() =>handleDeleteUser(u.userId)}>Delete user</button>
            </div>)}
        </div>
    )
}

export default Users;


    