function circuitPower() {
    const voltage = document.getElementById('voltageInput').value;
    const current = document.getElementById('currentInput').value;
    const power = voltage * current;
    document.getElementById('powerResult').innerText = `Power: ${power}W`;
}

function findMaxNumber() {
    const input = document.getElementById('maxNumberInput').value;
    const numbers = input.split(',').map(Number);
    const maxNumber = numbers.length ? Math.max(...numbers) : null;
    document.getElementById('maxNumberResult').innerText = maxNumber !== null ? `Max Number: ${maxNumber}` : 'Array is empty';
}

function mergeArrays() {
    const array1 = document.getElementById('mergeArray1').value.split(',');
    const array2 = document.getElementById('mergeArray2').value.split(',');
    const mergedArray = [...array1, ...array2];
    document.getElementById('mergeArrayResult').innerText = `Merged Array: [${mergedArray.join(', ')}]`;
}

function arrayValuesTypes() {
    const input = document.getElementById('arrayValuesInput').value.split(',').map(item => {
        item = item.trim();
        if (!isNaN(item) && item !== '') {
            return Number(item);
        } else if (item.toLowerCase() === 'null') {
            return null;
        } else if (item.toLowerCase() === 'undefined') {
            return undefined;
        } else if (item.toLowerCase() === 'true' || item.toLowerCase() === 'false') {
            return item.toLowerCase() === 'true';
        } else {
            try {
                return JSON.parse(item);
            } catch (e) {
                return item;
            }
        }
    });
    const typesArray = input.map(value => (value === null ? 'null' : typeof value));
    document.getElementById('arrayValuesResult').innerText = `Types: [${typesArray.join(', ')}]`;
}