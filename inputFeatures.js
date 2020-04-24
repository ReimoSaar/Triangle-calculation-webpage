"use strict";
class InputFeatures {
    constructor() {
        this.inputBoxes = [];
    }
    addNumberInputs(count) {
        let calculatingArea = document.getElementById("calculatingArea");
        if (this.inputBoxes.length > 0) {
            for (let i = 0; i < this.inputBoxes.length; i++) {
                // @ts-ignore
                calculatingArea.removeChild(this.inputBoxes[i]);
            }
            this.removeInputBoxes();
        }
        for (let i = 0; i < count; i++) {
            let input = document.createElement("input");
            this.inputBoxes.push(input);
            let inputWidth = Math.floor(100 / (count + 2));
            input.style.width = inputWidth + "%";
            let margin = Math.floor((100 - inputWidth * count) / (count + 1));
            input.style.marginLeft = margin + "%";
            input.type = "number";
            // @ts-ignore
            calculatingArea.appendChild(input);
        }
    }
    addPlaceHolders(placeHolders) {
        for (let i = 0; i < this.inputBoxes.length; i++) {
            document.getElementsByTagName("input")[i].placeholder = placeHolders[i];
        }
    }
    removeInputBoxes() {
        this.inputBoxes.length = 0;
    }
}
