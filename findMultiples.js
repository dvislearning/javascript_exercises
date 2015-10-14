list=[];
//Finds all multiples of 3 and 5 less than 1000, and \
//pushes them into list array.
for (var i=0;i<1000;i++ ){
    if (i%3===0 || i%5===0){
        list.push(i);
    }
}
//Sums contents of list.
var j = 0;
sum=0;
while (j<list.length){
    sum = sum + list[j];
    j++;
}

console.log(sum);
