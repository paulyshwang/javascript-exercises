const findTheOldest = function(people) {
  // Method using sort()
  // return people.sort((a, b) => {
  //   let aDeath = a.yearOfDeath;
  //   let bDeath = b.yearOfDeath;

  //   if (!aDeath) {
  //     aDeath = new Date().getFullYear();
  //   }
  //   if (!bDeath) {
  //     bDeath = new Date().getFullYear();
  //   }

  //   let aAge = aDeath - a.yearOfBirth;
  //   let bAge = bDeath - b.yearOfBirth;
  //   return bAge - aAge;
  // })[0];

  // Method using reduce()
  return people.reduce((oldest, current) => {
    if (!oldest.yearOfBirth) {
      return current;
    }
    
    let oldestDeath = oldest.yearOfDeath;
    let currentDeath = current.yearOfDeath;

    if (!oldestDeath) {
      oldestDeath = new Date().getFullYear();
    }
    if (!currentDeath) {
      currentDeath = new Date().getFullYear();
    }

    let oldestAge = oldestDeath - oldest.yearOfBirth;
    let currentAge = currentDeath - current.yearOfBirth;

    return currentAge > oldestAge ? current : oldest;
  }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
