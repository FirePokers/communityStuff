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
import BookingConfirm from '../components/BookingConfirm';
import UserBookings from '../components/UserBookings';


const MainContainer = () => {

   const [currentUser, setCurrentUser] = useState(null);
   const [allAssets, setAllAssets] = useState(null);
   const [allTags, setAllTags] = useState([]);
   const [routeNodes, setRouteNodes] = useState(null);
   const [Dates, setDates] = useState([]);

   const requestAll = function(){
        
        const request = new Request();
        const assetPromise = request.get('/api/assets')
        const tagPromise = request.get('/api/tags')

        Promise.all([assetPromise, tagPromise])
        .then((data) => {
            setAllAssets(data[0]);
            setAllTags(data[1]);
            setRouteNodes(getRoutes(data[0], currentUser));
        })
        

   }

   useEffect(() => {
    if(currentUser != null)
    {
        setRouteNodes(getRoutes(allAssets, currentUser));
    }

   },[currentUser])
   
   useEffect(() => {

    if(allAssets != null)
    {
       setRouteNodes(getRoutes(allAssets, currentUser));
    }
   },[allAssets])

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
       setCurrentUser(user[0])
       console.log("logging in: ", user);
   }
   const handleBookingPost = function(booking){
       const request = new Request();
       request.post("/api/bookings", booking)
       .then(() => window.location = `/bookingconfirm`)
}



   useEffect(() => {
       requestAll();
   }, []);

   useEffect(() => {
    if(currentUser)
    {
        console.log("LOGGED IN!!!", currentUser);
    }
   },[currentUser])


    const getRoutes = (assets, user) => {

 
            const newNodes = assets.map((asset, index) => {
                return <Route path={`/asset/${asset.id}`} key={index} render={()=> <AssetItem asset={asset} tags={allTags} user={user} onCreate={handleBookingPost}/>} />
            });
            return [...newNodes];

   };


   
   if(routeNodes && allAssets)
   {

        return (

            <div className="main-container">
            <Router>
                <NavBar />
                <Switch>
                <Route path="/inventory" render={()=> <Inventory allAssets={allAssets} allTags={allTags}/>}/>
                <Route exact path = "/users/new" render={(probs) =>{return <UserForm onCreate={handlePost}/>}}/>
                <Route exact path = "/users/edit" render={(probs) =>{return <EditForm user={currentUser} onEdit={handleEdit} onDelete={handleDelete}/>}}/>
                <Route exact path="/" render={(probs) =>{return <UserLogIn handleUserLogin={handleUserLogin}/>}}/>
                <Route exact path = "/bookingconfirm" render={() => <BookingConfirm />} />
                <Route exact Path = "/users/bookings/test" render={() => <UserBookings user={currentUser}/>} />
                {routeNodes}
               </Switch>
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