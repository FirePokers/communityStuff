import React, {useState, useEffect} from 'react';
import AssetList from './AssetList';
import TagLabel from './TagLabel';
import '../css/inventory.css';


const Inventory = ({allAssets, allTags}) => {

    const [assets, setAssets] = useState([]);
    const [searchState, setSearchState] = useState("");
    const [filterTags, setFilterTags] = useState([]);
    const [tagLabels, setTagLabels] = useState([]);

    useEffect(() => {
        setAssets(allAssets);
    }, [allAssets])

    useEffect(() => {
        setFilterTags(allTags);
    }, [allTags])

    useEffect(() => {
        filterAssets(searchState);
        createLabels();
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
                if(!filterTags.includes(newTag))
                {
                    let copiedList = [...filterTags];
                    copiedList.push(newTag);
                    setFilterTags(copiedList);
                }
            }
            
        }
    };

    const handleTagDelete = (tag) => {

        if (filterTags.length === 1)
        {
            setFilterTags(allTags);
        }
        else
        {
            let newList = [...filterTags];
            const index = newList.indexOf(tag);

            newList.splice(index, 1);
            setFilterTags(newList);
        } 

        console.log("tag deleted:", tag);
    }

    const createLabels = () => {

        if(filterTags.length === allTags.length)
        {
            setTagLabels([]);
        }
        else
        {
            const tagNodes = filterTags.map((element, index) => {
                return <TagLabel key={index} tag={element} onTagRemove={(tag) => handleTagDelete(tag)} />
            });

            setTagLabels(tagNodes);
        }
    }

    const tagOptions = allTags.map((tag, index) => {

        return <option key={index} value={index}>{tag.tagName}</option>
    });



    return (
        <>
            <div className="inventory-top-row">
            </div>

            <div className="inventory-centre-row">

                <div className="inventory-left-container">
                <div className="inventory-searchbox panel in-from-right">
                    <form>
                    <span className="fas fa-search white-color" ></span>
                        <input type="text" id="searchTerm" name="searchTerm" className="panel-text" value={searchState} onChange={handleChange}/>
                    </form>

                </div>
                <div className="inventory-leftpanel panel in-from-left">
                    <h1 className='h1-filter-heading'>Filter by Tag</h1>

                    <form>
                        <select className="tagsSelect" onChange={handleTag} defaultValue="select-tag" className="panel-dropdown">
                            <option value='searchAll'>Select</option>
                            {tagOptions}
                        </select>
                    </form>

                    <div className="inventory-tag-container">
                        {tagLabels}
                    </div>
                    
                </div>
                </div>
               <AssetList assets={assets}/> 
               </div>
            
        </>
    )

};

export default Inventory;