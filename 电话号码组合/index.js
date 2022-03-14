var phone = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
};
/**
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/solution/
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const result = [];
    if (digits && digits.length === 1) {
        return phone[digits];
    }
    if (digits && digits.length > 1) {
        let res1 = letterCombinations(digits[0]);
        let res2 = letterCombinations(digits.slice(1));
        for (const a in res1) {
            for (const b in res2) {
                result.push(res1[a] + res2[b])
            }
        }
    }
    return result;

};
console.log(letterCombinations(''));