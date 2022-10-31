import React, { useState } from 'react'

function NewUser({onAddUser}) {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState (" ")
    const [email, setEmail] = useState("")
    const [cohort_id, setCohort] = useState("")


    function handleSubmit(e) {
        e.preventDefault()
    
        fetch("/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name,
            last_name,
            email,
            cohort_id
          
          }),
        })
        .then((r) => r.json())
        .then(newUser => {
          onAddUser(newUser)
          setFirstName("")
          setLastName("")
          setEmail("")
          setCohort("")
        })
      }

  return (
    <div className='addUser'>
        <h3>Add A User</h3>
        <form onSubmit={handleSubmit} >
            <input
              type="text"
              name ="first_name"
              required = "required"
              placeholder="firstname"
              value ={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {" "}
             <input
              type="text"
              name ="last_name"
              required = "required"
              placeholder="last name"
              value ={last_name}
              onChange={(e) => setLastName(e.target.value)}
            />
            {" "}
             <input
           type="text"
           name ="email"
           required = "required"
           placeholder="email"
           value ={email}
           onChange={(e) => setEmail(e.target.value)}
            />
            {" "}
          <input
           type="text"
           name ="cohort_id"
           required = "required"
           placeholder="cohort"
           value ={cohort_id}
           onChange={(e) => setCohort(e.target.value)}
            />
            
        <button type="submit">Add</button>

        </form>
    </div>
  )
}

export default NewUser