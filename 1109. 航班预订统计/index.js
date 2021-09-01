/**
 * 这里有 n 个航班，它们分别从 1 到 n 进行编号。
 * 有一份航班预订表 bookings ，表中第 i 条预订记录 bookings[i] = [firsti, lasti, seatsi] 
 * 意味着在从 firsti 到 lasti （包含 firsti 和 lasti ）的 每个航班 上预订了 seatsi 个座位。
 * 请你返回一个长度为 n 的数组 answer，其中 answer[i] 是航班 i 上预订的座位总数。
 */

/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
    let result = new Array(n).fill(0);
    bookings.forEach(item => {
        for (let index = item[0]; index <= item[1]; index++) {
            result[index - 1] += item[2];
        }
    })
    return result;
};

console.log(corpFlightBookings([[1, 2, 10], [2, 3, 20], [2, 5, 25]], 5));