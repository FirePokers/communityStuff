import React from 'react';
import Calendar from './Calendar';
import AssetList from './AssetList';
import '../css/assetItem.css'
import '../css/panel.css'
;

const AssetItem = ({asset, tags, onCreate}) => {

    const sessionStorage = window.sessionStorage;
    let user = JSON.parse(window.sessionStorage.getItem("user"));


    if (!asset){
        return <p>Loading...</p>
    }






    return (
        <div className="asset-container">
            <div className="asset-text panel">
                
                <img src={asset.imageUrl} alt={asset.name} className="inventory-image"/>
                <h3>{asset.name}</h3>
                <p><strong>Description:  </strong>{asset.description}</p>
                <p><strong>Certification required:</strong>{" "} {asset.certificationDetail}</p>   

            </div>

            <Calendar asset={asset} user={user ? user : null} onCreate={onCreate}/>
            


        </div>
    )
}

export default AssetItem;