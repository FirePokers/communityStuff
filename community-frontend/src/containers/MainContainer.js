import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request';
import UserForm from '../components/UserForm';
import NavBar from '../components/NavBar';




const MainContainer = () => {

   const [currentUser, setCurrentUser] = useState(null);
   const [allAssets, setAllAssets] = useState(null);
   const [filterTags, setFilterTags] = useState([]);
   const [chosenAsset, setChosenAsset] = useState(null);

   const requestAll = function(){
        
        const request = new Request();
        const userPromise = request.get('/api/users/1')
        const assetPromise = request.get('/api/assets')

   Promise.all(
       [
           request.get('api/users/1')
       ]
   )
   .then((data) => {setCurrentUser(data[0])});
   
   
        Promise.all([userPromise, assetPromise])
        .then((data) => {
            setCurrentUser(data[0]);
            setAllAssets(data[1]);
        })

   }

   const handlePost = function(user){
       const request = new Request();           //?
       request.post("/api/users", user)
       .then(() => window.location = "/users")
   }

   useEffect(() => {
       requestAll();
   }, []);

   return (
       <Router>
       
        <NavBar/>

       <p>I am the maincontainer</p>
       <Switch>

       <Route exact path = "/users/new" render={(probs) =>{
           return <UserForm onCreate={handlePost}/>
       }}/>
       

        
       </Switch>

       </Router>

   ) 
}

export default MainContainer;