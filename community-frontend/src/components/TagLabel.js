import React from 'react';

const TagLabel = ({tag, onTagRemove}) => {

    const handleClick = () => {

        onTagRemove(tag);
    }

    return (
        <div className="inventory-tag-label cool-appear1 dissolve-appear" onClick={handleClick}>
            {tag.tagName} <i className="far fa-window-close"></i>
        </div>


    )

};

export default TagLabel;
