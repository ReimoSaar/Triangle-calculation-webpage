"use strict";
class ScaleneTriangleCalculations extends InputFeatures {
    constructor() {
        super();
    }
    calculatePerimeter() {
        this.a = parseFloat(this.inputBoxes[0].value);
        this.b = parseFloat(this.inputBoxes[1].value);
        this.c = parseFloat(this.inputBoxes[2].value);
        return this.a + this.b + this.c;
    }
    calculateArea() {
        this.a = parseFloat(this.inputBoxes[0].value);
        this.b = parseFloat(this.inputBoxes[1].value);
        this.c = parseFloat(this.inputBoxes[2].value);
        let semiPerimeter = (this.a + this.b + this.c) / 2;
        return Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) *
            (semiPerimeter - this.c));
    }
    calculateSide() {
        let firstSide = parseFloat(this.inputBoxes[0].value);
        let secondSide = parseFloat(this.inputBoxes[1].value);
        let angle = parseFloat(this.inputBoxes[2].value) * Math.PI / 180;
        return Math.sqrt(Math.pow(firstSide, 2) + Math.pow(secondSide, 2) - 2 * firstSide * secondSide * Math.cos(angle));
    }
    calculateAlpha() {
        this.a = parseFloat(this.inputBoxes[0].value);
        this.b = parseFloat(this.inputBoxes[1].value);
        this.c = parseFloat(this.inputBoxes[2].value);
        return Math.acos((Math.pow(this.b, 2) + Math.pow(this.c, 2) - Math.pow(this.a, 2)) / (2 * this.b * this.c)) * 180 / Math.PI;
    }
    calculateBeta() {
        this.a = parseFloat(this.inputBoxes[0].value);
        this.b = parseFloat(this.inputBoxes[1].value);
        this.c = parseFloat(this.inputBoxes[2].value);
        return Math.acos((Math.pow(this.a, 2) + Math.pow(this.c, 2) - Math.pow(this.b, 2)) / (2 * this.a * this.c)) * 180 / Math.PI;
    }
    calculateGamma() {
        this.a = parseFloat(this.inputBoxes[0].value);
        this.b = parseFloat(this.inputBoxes[1].value);
        this.c = parseFloat(this.inputBoxes[2].value);
        return Math.acos((Math.pow(this.a, 2) + Math.pow(this.b, 2) - Math.pow(this.c, 2)) / (2 * this.a * this.b)) * 180 / Math.PI;
    }
    prepareToCalculateWithThreeSides() {
        this.addNumberInputs(3);
        this.addPlaceHolders(["a", "b", "c"]);
    }
    prepareToCalculateA() {
        this.addNumberInputs(3);
        this.addPlaceHolders(["b", "c", "\u0391"]);
    }
    prepareToCalculateB() {
        this.addNumberInputs(3);
        this.addPlaceHolders(["a", "c", "\u0392"]);
    }
    prepareToCalculateC() {
        this.addNumberInputs(3);
        this.addPlaceHolders(["a", "b", "\u0393"]);
    }
}
