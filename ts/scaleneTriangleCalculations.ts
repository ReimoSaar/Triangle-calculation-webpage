class ScaleneTriangleCalculations extends InputFeatures implements TriangleCalculations {

    a: number | undefined;
    b: number | undefined;
    c: number | undefined;

    constructor() {
        super();
    }

    calculatePerimeter(): number {
        this.a = parseFloat(this.inputBoxes[0].value);
        this.b = parseFloat(this.inputBoxes[1].value);
        this.c = parseFloat(this.inputBoxes[2].value);
        return this.a + this.b + this.c;
    }

    calculateArea(): number {
        this.a = parseFloat(this.inputBoxes[0].value);
        this.b = parseFloat(this.inputBoxes[1].value);
        this.c = parseFloat(this.inputBoxes[2].value);
        let semiPerimeter: number = (this.a + this.b + this.c) / 2;
        return Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) *
            (semiPerimeter - this.c));
    }

    calculateSide(): number {
        let firstSide: number = parseFloat(this.inputBoxes[0].value);
        let secondSide: number = parseFloat(this.inputBoxes[1].value);
        let angle: number = parseFloat(this.inputBoxes[2].value) * Math.PI / 180;
        return Math.sqrt(firstSide ** 2 + secondSide ** 2 - 2 * firstSide * secondSide * Math.cos(angle));
    }

    calculateAlpha(): number {
        this.a = parseFloat(this.inputBoxes[0].value);
        this.b = parseFloat(this.inputBoxes[1].value);
        this.c = parseFloat(this.inputBoxes[2].value);
        return Math.acos((this.b ** 2 + this.c ** 2 - this.a ** 2) / (2 * this.b * this.c)) * 180 / Math.PI;
    }

    calculateBeta(): number {
        this.a = parseFloat(this.inputBoxes[0].value);
        this.b = parseFloat(this.inputBoxes[1].value);
        this.c = parseFloat(this.inputBoxes[2].value);
        return Math.acos((this.a ** 2 + this.c ** 2 - this.b ** 2) / (2 * this.a * this.c)) * 180 / Math.PI;
    }

    calculateGamma(): number {
        this.a = parseFloat(this.inputBoxes[0].value);
        this.b = parseFloat(this.inputBoxes[1].value);
        this.c = parseFloat(this.inputBoxes[2].value);
        return Math.acos((this.a ** 2 + this.b ** 2 - this.c ** 2) / (2 * this.a * this.b)) * 180 / Math.PI;
    }

    prepareToCalculateWithThreeSides(): void {
        this.addNumberInputs(3);
        this.addPlaceHolders(["a", "b", "c"]);
    }

    prepareToCalculateA(): void {
        this.addNumberInputs(3);
        this.addPlaceHolders(["b", "c", "\u0391"]);
    }

    prepareToCalculateB(): void {
        this.addNumberInputs(3);
        this.addPlaceHolders(["a", "c", "\u0392"]);
    }

    prepareToCalculateC(): void {
        this.addNumberInputs(3);
        this.addPlaceHolders(["a", "b", "\u0393"]);
    }
}
