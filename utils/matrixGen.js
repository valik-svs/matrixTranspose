function matrixGen(colCount, rowCount=null) {
    rowCount = rowCount ? rowCount : colCount
    
    const numbersList = []
    const count = colCount * rowCount
    const matrix = []

    for (let index = 1; index <= count; index++) {
        numbersList.push(index);
    }

    for (let index = 0; index < rowCount; index++) {
        matrix.push(numbersList.splice(0, colCount))
    }
    return matrix
}

module.exports = matrixGen