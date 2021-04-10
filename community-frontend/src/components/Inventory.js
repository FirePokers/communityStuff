import React, {useState, useEffect} from 'react';
import AssetList from './AssetList';
import '../css/inventory.css';


const Inventory = ({allAssets, allTags}) => {

    const [assets, setAssets] = useState([]);
    const [searchState, setSearchState] = useState("");
    const [filterTags, setFilterTags] = useState([allTags[2]]);

    useEffect(() => {
        setAssets(allAssets);
    }, [allAssets])


    const handleChange = (event) => {

        const contents = event.target.value;
        setSearchState(contents);

   
           const newList = allAssets.filter((asset) => {

               const assetTags = asset.tags.reduce((conCatTags, currentTag) => {
                   return conCatTags + currentTag.tagName.toLowerCase();
               }, "")


                return hasFilteredTags(asset.tags) && (contents === "" ? true : (asset.name.toLowerCase().includes(contents.toLowerCase()) || 
                    asset.description.toLowerCase().includes(contents.toLowerCase()) ||
                    assetTags.includes(contents.toLowerCase())));
                
           });

           setAssets([...newList]);

    }

    function hasFilteredTags(assetTagList) {
        if(filterTags === [])
        {
            return true;
        }
        else
        {
            const namesFilter = filterTags.map((tag) => {
                return tag.tagName;
            });

            const namesAsset = assetTagList.map((tag) => {
                return tag.tagName;
            });

            return namesFilter.some(nameTag => namesAsset.includes(nameTag));
        }
    } 
   

    return (
        <>
            <div className="inventory-top-row">
                <div className="inventory-searchbox panel in-from-right">
                    <form>
                    <i className="fas fa-search"></i>
                        <input type="text" id="searchTerm" name="searchTerm" className="panel-text" value={searchState} onChange={handleChange}/>
                    </form>

                </div>
            </div>
            <div className="inventory-centre-row">
                <div className="inventory-leftpanel panel in-from-left">
                    <h1>Filter by Tag</h1>

                    <p>Some paragraph text goes in here</p>

                </div>
               <AssetList assets={assets}/> 

            </div>
        </>
    )

};

export default Inventory;