function produceDrivingRange(range){
    return function startAndFinish(start, finish) {
        result = range - (Math.abs(parseInt(start) - parseInt(finish)))
        if (result > 0) {
            return `within range by ${result}`}
        else {
            return `${Math.abs(result)} blocks out of range`
        }
    }
}

function produceTipCalculator(percentage){
    return function receiveAmount(fareAmount) {
        return fareAmount * percentage
    }
}

function createDriver() {
    let itemId = 0;
    return class {
        constructor(name) {
            this.name = name
            this.id = ++itemId
        }
    }
}