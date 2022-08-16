// Code your solution in this file!
const drivers = ['John', 'Otieno', 'Haryy',];

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2);
}
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  }
  const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
  const createFareMultiplier = function (myMultiplier) {
    return function(value) {
      return myMultiplier * value;
    }
  }
  const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(drivers, func) {
    return func(drivers);
  }