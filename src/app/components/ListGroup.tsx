'use client';

import { Fragment, useState } from "react"
import { MouseEvent } from "react"


interface Props {
    items: string[];
    heading: string;
    //onSelectItem: (item: string) => void;
}

function ListGroup( {items, heading} : Props) {


    const [selectedIndex, setSelectedIndex] = useState(-1);

    //items = []

    const message = items.length === 0 ? <p>No Items found</p> : null

    const getMessage = () => {
        return  items.length === 0 && <p>No Items found</p> ;;
    }

    const handleClick = (event : MouseEvent) => console.log(event);

    return (
        <Fragment>
        <h1>{heading}</h1>
        {getMessage()}
        <ul className="list-group">
            { items.map((item, index) => 
                <li 
                    className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                    key={item} 
                    onClick={ ()=> {setSelectedIndex(index); console.log(item);}}
                >
                    {item}
                </li>) }
        </ul>
        </Fragment>
    );
}
export default ListGroup;