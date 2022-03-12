/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    if (typeof s !== 'string') return `illegal parameters`;
    s = s.trim();
    let res = "", i = 0, po_flag = false;
    while (i < s.length) {
        let target = s.charAt(i);
        if (!po_flag && (target === "+" || target === "-")) {
            res += target;
        } else if (res.length > 0 && s.charCodeAt(i) == 32) {
            break;
        } else if (!Number.isNaN(Number(target))) {
            res += target;
            po_flag = true;
        } else {
            break;
        }
        i++;
    }
    if (Number(res) > Math.pow(2, 31) - 1) {
        res = Math.pow(2, 31) - 1;
    } else if (Number(res) < Math.pow(-2, 31)) {
        res = Math.pow(-2, 31);
    } else {
        res = Number(res);
    }
    return res || 0;
};
console.log(myAtoi("-5-"))