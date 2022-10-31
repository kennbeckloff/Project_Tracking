import React from 'react';
import UserRow from './UserRow';

function UserTable({ users, onDeleteUser}) {
  return (

    <div className='user-container'>
        <table> 
        <thead>
                <tr>
                    <th>First Name</th>
                    <th>Second Name</th>
                    <th>Email</th>
                    <th>Cohort</th>
                </tr>
            </thead>  
            <tbody>
            {users.map((user) => {
            return (

                <UserRow
                key = {user.id}
                user ={user}
                onDeleteUser= {onDeleteUser}
                
                />
            );
        })}
            </tbody>
           
        </table>
      
    </div>
  );
}

export default UserTable