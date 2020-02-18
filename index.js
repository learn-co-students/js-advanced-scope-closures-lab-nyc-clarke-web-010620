function produceDrivingRange(trip){

    return function(sr1, sr2){
        
        let d = parseInt(sr1.split(2))
        let b = parseInt(sr2.split("t"))
        let blockDiff = 0
        if (d > b){
            blockDiff = d - b
        } else {
            blockDiff = b - d
        }
        
        if ((blockDiff) > trip) {
             return `${blockDiff - trip} blocks out of range`
        } else {
            return `within range by ${blockDiff}`
        }
    }
}

function produceTipCalculator(tip){
    
    return function(amount){
        return amount * tip
    }
}

function createDriver(){
        let driverId = 0;
        return class {
            constructor(name) {
                this.name = name;
                this.id = ++driverId;
            }
        }
}