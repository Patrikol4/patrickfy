import React from 'react';
import { List, ListGroup, ListGroupItem } from 'reactstrap';

const AutoSearchRes = ({ results, onSearchSelect }) => {
    let renderRes = [];
    if (results) {
        renderRes = results.map((result, index) => {
            return (
                    <ListGroupItem key={index} onClick={() => onSearchSelect(result[0])}>
                        {result[0]}
                    </ListGroupItem>
            )
        })
    }
    return <ListGroup>{renderRes}</ListGroup>;
}

export default AutoSearchRes;