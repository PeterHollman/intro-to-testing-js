// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}
//add function
function add(num1,num2){
    if (typeof num1 === "string" || typeof num2 === "string"){
        return false;
    }
    return num1 + num2;
}
//sayHello function
function sayHello(input){
    if(input === undefined){
        return "Hello, World!";
    }
    if(input === Boolean(true)){
        return "Hello, World!";
    }
    if(input === Boolean(false)){
        return "Hello, World!";
    }
    return "Hello " + input + "!";
}
//isFive function
function isFive(input){
   if(input == 5){
       return true;
   }
   else{
       return false;
   }
}
//isEven function
function isEven(input){
    if(input % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}