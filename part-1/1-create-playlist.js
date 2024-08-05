//На вход подается два плейлиста в виде строк, содержащих равное количество id музыкальных композиций через пробел. В первой строке российские композиции, во второй - зарубежные.
// Вывести строку с чередующимися песнями российских и зарубежных исполнителей. Первой должна быть песня российского исполнителя, порядок следования должен быть сохранен.


const getPlaylist = (russian, foreign) => {
  const russianSongs = russian.split(" ");
  const foreignSongs = foreign.split(" ");
  return russianSongs.reduce((acc, currentValue, index) => `${acc} ${currentValue}  ${foreignSongs[index]}`, "").trim();
};
