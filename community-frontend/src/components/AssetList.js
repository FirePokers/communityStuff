import React from 'react';
import InventoryItem from './InventoryItem';

const AssetList = ({assets}) => {

    if(assets)
    {
        const assetsNode = assets.map((asset, index) => {
            return <InventoryItem asset={asset} key={index}/>
        });

    return (
        <div className=" inventory-asset-list dissolve-appear3">
            {assetsNode}
        </div>
    );
    }
    else
    {
        return null;
    }

};

export default AssetList;