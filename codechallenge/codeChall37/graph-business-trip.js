"use strict";

function businessTrip(graph, cities) {
  const departure = cities[0];
  const arrival = cities[1];

  const availableDestinations = graph.adjacencyList.get(departure);

  if (!availableDestinations) {
    return null;
  }

  for (let i = 0; i < availableDestinations.length; i++) {
    const [destinationCity, cost] = availableDestinations[i];

    // If the destination city matches the arrival city, return the cost
    if (destinationCity === arrival) {
      return cost;
    }
  }
  // if not return null 
  return null;
}

module.exports = businessTrip;

