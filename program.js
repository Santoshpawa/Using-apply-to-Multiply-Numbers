let obj={
    a: 2
    
}

function multiplyNumbers(b){
    console.log(this.a*b);
}

let arr=[3];
multiplyNumbers.apply(obj,arr);