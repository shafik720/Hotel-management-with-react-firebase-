import React from 'react';
import './RoomTableTr.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBaby, faUsersLine  } from '@fortawesome/free-solid-svg-icons';


const RoomTableTr = (props) => {
    
    //------------- making icons for showing bed quantity in the table area for every specific hotels
    let single = <span className='bedIcon'><FontAwesomeIcon icon={faUser} /> </span>;
    let double = <span className='bedIcon'><FontAwesomeIcon icon={faUser} /> <FontAwesomeIcon icon={faUser} /> </span>;
    let superiorTwin = <span className='bedIcon'><FontAwesomeIcon icon={faUser} /> <FontAwesomeIcon icon={faUser} /> + <FontAwesomeIcon icon={faBaby} /></span> ;
    let three = <span className='bedIcon'><FontAwesomeIcon icon={faUser} /> <FontAwesomeIcon icon={faUser} /> </span> ;    
    let family = <span className='bedIcon'><FontAwesomeIcon icon={faUsersLine} /> </span>

    let td = props.index;
    if(td == 1){
        td = single;
    }else if(td == 2){
        td = double;
    }
    return (
        <td>
            {td}                        
        </td>
    );
};

export default RoomTableTr;