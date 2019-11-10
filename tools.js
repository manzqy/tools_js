/* 
 * author: xiaoYU
 * Copyright 2019
 */
var jTools = {};
/* ========== randomInt */
jTools.randomInt = function(n, m) {
    n = n || 0;
    m = m || 1;
    return Math.floor(Math.random() * (m - n + 1));
}
/* ========== randomRGB */
jTools.randomRGB = function() {
    var r = jTools.randomInt(0,255);
    var g = jTools.randomInt(0,255);
    var b = jTools.randomInt(0,255);
    return "rgb("+ r +","+ g +","+ b +")";
}
/* ========== randomHexColor */
jTools.randomHexColor = function() {
    var r = jTools.randomInt(0,255).toString(16);
    var g = jTools.randomInt(0,255).toString(16);
    var b = jTools.randomInt(0,255).toString(16);
    return "#"+ r + g + b;
}
/* == */
/* ========== stopPropagation */
jTools.stopPropagation = function(e) {
    e = e || window.event;
    if (e.stopPropagation) {
        e.stopPropagation();
    } else {
        e.cancelBubble = true; //IE 兼容
    }
}



