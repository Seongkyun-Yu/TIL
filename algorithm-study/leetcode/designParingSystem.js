/**
 * EASY
 * https://leetcode.com/problems/design-parking-system/
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.parking = {
    1: big,
    2: medium,
    3: small,
  };
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  if (!this.parking[carType]) return false;
  this.parking[carType] = this.parking[carType] - 1;

  return true;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
