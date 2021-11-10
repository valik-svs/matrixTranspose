const matrixTranspose = require('../transpose.js')
const matrixGen = require('../utils/matrixGen.js')
let currentMatrix, currentResult

afterEach(() => {
    //Добавил для наглядности
    console.log("____matrix____");
    console.log(currentMatrix);
    console.log("______________");
    console.log("____result____");
    console.log(currentResult);
    console.log("______________");
});

test('Check transpose matrix with 3x3', () => {
    const matrix = matrixGen(3)
    const result = matrixTranspose(matrix)
    expect(result[0][0]).toBe(1);
    expect(result[2][0]).toBe(3);
    expect(result[0][2]).toBe(7);
    expect(result[2][2]).toBe(9);
    
    //out of range
    expect(result[0][3]).toBeUndefined()
    currentMatrix = matrix
    currentResult = result
});

test('Check transpose with empty matrix', () => {
    const matrix = []
    const result = matrixTranspose(matrix)
    expect(result).toEqual(expect.arrayContaining([]))
    currentMatrix = matrix
    currentResult = result
});

test('Check transpose with odd matrix', () => {
    const matrix = [ 
        [1,2,3],
        [4,6],
        [7,8,9]
    ]
    const result = matrixTranspose(matrix)
    expect(result).toBe('Entered odd array');
    currentMatrix = matrix
    currentResult = result
});

test('Check transpose with matrix 1x5', () => {
    const matrix = matrixGen(1,5)
    const result = matrixTranspose(matrix)
    expect(result.length).toBe(1);
    expect(result[0].length).toBe(5);
    expect(result[1]).toBeUndefined()
    currentMatrix = matrix
    currentResult = result
});

test('Check transpose with matrix 5x1', () => {
    const matrix = matrixGen(5,1)
    const result = matrixTranspose(matrix)
    expect(result.length).toBe(5);
    expect(result[0].length).toBe(1);
    expect(result[5]).toBeUndefined()
    currentMatrix = matrix
    currentResult = result
});