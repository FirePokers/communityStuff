import React, {useState, useEffect} from "react";
import Request from '../helpers/request';
import '../css/userform.css';
import '../css/animation.css';

const UserLogIn = ({handleUserLogin}) => {


    const [stateName, setStateName] = useState("");
    const [loggedUser, setLoggedUser] = useState(null);

    const sessionStorage = window.sessionStorage;

    useEffect(() => {

        if(loggedUser)
        {
            handleUserLogin(loggedUser);

            sessionStorage.setItem("user", JSON.stringify(loggedUser[0]));
            window.location ='/inventory'
        }
    }, [loggedUser])

    const handleChange = (event) => {
        setStateName(event.target.value);

    } 

    const onUserSelect = (event) => {
        event.preventDefault();
        console.log("clicked");
       const request = new Request();
       const url = (`/api/users/?name=${stateName}`)
       fetch(url)
       .then((res) => res.json())
       .then((data) => {
           setLoggedUser(data)
       });

    }





    return (
        <>
        
        <div className="generic-centre-row">

        <form className="log-in panel in-from-left" onSubmit={onUserSelect}>
            <input className='sign-in-input-fields' type="text" placeholder='Username:' name="searchUser" id="searchUser" value={stateName} onChange={handleChange}/>


            <input className='login-button' type="submit" value="Confirm User" />
        </form>
        </div>



        </>
    )

}


export default UserLogIn;