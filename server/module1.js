var randomNum = function(min, max){
    var number =  (Math.random()*(max - min) + min);
    return number;
}

module.exports = randomNum;