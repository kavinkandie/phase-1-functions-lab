// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
  }
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264; }
    function distanceTravelledInFeet(start, destination) {
        const blocks = Math.abs(destination - start);
        return blocks * 264;
      }
      function calculatesFarePrice(start, destination) {
        const distance = distanceTravelledInFeet(start, destination);
      
        if (distance <= 400) {
          return 0; // Free ride
        } else if (distance > 400 && distance <= 2000) {
          return (distance - 400) * 0.02; // Charge $0.02 per foot after the first 400 feet
        } else if (distance > 2000 && distance <= 2500) {
          return 25; // Flat fare for distances between 2000 and 2500 feet
        } else {
          return 'cannot travel that far'; // Over 2500 feet
        }
      }