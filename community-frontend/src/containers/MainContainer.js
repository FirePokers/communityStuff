import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Request from '../helpers/request';
import Inventory from '../components/Inventory';
import UserForm from "../components/UserForm";
import EditForm from "../components/EditForm";
import '../css/main.css';
import '../css/panel.css';
import '../css/animation.css';


const MainContainer = () => {

   const [currentUser, setCurrentUser] = useState(null);
   const [allAssets, setAllAssets] = useState(null);
   const [allTags, setAllTags] = useState([]);
   const [filterTags, setFilterTags] = useState([]);
   const [chosenAsset, setChosenAsset] = useState(null);

   const requestAll = function(){
        
        const request = new Request();
        const userPromise = request.get('/api/users/1')
        const assetPromise = request.get('/api/assets')
        const tagPromise = request.get('/api/tags')

        Promise.all([userPromise, assetPromise, tagPromise])
        .then((data) => {
            setCurrentUser(data[0]);
            setAllAssets(data[1]);
            setAllTags(data[2]);
        })

   }

   const handlePost = function(user){
       console.log("new user", user);
       const request = new Request();          
       request.post("/api/users", user)
       .then(() => window.location = "/users")
   }

   const handleEdit = function(user){
       console.log("edit user", user);
       const request = new Request();           
       request.patch("/api/users", user)
       .then(() => window.location = "/users")
   }
   useEffect(() => {
       requestAll();
   }, []);

   return (

    <div className="main-container">
       <Router>
           {/* navbar in here */}
           <Switch>
               <Route path="/inventory" render={()=> <Inventory allAssets={allAssets} allTags={allTags}/>}/>
               
               <Route exact path = "/users/new" render={(probs) =>{return <UserForm onCreate={handlePost}/>}}/>

               <Route exact path = "/users/edit" render={(probs) =>{return <EditForm user={currentUser} onEdit={handleEdit}/>}}/>
           </Switch>
           {/* or navbar in here */}
       </Router>
    </div>
   ) 
}

export default MainContainer;