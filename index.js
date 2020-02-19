let produceDrivingRange = function(num){
    return function (str1, str2) {
        let num1 = parseInt(str1.replace(/\D/g,''));
        let num2 = parseInt(str2.replace(/\D/g,''));
        let range = num2 - num1;
        if (range > num) {
            return `${range - num} blocks out of range`}
        else {
            return  `within range by ${num - range}`
        }
    }
}

let produceTipCalculator = function(tip) {
    return function(fare) {
        return fare * tip
    }
}

let createDriver = function() {
    let driverId = 0;
    return class {
        constructor(name) {
          this.name = name;
          this.id = ++driverId;
        }
    }
}