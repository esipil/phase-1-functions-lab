const hq = 42
function distanceFromHqInBlocks (someValue){
    let distance =  Math.abs((someValue- hq) );
    return distance ;
}

function distanceFromHqInFeet (someFeet) {
    const feet = distanceFromHqInBlocks(someFeet) * 264;
    return feet ;
}
function distanceTravelledInFeet(start, destination) {
    const travelled = Math.abs((destination - start) * 264) ;
    return travelled ;
}
function calculatesFarePrice(start, destination) {
    const feet = Math.abs((destination - start) * 264); 
    if( feet <= 400) {
        const fare = 0 ; 
        return fare;
    }
    if  (feet <= 2000 ) {
        const fare = (feet * 0.02 ) - (400 * 0.02);
        return Math.round (fare * 100) / 100 ;
    } 
    if  (feet <= 2500) {
        const fare = 25;
        return fare ;
    }
    if (feet > 2500) {
        const fare = 'cannot travel that far';
        return fare ;
    }
}