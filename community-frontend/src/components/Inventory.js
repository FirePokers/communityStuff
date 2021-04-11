import React, {useState, useEffect} from 'react';
import AssetList from './AssetList';
import '../css/inventory.css';


const Inventory = ({allAssets, allTags}) => {

    const [assets, setAssets] = useState([]);
    const [searchState, setSearchState] = useState("");
    const [filterTags, setFilterTags] = useState([]);

    useEffect(() => {
        setAssets(allAssets);
    }, [allAssets])

    useEffect(() => {
        setFilterTags(allTags);
    }, [allTags])

    useEffect(() => {
        filterAssets(searchState)
    },[filterTags]);


    const handleChange = (event) => {

        const contents = event.target.value;
        setSearchState(contents);
        filterAssets(contents);
    }

    const filterAssets = (contents) => {

           const newList = allAssets.filter((asset) => {

               const assetTags = asset.tags.reduce((conCatTags, currentTag) => {
                   return conCatTags + currentTag.tagName.toLowerCase();
               }, "")


                return hasFilteredTags(asset.tags) && (asset.name.toLowerCase().includes(contents.toLowerCase()) || 
                    asset.description.toLowerCase().includes(contents.toLowerCase()) ||
                    assetTags.includes(contents.toLowerCase()));
                
           });

           setAssets([...newList]);
        


    }



    function hasFilteredTags(assetTagList) {
  
            const namesFilter = filterTags.map((tag) => {
                return tag.tagName;
            });

            const namesAsset = assetTagList.map((tag) => {
                return tag.tagName;
            });

            return namesFilter.some(nameTag => namesAsset.includes(nameTag));
    //         const result = namesFilter.some(nameTag => namesAsset.includes(nameTag));
    //         console.log("has passed tagtest:", result);
    //         return result;
    } 

    const handleTag = (event) => {
        if(event.target.value === "searchAll")
        {
            setFilterTags(allTags);
        }
        else
        {
            const newTag = allTags[event.target.value];

            if(filterTags.length === allTags.length)
            {
                setFilterTags([...[newTag]]);
            }
            else
            {
                let copiedList = [...filterTags];
                copiedList.push(newTag);
                setFilterTags(copiedList);
            }
            
        }
    }

    const tagOptions = allTags.map((tag, index) => {

        return <option key={index} value={index}>{tag.tagName}</option>
    })


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

                    <form>
                        <select name="tagsSelect" onChange={handleTag} defaultValue="select-tag">
                            <option value='searchAll'>Search All Tags</option>
                            {tagOptions}
                        </select>
                    </form>
                    
                </div>
               <AssetList assets={assets}/> 

            </div>
        </>
    )

};

export default Inventory;