import React from 'react';
import './RoomTableTr.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBaby, faUsersLine, faUserTie, faRestroom , faPeopleRoof } from '@fortawesome/free-solid-svg-icons';


const RoomTableTr = (props) => {
    
    //------------- making icons for showing bed quantity in the table area for every specific hotels
    let executiveSingleRoom = <span className='bedIcon'><FontAwesomeIcon icon={faUser} /> </span>;
    let double = <span className='bedIcon'><FontAwesomeIcon icon={faUser} /> <FontAwesomeIcon icon={faUser} /> </span>;
    let superiorTwin = <span className='bedIcon'><FontAwesomeIcon icon={faUser} /> <FontAwesomeIcon icon={faUser} /> + <FontAwesomeIcon icon={faBaby} /></span> ;
    let coupleRoom = <span className='bedIcon'><FontAwesomeIcon icon={faRestroom} /> </span>;
    let three = <span className='bedIcon'><FontAwesomeIcon icon={faUser} /> <FontAwesomeIcon icon={faUser} /> +  <FontAwesomeIcon icon={faUser} /></span> ;    
    let family = <span className='bedIcon'><FontAwesomeIcon icon={faPeopleRoof} /> </span>;
    let presidential = <span className='bedIcon'><FontAwesomeIcon icon={faUserTie} /> </span>;

    let td = props.index;
    if(td == 1){
        td = executiveSingleRoom;
    }
    else if(td == 2){
        td = double;
    }
    else if(td == 2.1){
        td = superiorTwin;
    }
    else if(td == 2.2){
        td = three;
    }
    else if(td == 2.5){
        td = coupleRoom;
    }
    else if(td == 5){
        td = family;
    }
    else if(td == 8){
        td = presidential;
    }
    return (
        <td>
            {td}                        
        </td>
    );
};

export default RoomTableTr;