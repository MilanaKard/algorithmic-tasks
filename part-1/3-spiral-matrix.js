//На вход передается нечетное целое число в диапазоне от 1 до 1000 - количество строк и столбцов матрицы и сама матрица.
//Нужно вывести значения в матрице, начиная с центра по спирали. Движение вверх, далее по часовой стрелке.

const unfoldMatrix = (n, matrix) => {
  const center = Math.floor(n / 2);
  let i = center;
  let j = center;
  let count = 1;
  let result = [matrix[i][j]];

  while (count <= n) {
    //вверх
    for (let z = 0; z < count; z++) {
      i -= 1;
      if (z === n - 1) {
        return result;
      }
      result.push(matrix[i][j]);
    }
    //вправо
    for (z = 0; z < count; z++) {
      j += 1;
      result.push(matrix[i][j]);
    }
    //вниз
    count++;
    for (z = 0; z < count; z++) {
      i += 1;
      result.push(matrix[i][j]);
    }
    //влево
    for (z = 0; z < count; z++) {
      j -= 1;
      result.push(matrix[i][j]);
    }
    count++;
  }
};

