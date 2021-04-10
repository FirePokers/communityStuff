import React from 'react';
import AssetItem from './AssetItem'

const AssetList = () => {


    return (
        <div className="inventory-leftpanel panel dissolve-appear3">
            <h1>Tools appear here</h1>

            <p>This will be multiple boxes containing different tools. They will take up the bulk of the page.</p>
            <AssetItem />
        </div>
    );


};

export default AssetList;