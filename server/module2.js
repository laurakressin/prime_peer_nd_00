var usd = function(num) {
    var strNum = parseFloat(num);
    return dollar = "$"+(strNum.toFixed(2));
};

module.exports = usd;