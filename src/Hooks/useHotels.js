import { useEffect, useState } from "react";


function useHotels(){
    let[hotels, setHotels] = useState([]);
    useEffect(()=>{
        fetch('all-hotels.json')
        .then(res=>res.json())
        .then(data=>setHotels(data))
    },[]);

    return [hotels, setHotels];
}

export default useHotels;