


function addToDb(element){
    let hotelDb = JSON.parse(localStorage.getItem('hotels') || '[]');
    hotelDb.push(element)    ;
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