import React from 'react'

function UserRow({user, onDeleteUser}) {
    const { id, first_name, last_name, email, cohort_id } = user

    function handleDeleteUser(){
        fetch(`/users/${id}`,{
            method: "DELETE",
        }).then((r) => {
            if (r.ok){
                onDeleteUser(id)
            }
        })
    }
  return (
    <div className='card'>
        <table>
         <tbody>
            <tr>
             <td>{first_name}</td>
             <td>{last_name}</td>
             <td>{email}</td>
             <td>{cohort_id}</td>
            </tr>
         </tbody>
        </table>
        <button onClick={handleDeleteUser}>Delete</button>
    </div>
  )
}

export default UserRow