import React, {useState, useEffect} from "react";
import '../css/userform.css';
import '../css/animation.css';

const UserLogIn = ({users, handleUserLogin}) => {


    console.log("users are:", users);

    if (users.length === 0){
        return (<p>Loading...</p>)
      }
  
      const userNodes = users.map((user, index) => {
        return <option value={index} key={index}>{user.userName}</option>
        
      })

      const onUserSelect = (event) => {
          event.preventDefault();
          console.log("selected user:", event.target.value);
          if (!event.target.value === "select-user")
          {
              handleUserLogin(users[event.target.value]);
          }
      }





    return (
        <>
        <h2>`User log in :)`</h2>

        <form className="inventory-top-row panel" onSubmit={onUserSelect}>
            <select name="userDropDown" defaultValue="select-user" className="panel-dropdown">
                <option value="select-user" disabled>Select Your Beautiful Self </option>
                {userNodes}
                
            </select>

            <input type="submit" value="Confirm User" />
        </form>



        </>
    )

}


export default UserLogIn;