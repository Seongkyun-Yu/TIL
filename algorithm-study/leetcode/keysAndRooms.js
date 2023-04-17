/**
 * MEDIUM
 * https://leetcode.com/problems/keys-and-rooms/
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let count = 1;
  const visit = { 0: true };

  const queue = [rooms[0]];
  while (queue.length) {
    const keys = queue.shift();
    for (const key of keys) {
      if (visit[key]) continue;

      visit[key] = true;
      count++;
      queue.push(rooms[key]);
    }
  }

  return count === rooms.length;
};
