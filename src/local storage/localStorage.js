

function addToDb(element){
    let hotelDb = JSON.parse(localStorage.getItem('hotels') || '{}');
    if(hotelDb[element]){
        hotelDb[element] = hotelDb[element] + 1;        
    }else{
        hotelDb[element] = 1 ;
    }
    localStorage.setItem('hotels', JSON.stringify(hotelDb));
}

function getFromDb(){
    let hotelDb = JSON.parse(localStorage.getItem('hotels') || '{}');
    return hotelDb;
}

export{
    addToDb,
    getFromDb
}