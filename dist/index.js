"use strict";
// basic types
let id = 5;
let company = 'Alex';
let isPublished = true;
let x = 'hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'hello'];
// tuple
let person = [1, 'Alex', true];
// tuple array
let employee;
employee = [
    [1, 'Alex'],
    [1, 'John'],
    [1, 'Jill'],
];
// union
let pid;
pid = 22;
// enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John',
};
// type assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
// functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
