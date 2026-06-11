function updateClocks() {
  // Kyiv
  let kyivElement = document.querySelector("#kyiv");
  let kyivDate = kyivElement.querySelector(".date");
  let kyivTime = kyivElement.querySelector(".time");
  let kyivMoment = moment().tz("Europe/Kyiv");

  kyivDate.innerHTML = kyivMoment.format("MMMM Do YYYY");
  kyivTime.innerHTML = `${kyivMoment.format(
    "HH:mm:ss",
  )} <small>${kyivMoment.format("z")}</small>`;

  // New York
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDate = newYorkElement.querySelector(".date");
  let newYorkTime = newYorkElement.querySelector(".time");
  let newYorkMoment = moment().tz("America/New_York");

  newYorkDate.innerHTML = newYorkMoment.format("MMMM Do YYYY");
  newYorkTime.innerHTML = `${newYorkMoment.format(
    "hh:mm:ss",
  )} <small>${newYorkMoment.format("A")}</small>`;

  // Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDate = tokyoElement.querySelector(".date");
  let tokyoTime = tokyoElement.querySelector(".time");
  let tokyoMoment = moment().tz("Asia/Tokyo");

  tokyoDate.innerHTML = tokyoMoment.format("MMMM Do YYYY");
  tokyoTime.innerHTML = `${tokyoMoment.format(
    "hh:mm:ss",
  )} <small>${tokyoMoment.format("A")}</small>`;
}

updateClocks();
setInterval(updateClocks, 1000);
