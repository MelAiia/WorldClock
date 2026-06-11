function updateCity(id, timezone, format = "HH:mm:ss") {
  let city = document.querySelector(id);

  if (!city) return;

  let now = moment().tz(timezone);

  city.querySelector(".date").innerHTML = now.format("MMMM Do YYYY");

  city.querySelector(".time").innerHTML =
    `${now.format("hh:mm:ss")} <small>${now.format("A")}</small>`;
}

function updateClocks() {
  updateCity("#kyiv", "Europe/Kyiv", "hh:mm:ss A");
  updateCity("#new-york", "America/New_York", "hh:mm:ss A");
  updateCity("#tokyo", "Asia/Tokyo", "hh:mm:ss A");
}

updateClocks();
setInterval(updateClocks, 1000);

function showSelectedCity(event) {
  let timezone = event.target.value;

  if (!timezone) {
    return;
  }

  if (timezone === "current") {
    timezone = moment.tz.guess();
  }

  let cityMoment = moment().tz(timezone);

  let cityName = timezone.split("/")[1]?.replace("_", " ") || "My Location";

  document.querySelector(".cities").innerHTML = `
    <div class="city">
      <div class="city-info">
        <h2>${cityName}</h2>
        <p class="date">
          ${cityMoment.format("MMMM Do YYYY")}
        </p>
      </div>

      <div class="time">
        ${cityMoment.format("HH:mm:ss")} <small>${cityMoment.format("A")}</small>
      </div>
    </div>

    <div class="back-link-container">
      <a href="index.html" class="back-link">
        ← Back to all cities
      </a>
    </div>
  `;
}

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", showSelectedCity);
