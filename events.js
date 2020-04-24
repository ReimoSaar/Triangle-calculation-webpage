"use strict";
let scaleneTriangleCalculations = new ScaleneTriangleCalculations();
let typeSelectorValue;
let calculationSelectorValue;
function activateNumberInputs() {
    // @ts-ignore
    typeSelectorValue = document.getElementById("typeSelector").value;
    // @ts-ignore
    calculationSelectorValue = document.getElementById("calculationSelector").value;
    // @ts-ignore
    if (typeSelectorValue == "scaleneTriangle") {
        if (calculationSelectorValue == "Α" || calculationSelectorValue == "Β" ||
            calculationSelectorValue == "Γ" || calculationSelectorValue == "area" ||
            calculationSelectorValue == "perimeter") {
            scaleneTriangleCalculations.prepareToCalculateWithThreeSides();
        }
        else if (calculationSelectorValue == "a") {
            scaleneTriangleCalculations.prepareToCalculateA();
        }
        else if (calculationSelectorValue == "b") {
            scaleneTriangleCalculations.prepareToCalculateB();
        }
        else if (calculationSelectorValue == "c") {
            scaleneTriangleCalculations.prepareToCalculateC();
        }
    }
}
function calculate() {
    let answer;
    if (typeSelectorValue == "scaleneTriangle") {
        if (calculationSelectorValue == "perimeter") {
            answer = "P: " + scaleneTriangleCalculations.calculatePerimeter();
        }
        else if (calculationSelectorValue == "area") {
            answer = "S: " + scaleneTriangleCalculations.calculateArea();
        }
        else if (calculationSelectorValue == "a") {
            answer = "a: " + scaleneTriangleCalculations.calculateSide();
        }
        else if (calculationSelectorValue == "b") {
            answer = "b: " + scaleneTriangleCalculations.calculateSide();
        }
        else if (calculationSelectorValue == "c") {
            answer = "c: " + scaleneTriangleCalculations.calculateSide();
        }
        else if (calculationSelectorValue == "Α") {
            answer = "Α: " + scaleneTriangleCalculations.calculateAlpha();
        }
        else if (calculationSelectorValue == "Β") {
            answer = "Β: " + scaleneTriangleCalculations.calculateBeta();
        }
        else if (calculationSelectorValue == "Γ") {
            answer = "Γ: " + scaleneTriangleCalculations.calculateGamma();
        }
    }
    // @ts-ignore
    document.getElementById("answer").innerHTML = answer;
}
function draw() {
    let largestSide = Math.max.apply(Math, scaleneTriangleCalculations.inputBoxes.value);
}
window.onload = function () {
    // @ts-ignore
    document.getElementById("calculatingButton").addEventListener("click", calculate);
    // @ts-ignore
    document.getElementById("calculationSelector").addEventListener("change", activateNumberInputs);
    // @ts-ignore
    document.getElementById("typeSelector").addEventListener("change", activateNumberInputs);
};
