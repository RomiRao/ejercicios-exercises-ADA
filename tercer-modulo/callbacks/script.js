//ejercicio en clase de CALLBACK
const numeros = [10, 2, 3, 40, 33, 50];
const multiploDe10 = (x) => x % 10 === 0;

const filter = (array, callback) => {
    const nuevoArray = [];
    for (let elemento of array) {
        if (callback(elemento)) {
            nuevoArray.push(elemento);
        }
    }
    return nuevoArray;
};

filter(numeros, multiploDe10); // [10, 40, 50]

//some callback
const esPositivo = (x) => x >= 0;

const some = (array, callback) => {
    for (let element of array) {
        if (callback(element)) {
            return true;
        }
    }
};

some(numeros, multiploDe10); // true
some(numeros, esPositivo); // true

//find callback
const find = (array, callback) => {
    for (let element of array) {
        if (callback(element)) {
            return element;
        }
    }
    return false;
};

find(numeros, multiploDe10); // 40

//findIndex
const findIndex = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return i;
        }
    }
    return false;
};

findIndex(numeros, multiploDe10); // 3
