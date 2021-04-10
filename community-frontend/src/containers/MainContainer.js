import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Request from '../helpers/request';
import Inventory from '../components/Inventory';
import AssetItem from '../components/AssetItem';
import '../css/main.css';
import '../css/panel.css';
import '../css/animation.css';


const MainContainer = () => {

   const [currentUser, setCurrentUser] = useState(null);
   const [allAssets, setAllAssets] = useState([]);
   const [allTags, setAllTags] = useState([]);
   const [routeNodes, setRouteNodes] = useState(null);
   const [chosenAsset, setChosenAsset] = useState(null);
   const [Dates, setDates] = useState([]);

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
            setRouteNodes(getRoutes(data[1]));
        })
        

   }

   useEffect(() => {
       requestAll();
   }, []);


   const getRoutes = (assets) => {
        const newNodes = assets.map((asset, index) => {
            console.log("asset to route:", asset);
            return <Route path={`/asset/${asset.id}`} key={index} render={()=> <AssetItem asset={asset} tags={allTags}/>} />
        });
        return [...newNodes];
   };


   if(routeNodes)
   {
        return (

            <div className="main-container">
            <Router>
            {/* navbar in here */}
                <Switch>
                <Route path="/inventory" render={()=> <Inventory allAssets={allAssets} allTags={allTags}/>}/>
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