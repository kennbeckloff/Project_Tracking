import React, {useEffect, useState } from 'react';
import NewUser from './NewUser.js';
import UserTable from './UserTable';
function User() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("/users")
        .then ((r) => r.json())
        .then((usersArray) => {
            setUsers(usersArray)
            console.log(usersArray)
        });
    }, []);

    function handleAddUser(newUser){
    const updatedUserArray = [newUser, ...users]
    setUsers(updatedUserArray)
  }

    function handleDeleteUser(id){
        const updatedUserArray = users.filter((user) => user.id !== id);
        setUsers(updatedUserArray)
    }
  return (
    <div>
         <NewUser onAddUser={handleAddUser}/>
         < UserTable
         users={users}
         onDeleteUser ={handleDeleteUser}
         />
    </div>
  )
}

export default User