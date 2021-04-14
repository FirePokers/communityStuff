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
        <div className="generic-centre-row"> 
            <div className="asset-container">

        <div className="asset-left-column"> 
                <div className="asset-image-box panel dissolve-appear">
                    <span className="inventory-item-title">{asset.name}</span>
                    <img src={asset.imageUrl} alt={asset.name} className="inventory-image"/>
                </div>
            <div className="asset-text panel">
                <h3>{asset.name}</h3>
                <p><strong>Description:  </strong>{asset.description}</p>
                <p><strong>Certification required:</strong>{" "} {asset.certificationDetail}</p>   

            </div>
            </div>

            
            <Calendar asset={asset} user={user ? user : null} onCreate={onCreate}/>
        </div>


        </div>
    )
}

export default AssetItem;