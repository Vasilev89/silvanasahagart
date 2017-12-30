'use strict';

var f = function f() {
	'use strict';
	return undefined;
};

//Let and Const are new concepts introduced in ES6
//Javascript doesnt have any block scoping - as in - a varible is contained in a statment
//The Main difference is that let supports block scoping. Which means contain the variable in the body where it is defined
//Let allows us to use in Javascript2
//Constants can simply not be re-assigned. Assigned once and keeps its value
//Previously in ES5 - JS hoistng was allowed - that is, the variable you declare will have been placed at the top of the declaration. 
//In ES6 you have to actually declare it the top because it is not hoisted

function myFunction() {
	console.log('Hellp!');
};

var fn = function fn(a, b) {
	return a + b;
};

myFunction();
fn(3, 8);