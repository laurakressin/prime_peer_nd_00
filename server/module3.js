var randomNum = require('./module1');
var dollars = require('./module2');

var result = function () {
    return dollars(randomNum(100, 1000000));
};

var account = function () {
    return "Account balance: \n";
};

exports.calldollars = result;
exports.callstatement = account;