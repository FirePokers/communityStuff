import React, {useState, useEffect} from 'react';
import AssetList from './AssetList';
import '../css/inventory.css';


const Inventory = ({allAssets, allTags}) => {

    const [assets, setAssets] = useState([]);
    const [filterTags, setFilterTags] = useState([]);

    useEffect(() => {
        setAssets(allAssets);
    }, [allAssets])



    return (
        <>
            <div className="inventory-top-row">
                <div className="inventory-searchbox panel in-from-right">
                    <form>
                    <i className="fas fa-search"></i>
                        <input type="text" id="searchTerm" name="searchTerm" className="panel-text"/>
                    </form>

                </div>
            </div>
            <div className="inventory-centre-row">
                <div className="inventory-leftpanel panel in-from-left">
                    <h1>Side Panel Header</h1>

                    <p>Some paragraph text goes in here</p>

                </div>
               <AssetList assets={assets}/> 

            </div>
        </>
    )

};

export default Inventory;