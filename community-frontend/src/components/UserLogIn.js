import React, {useState, useEffect} from "react";
import Request from '../helpers/request';
import '../css/userform.css';
import '../css/animation.css';

const UserLogIn = ({handleUserLogin}) => {


    const [stateName, setStateName] = useState("");
    const [loggedUser, setLoggedUser] = useState(null);

    useEffect(() => {

        if(loggedUser)
        {
            // console.log("logged in: ", loggedUser);
            handleUserLogin(loggedUser)
            // window.location ='/inventory'
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



    
    //    handleUserLogin(request.get(url));
       
    
        // window.location = "/inventory";
    }





    return (
        <>
        

        <form className="log-in panel" onSubmit={onUserSelect}>
            <input class='input-fields' type="text" placeholder='Username:' name="searchUser" id="searchUser" value={stateName} onChange={handleChange}/>


            <input class='confirm-button' type="submit" value="Confirm User" />
        </form>



        </>
    )

}


export default UserLogIn;