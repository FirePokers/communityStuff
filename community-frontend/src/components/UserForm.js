import React, {useState, useEffect} from "react";
import '../css/userform.css';

const UserForm = ({user, onCreate, onEdit}) => {              
    const [stateUser, setStateUser] = useState(
        {
        userName:"",
        firstName: "",
        lastName: "",
        email: "",
        memberLevel: 0
        // credits: 1
        }
    )

    const handleChange = function(event){
        let propertyName = event.target.name;
        let copiedUser = {...stateUser}
        copiedUser[propertyName] = event.target.value;
        setStateUser(copiedUser)
    }

    const handleSubmit = function(event){
        event.preventDefault();
        if(stateUser.id){
            onEdit(stateUser)
        } else {
            onCreate(stateUser);
        }
        
    }

    useEffect(()=>{
        if(user){
          let copiedUser = {...user}
          setStateUser(copiedUser)
      }
        }, [user])

    return (
        <div className="user-form panel in-from-top">

        <form onSubmit={handleSubmit}>
            <h2>User Form:</h2>
            <input type="text" placeholder="User Name" name="userName" onChange={handleChange} value={stateUser.userName} />
            <input type="text" placeholder="First Name" name="firstName" onChange={handleChange} value={stateUser.firstName} />
            <input type="text" placeholder="Last Name" name="lastName" onChange={handleChange} value={stateUser.lastName} />
            <input type="email" placeholder="Email" name="email" onChange={handleChange} value={stateUser.email} />

            <button type="submit">Create User</button>
        </form>
       
        </div>
       )
    }

    export default UserForm;