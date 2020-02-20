function produceDrivingRange(blockRange){
    return function(start, end){
        let startPoint = parseInt(start);
        let endPoint = parseInt(end);
        let difference = Math.abs(startPoint - endPoint)
        if (blockRange > difference){
            return `within range by ${blockRange - difference}`
        } else {
            return `${difference - blockRange} blocks out of range`
        }
    }
}

function produceTipCalculator(tip){
    return function (fare){
        return tip * fare
    }
}

function createDriver(){
    let driverId = 0
    return class{
        constructor(name){
        this.id = driverId++
        this.name = name
        }
    }
}