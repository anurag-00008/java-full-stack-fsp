//NORMAL FUNCTION // NON-PARAMETERIZED
function fn1(){
    console.log("NORMAL FUNCTION!");
}
fn1();
//PARAMETERIZED FUNCTION
function fn2(x,y){
    console.log(x,y);
}
fn2(1,2);
//FUNCTION WITH RETURN STATEMENT
function fn3(a,b){
    return a+b;
}
var res=fn3(1,2);
console.log(res);
//ANNONYMOUS FUNCTION (FUNCTION WITHOUT NAME)
function fn4(f){
    f();
    console.log(f);
}
fn4(function(){
    var state='WB';
    console.log(state);
});
//HIGER ORDER & CALLBACK FUNCTION
function fn5(f){
    f();
    console.log(f);
}
function print(){
    var city="KOLKATA";
    console.log(city);
}
fn5(print);//fn5- higher order //print- callback
//FUNCTION EXPRESSION
var result=function(){
    console.log("Hello World");
}
result();