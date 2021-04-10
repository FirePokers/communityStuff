import React from 'react';
import BookingCalendar from './Calendar'


const AssetItem = ({asset}) => {

    return (
        <div className='asset-container'>
      
            <h1>asset</h1>
            <BookingCalendar asset={asset}/>
        

        </div>
    )
}

export default AssetItem;