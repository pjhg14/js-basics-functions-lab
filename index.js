// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    return Math.abs(street - 42);
}

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(start, end) {
    let blocks = Math.abs(start - end)

    return blocks * 264
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start,destination)

    if (distance <= 400) {
        return 0;
    } 
    
    if (distance < 2000) {
        distance -= 400

        return distance * 0.02
    }

    if (distance > 2000 && distance < 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
}