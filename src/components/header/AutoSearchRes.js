import React from 'react';

const AutoSearchRes = ({ results, onSearchSelect }) => {
    let renderRes = [];
    if(results) {
        renderRes = results.map((result, index) => {
            return (
                <div>
                    <button onClick={() => onSearchSelect(result[0])}></button>
                </div>
            )
        })
    }
    return <div>{renderRes}</div>;
}

export default AutoSearchRes;