function matrixTranspose(matrix) {
    const result = []
    let maxSide

    if (!matrix.length) {
        return []
    }

    const matrixLength = matrix.length
    const subMatrixLength = matrix[0].length

    if (subMatrixLength > matrixLength) {
        maxSide = subMatrixLength
    }
    else {
        maxSide = matrixLength
    }

    //кейс с матрицей 1хN || Nx1
    if (matrixLength == 1 || subMatrixLength == 1) {
        if (subMatrixLength > matrixLength) {
            for (let i = 0; i < subMatrixLength; i++) {
                let temp = matrix[0][i]
                result.push([temp])
            }
            return result
        }

        result.push([])
        for (let i = 0; i < matrixLength; i++) {
            result[0].push(matrix[i][0])
        }
        return result
    }

    for (let index = 0; index < maxSide; index++) {
        let x = []

        let elementLength = subMatrixLength
        for (let element of matrix) {
            if (element[index] == undefined) {
                break
            }

            if (elementLength != element.length) {
                return 'Entered odd array'
            }

            x.push(element[index])
        }

        result.push(x)
    }

    return result
}

module.exports = matrixTranspose;