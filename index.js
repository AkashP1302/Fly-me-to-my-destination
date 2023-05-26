function minimumPlanesRequired(fuelArray) {
  // Initialize the variables
  const n = fuelArray.length;
  let currentFuel = 0; // Current fuel level
  let maxReach = 0; // Maximum reach with the current fuel level
  let planesRequired = 0; // Number of planes required

  // Loop through the array of fuel units
  for (let i = 0; i < n - 1; i++) {
    maxReach = Math.max(maxReach, i + fuelArray[i]); // Calculate the maximum number of airports that can be reached with the current fuel

    if (i === currentFuel) {
      // If the current airport is the last reached airport
      if (maxReach <= currentFuel) {
        // If the maximum reach is not greater than the current airport index, it means it is impossible to reach the next airport
        return -1;
      }
      currentFuel = maxReach; // Update the current fuel level to the maximum reach
      planesRequired++; // Increment the number of planes required
    }
  }

  // After the loop, check if the currentFuel is greater than or equal to the index of the last airport
  if (currentFuel >= n - 1) {
    return planesRequired + 1; // Return the number of planes required
  } else {
    return -1; // If it is not possible to reach the last airport, return -1
  }
}

//console answer
console.log(minimumPlanesRequired([2, 1, 2, 3, 1]));

/*
1. The function minimumPlanesRequired takes an array of fuel
 units for each airport and returns the minimum number of planes
 required to reach the last airport or -1 if it is not possible 
 to reach the last airport.

2.Initialize the variables n (total number of airports), 
 currentFuel (amount of fuel currently available to fly),
 maxReach (maximum number of airports that can be reached with the current fuel),
 and planesRequired (number of planes required to reach the last airport).
  const n = fuelArray.length;
  let currentFuel = 0;
  let maxReach = 0;
  let planesRequired = 0;

3.Loop through the array of fuel units from the first to the second last airport.
    for (let i = 0; i < n - 1; i++) {
      ...
    }

4.Calculate the maximum number of airports that can be reached with the current
 fuel by taking the maximum of the previous maxReach and the sum of the current 
 index i and the fuel unit at that index fuelArray[i].
         maxReach = Math.max(maxReach, i + fuelArray[i]);

5.If the current index i is equal to the current fuel currentFuel, it means that
 a new plane needs to be hired because the current fuel can only reach up to index 
 currentFuel. In this case, check if the maxReach is less than or equal to currentFuel
 because if it is, it means that it is not possible to hire a plane to reach the next
 airport. In this case, return -1.
    if (i === currentFuel) {
      if (maxReach <= currentFuel) {
        return -1;
      }

 6.If it is possible to hire a plane, update the currentFuel to be equal to maxReach,
  which represents the maximum number of airports that can be reached with the current
  fuel. Increment the planesRequired because a new plane has been hired.  

    currentFuel = maxReach;
      planesRequired++;
    }
7.After the loop, check if the currentFuel is greater than or equal to the index of the
last airport n - 1. If it is, return the planesRequired plus 1 because the last airport
also needs to be counted. Otherwise, return -1 because it is not possible to reach the
last airport.
  if (currentFuel >= n - 1) {
    return planesRequired + 1;
  } else {
    return -1;
  }
}

So, if we call this function with the input [2,1,2,3,1], it will return 2 because the
minimum number of planes required to reach the last airport is two as explained in the example.
*/
