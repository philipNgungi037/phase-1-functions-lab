const caution = 'cannot travel that far'

function distanceFromHqInBlocks(destination) {
  return Math.abs(42 - destination);
}

function distanceFromHqInFeet(des) {
  return distanceFromHqInBlocks(des) * 264;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264;
}

function calculatesFarePrice(start, destination) {
  const totalFeetTraveled = distanceTravelledInFeet(start, destination);

  if (totalFeetTraveled <= 400) {
    return 0;
  } else if (totalFeetTraveled > 2000 && totalFeetTraveled < 2500) {
    return 25;
  } else if (totalFeetTraveled > 2500) {
    return caution;
  } else {
    return (totalFeetTraveled - 400) * 0.02;
  }

}