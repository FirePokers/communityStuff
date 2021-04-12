import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Request from '../helpers/request';
import Inventory from '../components/Inventory';
import UserForm from "../components/UserForm";
import EditForm from "../components/EditForm";
import AssetItem from '../components/AssetItem';
import NavBar from '../components/NavBar';
import UserLogIn from '../components/UserLogIn';
import '../css/main.css';
import '../css/panel.css';
import '../css/animation.css';


const MainContainer = () => {

   const [allUsers, setAllUsers] = useState(null);
   const [currentUser, setCurrentUser] = useState(null);
   const [allAssets, setAllAssets] = useState([]);
   const [allTags, setAllTags] = useState([]);
   const [routeNodes, setRouteNodes] = useState(null);
   const [chosenAsset, setChosenAsset] = useState(null);
   const [Dates, setDates] = useState([]);

   const requestAll = function(){
        
        const request = new Request();
        const userPromise = request.get('/api/users')
        const assetPromise = request.get('/api/assets')
        const tagPromise = request.get('/api/tags')

        Promise.all([userPromise, assetPromise, tagPromise])
        .then((data) => {
            setAllUsers(data[0]);
            setAllAssets(data[1]);
            setAllTags(data[2]);
            setRouteNodes(getRoutes(data[1]));
        })
        

   }

   const handleDelete = function(user){
       const request = new Request();
       const url = (`/api/users/${user.id}`)
       request.delete(url)
       .then(() => window.location = "/users")
       
   }

   const handlePost = function(user){
       console.log("new user", user);
       const request = new Request();          
       request.post("/api/users", user)
       .then(() => window.location = "/users/")
   }

   const handleEdit = function(user){
       console.log("edit user", user);
       const request = new Request();           
       request.patch(`/api/users/${user.id}`, {
           id: user.id,
           userName: user.userName,
           firstName: user.firstName,
           lastName: user.lastName,
           email: user.email,
           memberLevel: user.memberLevel,
           renewDate: user.renewDate
       })
       .then(() => window.location = "/users/")
   }

   const handleUserLogin = (user) => {
       console.log("logging in: ", user);
   }
   useEffect(() => {
       requestAll();
   }, []);


    
   const getRoutes = (assets) => {
        const newNodes = assets.map((asset, index) => {
            return <Route path={`/asset/${asset.id}`} key={index} render={()=> <AssetItem asset={asset} tags={allTags}/>} />
        });
        return [...newNodes];
   };


   if(routeNodes && allUsers)
   {
        return (

            <div className="main-container">
            <Router>
                <NavBar />
                <Switch>
                <Route path="/inventory" render={()=> <Inventory allAssets={allAssets} allTags={allTags}/>}/>

                <Route exact path = "/users/new" render={(probs) =>{return <UserForm onCreate={handlePost}/>}}/>

               <Route exact path = "/users/edit" render={(probs) =>{return <EditForm user={currentUser} onEdit={handleEdit} onDelete={handleDelete}/>}}/>

                <Route exact path="/" render={(probs) =>{return <UserLogIn users={allUsers} handleUserLogin={handleUserLogin}/>}}/>
                {routeNodes}
               </Switch>
               {/* or navbar in here */}
            </Router>
            </div>
        );
    }
    else
    {
        return null;
    }
    
}

export default MainContainer;