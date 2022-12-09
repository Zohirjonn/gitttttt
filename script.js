"use strict";
const numbersOfSerial = +prompt("Nechta serial ko'rdingiz");
const seriesDB = {
  count: numbersOfSerial,
  series: {},
  actors: {},
  genres: [],
  private: false,
};
for (let i = 0; i < 2; i++) {
  const a = prompt("Oxirgi marta ko'rgan serialingiz?"),
    b = prompt("Nechi baho berasiz?");
  if (a != null && b != null && a != "" && b != "") {
    seriesDB.series[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
}
if (seriesDB.count <= 5) {
  console.log("Siz juda kam serial ko'ribsiz!");
} else if (seriesDB.count > 5 && seriesDB.count <= 10) {
  console.log("Siz yaxshi tomoshabin ekansiz!");
} else if (seriesDB.count > 10) {
  console.log("Siz ashaddiy serial muhlisi ekansiz!");
}
console.log(seriesDB);
