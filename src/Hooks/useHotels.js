import { useEffect, useState } from "react";


function useHotels(){
    let[hotels, setHotels] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/shafik720/rest-api/main/all-hotels.json')
        .then(res=>res.json())
        .then(data=>setHotels(data))
    },[]);

    return [hotels, setHotels];
}

export default useHotels;