function produceDrivingRange(blockRange){
    return function(begin, end){
        let beginning = parseInt(begin)
        let ending = parseInt(end)
        let distance = ending - beginning
        let difference = blockRange - distance 

        if (difference > 0 ){
            return `within range by ${difference}`
        } else {
            return `${Math.abs(difference)} blocks out of range`
        }
    }
}
function produceTipCalculator(percentage){
    return function(total){
        return total * percentage 
    }
}

function createDriver(){
    let id = 0 
    return class {
        constructor(name){
            this.id = ++id 
            this.name = name 
        }
    }
}