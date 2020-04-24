abstract class InputFeatures {

    inputBoxes: any;

    constructor() {
        this.inputBoxes = [];
    }

    addNumberInputs(count: number): void {
        let calculatingArea = document.getElementById("calculatingArea");
        if (this.inputBoxes.length > 0) {
            for (let i = 0; i < this.inputBoxes.length; i++) {
                // @ts-ignore
                calculatingArea.removeChild(this.inputBoxes[i]);
            }
            this.removeInputBoxes();
        }
        for (let i = 0; i < count; i++) {
            let input: HTMLInputElement = document.createElement("input");
            this.inputBoxes.push(input);
            let inputWidth: number = Math.floor(100 / (count + 2));
            input.style.width = inputWidth + "%";
            let margin: number = Math.floor((100 - inputWidth * count) / (count + 1));
            input.style.marginLeft = margin + "%";
            input.type = "number";
            // @ts-ignore
            calculatingArea.appendChild(input);
        }
    }

    addPlaceHolders(placeHolders: any[]): void {
        for (let i = 0; i < this.inputBoxes.length; i++) {
            document.getElementsByTagName("input")[i].placeholder = placeHolders[i];
        }
    }

    removeInputBoxes(): void {
        this.inputBoxes.length = 0;
    }
}