import './Dropdown.css';
import React, {useState} from 'react';
import arrow from '../Images/point-down.png';
import s from '../Images/secure.png';

export default function Dropdown(props) {
    const[Isexpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(!Isexpanded);
    };

    return (
        <div className='dropdown'>
            <div>
                <img src={s} height={25}></img>
                <h5>{props.t}</h5>
                <img src={arrow} height={25} onClick={handleClick}></img>
            </div>
            {Isexpanded && <p>{props.des}</p>}
        </div>
    );
}