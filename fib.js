//finds the sum of all even Fibonacci less than 4,000,000

a = 1;
b = 2;
c = 0;
count = 2;
fib=true;

while (fib){
    c = a + b;
    if(c<4000000){
        if(c%2===0){
        count+=c;    
        }        
    a = b;
    b = c;
    }else{
        fib=false;
    }
}
console.log(count);