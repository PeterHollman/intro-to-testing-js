// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}
function add(num1,num2){
    if (typeof num1 === "string" || typeof num2 === "string"){
        return false;
    }
    return num1 + num2;
}
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