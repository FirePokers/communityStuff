import React, {useState, useEffect} from 'react';
import AssetDetail from '../components/AssetDetail';
import Request from '../helpers/request';


const MainContainer = () => {

   const [currentUser, setCurrentUser] = useState(null);
   const [allAssets, setAllAssets] = useState(null);
   const [filterTags, setFilterTags] = useState([]);
   const [chosenAsset, setChosenAsset] = useState(null);
   const [Dates, setDates] = useState([]);

   const requestAll = function(){
        
        const request = new Request();
        const userPromise = request.get('/api/users/1')
        const assetPromise = request.get('.api/assets')

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
       <div>I am the maincontainer;
       <AssetDetail />
       </div>
   ) 

    
   

}

export default MainContainer;