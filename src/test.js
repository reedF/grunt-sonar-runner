// example: convert ['a', 'b', 'c'] --> {a: 0, b: 1, c: 2}
var indexMap = myArray.reduce(function(memo, item, index) {
memo[item] = index;
}, {}); // Error: cannot set property 'b' of undefined

/*eslint array-callback-return: "error"*/

var indexMap = myArray.reduce(function(memo, item, index) {
memo[item] = index;
}, {});

var foo = Array.from(nodes, function(node) {
if (node.tagName === "DIV") {
return true;
}
});

var bar = foo.filter(function(x) {
if (x) {
return true;
} else {
return;
}
});

var data = {};

function callback() {
// ...
}

element.callback = function() {
// ...
};

var itemSet = {
data: []
};

//Check the user's job title
if (user.jobTitle = "manager") {
// user.jobTitle is now incorrect
}

/*eslint no-cond-assign: "error"*/

//Unintentional assignment
var x;
if (x = 0) {
var b = 1;
}

//Practical example that is similar to an error
function setHeight(someNode) {
"use strict";
do {
someNode.height = "100px";
} while (someNode = someNode.parentNode);
}
/*eslint no-invalid-regexp: "error"*/

RegExp('[')

RegExp('.', 'z')

new RegExp('\\')