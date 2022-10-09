export class Flattener {
    
    // An algorithm to flatten an arbitrarily nested array of values.
    public flatten = (inputArray: any[]): any[] => {
        if (!Array.isArray(inputArray)) {
            throw new Error('Given input value must be an array.');
        }
        const flattenedArray = new Array();
        this.flattenArray(inputArray, flattenedArray);
        return flattenedArray;
    }

    // Recursive function
    private flattenArray = (inputArray: any[], flattenedArray: any[]) => {
        for (let i = 0; i < inputArray.length; i++) {
            const currentValue = inputArray[i];
            
            if (Array.isArray(currentValue)) {
                this.flattenArray(currentValue, flattenedArray);
            }
            else {
                flattenedArray.push(currentValue);
            }
        }
    }
}