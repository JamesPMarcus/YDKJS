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