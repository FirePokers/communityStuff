import React, {useState, useEffect} from "react";
import '../css/userform.css';

const Editform = ({onEdit, onDelete}) => {       
    
    const sessionStorage = window.sessionStorage;
    let user = JSON.parse(window.sessionStorage.getItem("user"));

    const [stateUser, setStateUser] = useState(user[0]);


    const handleChange = function(event){
        let propertyName = event.target.name;
        let copiedUser = {...stateUser}
        copiedUser[propertyName] = event.target.value;
        setStateUser(copiedUser)
    }

    // const handleDelete = () => {
    //     onDelete(stateUser)
    // }

    const handleSubmit = function(event){
        event.preventDefault();

        console.log("user to pass up:", stateUser);
        onEdit(stateUser);
        // if(stateUser.id){
        // onEdit(stateUser)
        // } 
            
        }
    

    useEffect(()=>{
        if(user){
          let copiedUser = {...user}
          setStateUser(copiedUser)
      }
        }, [user])

    if(stateUser)
    {
        return (
            <div className="edit-form panel in-from-top">

            <form onSubmit={handleSubmit}>
                <h2>Edit Form:</h2>
                <input type="text" placeholder="User Name" name="userName" onChange={handleChange} value={stateUser.userName} />
                <input type="text" placeholder="First Name" name="firstName" onChange={handleChange} value={stateUser.firstName} />
                <input type="text" placeholder="Last Name" name="lastName" onChange={handleChange} value={stateUser.lastName} />
                <input type="email" placeholder="Email" name="email" onChange={handleChange} value={stateUser.email} />

                <button type="submit">Edit</button>

                <button type="button" onClick={onDelete} >Delete Account </button>
            </form>
        
            </div>
    
       )
    }
    else
    {
        return null;
    }
}



    export default Editform;