import React, {useState, useEffect} from 'react';
import Request from '../helpers/request';
import UserForm from '../components/UserForm';


const MainContainer = () => {

   const [currentUser, setCurrentUser] = useState(null);
   const [allAssets, setAllAssets] = useState(null);
   const [filterTags, setFilterTags] = useState([]);
   const [chosenAsset, setChosenAsset] = useState(null);

   const requestAll = function(){
        
        const request = new Request();
        const userPromise = request.get('/api/users/1')
        const assetPromise = request.get('.api/assets')

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
        Promise.all([userPromise, assetPromise])
        .then((data) => {
            setCurrentUser(data[0]);
            setAllAssets(data[1]);
        })

   }

   useEffect(() => {
       requestAll();
   }, []);

   return (
       <p>I am the maincontainer</p>
   ) 

    
   

}

export default MainContainer;