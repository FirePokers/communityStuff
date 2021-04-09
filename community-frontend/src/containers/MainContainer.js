import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Request from '../helpers/request';
import Inventory from '../components/Inventory';
import '../css/main.css';
import '../css/panel.css';


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

   useEffect(() => {
       requestAll();
   }, []);

   return (

    <div className="main-container">
       <Router>
           <Switch>
               <Route path="/inventory" render={()=> <Inventory allAssets={allAssets} allTags={allTags}/>}/>
           </Switch>
       </Router>
    </div>
   ) 

    
   

}

export default MainContainer;