//На вход подается число N, по модулю не превосходящее 100000. На выходе должно быть число, развернутое в обрвтном порядке. Нули в начале получившегося числа нужно удалить.

const encryptNumber = (n) => {
  let result = "";
  const reversed = n.toString().split("").reverse();
  if (reversed[reversed.length - 1] === "-") {
    reversed.pop();
    result = "-";
  }
  return (result += Number(reversed.join("")));
};
