import React, {useState, useEffect} from 'react';
import Request from '../helpers/request';
import UserForm from '../components/UserForm';


const MainContainer = () => {

   const [currentUser, setCurrentUser] = useState(null);

   const request = new Request();

   Promise.all(
       [
           request.get('api/users/1')
       ]
   )
   .then((data) => {setCurrentUser(data[0])});
   
   return (
       <div>
        <h1>"I am the main container"</h1>
       <UserForm/>
       </div>
   )
   
}

export default MainContainer;