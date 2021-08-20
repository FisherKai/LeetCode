/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let resSet = new Set(),
        left_p = 0, right_p = left_p,
        sLength = s.length,
        res = 0;
    while (left_p < sLength) {
        while (right_p < s.length && !resSet.has(s.charAt(right_p))) {
            resSet.add(s.charAt(right_p));
            right_p++;
        }
        left_p++;
        right_p = left_p;
        res=Math.max(res,resSet.size);
        console.log(resSet);
        resSet = new Set();

    }
    return res;
};
/**
 * abcabcbb
 */
function runTime(cb,data){
    let time1=new Date();
    cb(data);
    console.log(new Date-time1);
}
runTime(lengthOfLongestSubstring,'abcabcbb')
// console.log(lengthOfLongestSubstring('pwwkew'));