import React from 'react';
import RoomTableTr from './RoomTableTr/RoomTableTr';

const RoomTable = (props) => {   
    // console.log(props.index)
    let tr = props.index;
    return (
        <tr>
            {
                tr.map(index=><RoomTableTr index = {index}></RoomTableTr>)
            }
        </tr>
    );
};

export default RoomTable;