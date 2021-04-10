import React from 'react';
import Inventory from './Inventory';
import AssetItem from './AssetItem';


const AssetList = ({assets}, {tags}) => {


    const assetNodes = assets.map((asset, index) => {
        return (
            <AssetItem asset={asset}/>
        )
    })


    return (
        <div className="inventory-leftpanel panel dissolve-appear3">
            <h1>Tools appear here</h1>

            <p>This will be multiple boxes containing different tools. They will take up the bulk of the page.</p>
        </div>
    );


};

export default AssetList;