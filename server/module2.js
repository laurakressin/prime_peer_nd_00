var usd = function(num) {
    var dollarAmt = (num/100).toFixed(2);
    return dollarAmt = "$" + dollarAmt;
};

module.exports = usd;