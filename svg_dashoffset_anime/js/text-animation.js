import {getTotalLength} from "./getTotalLength.js";

/*
target.style.strokeDasharray = [10,10];
target.style.strokeDashoffset = length;
*/

const target = document.getElementById('target-text');
const length = getTotalLength(target);
target.style.strokeDasharray = length;
target.style.strokeDashoffset = length;

let spadePath = document.getElementById('spade');
let length2 = spadePath.getTotalLength();

spadePath.style.strokeDashoffset = length2;
spadePath.style.strokeDasharray = length2;