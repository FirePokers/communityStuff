import React from 'react';
import Calendar from './Calendar';
import AssetList from './AssetList';
import '../css/assetItem.css'
;

const AssetItem = ({asset, tags}) => {

    if (!asset){
        return <p>Loading...</p>
    }


    return (
        <div className='asset-container'>
      
            <h1>asset</h1>
            <p>name:{asset.name}</p>
            <p>startDate{asset.bookings[0].startDate}</p>
            <p>endDate{asset.bookings[0].endDate}</p>
            <Calendar asset={asset}/>


        </div>
    )
}

export default AssetItem;