// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
}
const cityBlock = 264;
function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264;
}
function distanceTravelledInFeet(start, end) {
    return Math.abs(end - start) * 264;
}
function calculatesFarePrice(start, end) {
    const freeSample = 400;
    const rate = 0.02;
    const flatFare = 25;
    const distanceTravelled = distanceTravelledInFeet(start, end);
    if (distanceTravelled > 2500) {
        return 'cannot travel that far';
    } else if (distanceTravelled <= freeSample) {
        return 0;
    } else if (distanceTravelled > freeSample && distanceTravelled <= 2000) {
        return (distanceTravelled - 400) * rate;
    } else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
        return flatFare;
    }

}