// Code your solution in this file!
const returnFirstTwoDrivers = (array) => array.slice(0,2); 

const returnLastTwoDrivers = (array) => array.slice(-2);

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    return (fare) => fare * num; 
}

const fareDoubler = (fare) => createFareMultiplier(fare)(2);

const fareTripler = (fare) => createFareMultiplier(fare)(3);

function selectDifferentDrivers(array, funFunction){
    return funFunction(array);
}