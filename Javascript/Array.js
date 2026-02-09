var arr=[100,200,300,400];
console.log(arr);
console.log(typeof arr);
arr.push(500);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(50);//add element 1st position
console.log(arr);
//delete first index value
arr.shift();
console.log(arr);
//delete a element from specific position
arr.splice(2,1);
console.log(arr);
//add a element in specific position
arr.splice(2,0,300);
console.log(arr);
//forEach()
arr.forEach(function(element,index){
console.log(index,element);
})
//map()
var newarr=arr.map(function(element,index){
return element*10;
})
console.log(newarr);
//filter()
var newarr1=arr.filter(function(element,index){
    return element>200;
})
console.log(newarr1);
