//Book One

a= 21;
b= a * 2;
console.log (b);

alert (b);

age=prompt("Please tell me your age");
console.log(prompt);

var a = 20;
a=a+1;
a=a*2;
console.log(a);

var amount=199.99;
amount=amount * 2;
console. log(amount);

amount = "$" + String(amount);
console. log(amount);

for (var i =0; i<=9; i = i +1){
    console.log(i);
}

//Phone purchase practice


const PHONE_PRICE = 99.98;
const ACCESSORY_PRICE = 13.99;
const SPENDING_THRESHOLD = 200.00;
const TAX_RATE = 0.08;

var bank_balance = 300.00;
var amount = 0;

//functions

function calculatetax(amount){
    return amount * TAX_RATE;
}

function decimalreturn(amount) {
    return "$" + amount.toFixed(2);
}

//BUYING phone 

while (amount<bank_balance) {
    amount = amount + PHONE_PRICE;
 //buy new phone

    if (amount<SPENDING_THRESHOLD) {
        amount = amount +ACCESSORY_PRICE;
        }   //buy accessory
    }

amount = amount + calculatetax(amount);

console.log("Your purchase is " + decimalreturn(amount));

//can you afford?

if (amount>bank_balance) {
    console.log ("You can't afford");
}

//obect types

var obj = {a :"hello world",
b:42,
c:true
};

obj.a;
obj.b;
obj.c;

obj["a"];
obj["b"];
obj["c"];

var obj = {
a:"hello world",
b: 42
};

var b= "a";

obj[b]; //"hello world"
obj["b"]; //42

//Array

var arr = [
"hello world",
42,
true,
];

arr [0];  //"hello world"
arr[1]; //42

//function (object subytype)

function foo(){
return 42;
}

foo.bar = "hello world";

typeof foo; //"function"
typeof foo(); //"number"
typeof foo.bar; //"string"

//built in type methods

var a="hello world";
var b = "3.14159";

a.lenth; //11
a.toUpperCase(); //"HELLO WORLD"
b.toFixed(4); //3.1416

//Explicit coercion

var a = "42";
var b = Number (a);

a;  //"42"
b; //42

//Implicit coercion

var a ="42";

var b = a * 1; //implicitly coerced to 42

a; //"42"
b; //42


//Implicit cercion

var a ="42";
var b = 42'

a == b; //true
a ===b; //false 

//identifying a variable

var a = 2;

foo(); 

function foo() {
    a = 3;
    console.log(a);
    var a;
}

console.log(a);

//Strict mode

function foo() {
    "use strict";
    //this code is strict mode
    
    function bar(){
        //this code is strict mode
    }
}

function tron(){...}
    //this code is not strict
    
    //dissalows the implicit auto-global variable declaration from omitting the var:
    
    funtion foo() {
        "use strict"; //turn on strict mode
        a = 1; // 'var' missing, ReferenceError
    }
    
    foo();
    
    //Closures
    
    function makeAdder(x) {
    
        function add(y){
            return y + x;
        };
        
        return add;
    }

var plusOne = makeAdder(1);

plusOne(4);  //5


//Closure: Using modules

function Usuer(){
    var username, password;
    
    function doLogin(user,pw){
        username = user;
        password = pw;
    }
    
    var publicAPI = {
        login: doLogin
    };
    
    return publicAPI;
}

//create a 'user' module instance

var fred = user();

fred.login( "fred", "12Battery34!");