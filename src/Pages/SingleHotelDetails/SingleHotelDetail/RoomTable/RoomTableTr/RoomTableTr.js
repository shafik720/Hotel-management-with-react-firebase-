import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBaby } from '@fortawesome/free-solid-svg-icons';


const RoomTableTr = (props) => {
    let superiorTwin = <span className='bedIcon'><FontAwesomeIcon icon={faUser} /> <FontAwesomeIcon icon={faUser} /> + <FontAwesomeIcon icon={faBaby} /></span> ;
    let td = props.index;
    if(td == 3){
        td = superiorTwin;
    }
    return (
        <td>
            {td}                        
        </td>
    );
};

export default RoomTableTr;