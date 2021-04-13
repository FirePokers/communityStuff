import React, {useState, useEffect} from "react";
import '../css/userform.css';
import '../css/navbar.css';

const Editform = ({onEdit, onDelete}) => {       
    
    const sessionStorage = window.sessionStorage;
    let user = JSON.parse(window.sessionStorage.getItem("user"));

    const [stateUser, setStateUser] = useState(user);


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
        sessionStorage.setItem("user", JSON.stringify(stateUser));

        onEdit(stateUser);
        // if(stateUser.id){
        // onEdit(stateUser)
        // } 
            
        }
    

    // useEffect(()=>{
    //     if(user){
    //       let copiedUser = {...user}
    //       setStateUser(copiedUser)
    //   }
    //     }, [user])

    if(stateUser)
    {
        return (

            <div className="generic-centre-row">
           
            <form onSubmit={handleSubmit}>
            <div className="edit-form panel in-from-top">

            
                
                 <h2 className="edit details h2">Edit Details</h2>
                <input className="edit-input" type="text" placeholder="User Name" name="userName" onChange={handleChange} value={stateUser.userName} />
                <input className="edit-input" type="text" placeholder="First Name" name="firstName" onChange={handleChange} value={stateUser.firstName} />
                <input className="edit-input" type="text" placeholder="Last Name" name="lastName" onChange={handleChange} value={stateUser.lastName} />
                <input className="edit-input" type="email" placeholder="Email" name="email" onChange={handleChange} value={stateUser.email} />

                <button className="edit-delete-button" type="submit">Edit</button>

                <button className="edit-delete-button" type="button" onClick={onDelete} >Delete Account </button>
        
            </div>
            
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