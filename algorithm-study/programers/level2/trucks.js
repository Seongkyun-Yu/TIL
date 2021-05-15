// https://programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
  const trucks = [...truck_weights];

  const goalTrucks = [];
  const bridgeTrucks = new Array(bridge_length).fill(undefined);
  let time = 0;
  let onBirdgeWeight = 0;

  while (goalTrucks.length !== truck_weights.length) {
    const popedTruckWeight = bridgeTrucks.shift();

    if (popedTruckWeight) {
      goalTrucks.push(popedTruckWeight);
      onBirdgeWeight -= popedTruckWeight;
    }

    const truckWeight = onBirdgeWeight + trucks[0] <= weight && trucks.shift();

    if (truckWeight && onBirdgeWeight + truckWeight <= weight) {
      bridgeTrucks.push(truckWeight);
      onBirdgeWeight += truckWeight;
    } else {
      bridgeTrucks.push(undefined);
    }

    time++;
  }

  return time;
}
