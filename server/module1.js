var randomNum = function(min, max){
    var number =  (Math.random()*(max - min) + min);
    return number.toString();
}

module.exports = randomNum;