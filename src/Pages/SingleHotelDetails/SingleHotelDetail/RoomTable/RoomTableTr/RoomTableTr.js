import React from 'react';

const RoomTableTr = (props) => {
    let td = props.index;
    if(td == 3){
        td = 'Triple bed';
    }
    return (
        <td>
            {td}            
        </td>
    );
};

export default RoomTableTr;