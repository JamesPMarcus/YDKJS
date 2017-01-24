//book 2 YDKJS Scope and closures


//LHS and RHS

function foo(a) {
    var b = a;
    retrun a +b;
}

var c = foo( 2 );

//LHS:
//c= ..., a=2 (implicit parameter), b=

//RHS:
//foo(2...), a +, + b, =a, 


//LHS = left hand side searching by engine
//RHS = right hand side searching by engine 

//Collison avoidance

function foo() {
    function bar(a) {
        i=3; //changing the 'i' in the enclosing scope's for-loop
        console.log (a+i);
    }
    
    for (var i=0; i<10, i++) {
        bar (i * 2); //infinite loop
    }
}
foo();


//Immediately invoked function expression 

var a=2;
(function foo() {
    
    var a = 3;
    console.log( a );
    
})();

console.log( a );

//allows function foo only to be in the scope where the expression is stated, hiding foo inside itself does not pollute the enclosing scope

//Anonymous vs named

setTimeout (function() {
    console.log("I waited 1 second!");
}, 1000);

//above is anonymous

//best practice is to always use a name for your function expressions

setTimeout( function timeoutHandler() {
    console.log("I waited 1 second!");
}, 1000);

//IIFE

var a =2;
(function IIFE () {
    
    var a =3;
    console.log ( a ); //3
})();

console.log(a); //2