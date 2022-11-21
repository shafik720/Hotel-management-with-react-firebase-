import { useEffect, useState } from "react";


function useHotels(){
    let[hotels, setHotels] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/shafik720/Hotel-management-with-react-firebase-/main/public/all-hotels.json')
        .then(res=>res.json())
        .then(data=>setHotels(data))
    },[]);

    return [hotels, setHotels];
}

export default useHotels;