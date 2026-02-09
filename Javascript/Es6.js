//SPREAD OPERATOR
var obj1={
    id:1,
    name:'ABC',
    dept:'FINANCE'
}
var obj2={
...obj1,
dept:'HR'
}
console.log(obj1);
console.log(obj2);
//REST PARAMETER //INTERVIEW Q
function fn(x,y,...data){
    console.log(x,y,data);
}
fn(10,20,30,40);//no error
var{name,dept}=obj1;
console.log(name,dept);
//ARROW FUNCTION
/*function fn1{
    console.log("NORMAL FUNCTION");
}*/
const fn1=()=>{
    console.log("NORMAL FUNCTION");
};
fn1();
var arr=[100,200,300,400];
arr.forEach(function(element,index){
    console.log(index,element);
})
arr.forEach((element,index)=>{
    console.log(index,element);
})
var result=new Promise((resolve,reject)=>{
    var marks=75;
    if(marks>50){
        resolve("PASS");
    }
    else{
        reject("TRY MORE");
    }
})
result.then((res)=>{
    console.log(res);
})
.catch((error)=>{
    console.log(error);
})
//ASYNCHRONOUS OPERATION
var delayedmsg=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("MSG DELAYED FOR 5 SECONDS");
    },5000)
})
delayedmsg.then((res)=>{
    console.log(res);
})