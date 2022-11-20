import React, { useEffect } from 'react';

const Coxbazar = () => {
    useEffect(()=>{
        fetch('all-hotels.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            <h2>Hotels In Cox's Bazar</h2>
        </div>
    );
};

export default Coxbazar;