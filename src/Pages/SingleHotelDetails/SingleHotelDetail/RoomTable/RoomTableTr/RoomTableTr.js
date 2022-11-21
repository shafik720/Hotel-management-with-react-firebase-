import React from 'react';

const RoomTableTr = (props) => {
    let td = props.index;
    return (
        <td>
            {td == 2 ? 'got you' : td }
            
        </td>
    );
};

export default RoomTableTr;