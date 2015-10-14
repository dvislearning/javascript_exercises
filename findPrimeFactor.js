//Finds the lowest Prime Factor for number

var number = 1000;
primes = [];
factors = [];
i = 2;

//Finds all factors of number and pushes to factors if it is \
//less than square root of number.
while (i< number){
    if(number%i===0){
        if(i<=Math.ceil(Math.sqrt(number))){
            factors.push(i);
        }
    }
    i++;
}

//checks whether each value of factors is prime.
for (var j=0;j<factors.length;j++){
    var k = factors[j];
    var l = factors[j]-1;
    var looper = true;
    while(l>=1 && looper){
        if(l==1){
            primes.push(factors[j]);
            looper = false;
        }
        if(k%l===0){
            looper = false;
        }
        l--;
    }
}
    
console.log(primes[primes.length-1]);
