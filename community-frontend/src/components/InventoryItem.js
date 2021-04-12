import React from 'react';
import {Link} from 'react-router-dom';
import '../css/inventory.css';

const InventoryItem = ({asset}) => {

    return (
        <Link to={`/asset/${asset.id}`}>
            <div className="inventory-item panel dissolve-appear">
                <span className="inventory-item-title">{asset.name}</span>
                <img src={asset.imageUrl} alt={asset.name} className="inventory-image"/>
            </div>
        </Link>
    )

};

export default InventoryItem;