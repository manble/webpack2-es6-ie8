/**
 * @description：
 * @author: manble@live.com
 */

const type = function(type) {
    return function(data) {
        return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === (type).toLowerCase();
    };
};
const isObj = type('object');

let utils = {
    isObj: isObj,

    extend: function extend(a, b) {
        isObj(b) && Object.keys(b).map((key) => {
            if (isObj(a[key]) && isObj(b[key])) {
                extend(a[key], b[key]);
            } else if (Array.isArray(b[key])) {
                a[key] = [].concat(b[key]);
            } else {
                if (isObj(b[key])) {
                    a[key] = extend({}, b[key]);
                } else {
                    a[key] = b[key];
                }
            }
        });
        return a;
    }
};

export default utils;
