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