import React, {useState, useEffect} from 'react';
import Request from '../helpers/request';


const MainContainer = () => {

   const [currentUser, setCurrentUser] = useEffect(null);

   const request = new Request();

   Promise.all(
       [
           request.get('api/users/1')
       ]
   )
   .then((data) => {setCurrentUser(data)});
   
   
}

export default MainContainer;