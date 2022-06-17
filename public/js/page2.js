console.clear();

Splitting({ target: ".planet-title h1", by: "chars" });

const elApp = document.querySelector("#app");

const elPlanets = Array.from(document.querySelectorAll("[data-planet]")).reduce(
  (acc, el) => {
    const planet = el.dataset.planet;

    acc[planet] = el;

    return acc;
  },
  {}
);

const planetKeys = Object.keys(elPlanets);

function getDetails(planet) {
  // tilt, gravity, hours
  const details = Array.from(
    elPlanets[planet].querySelectorAll(`[data-detail]`)
  ).reduce(
    (acc, el) => {
      acc[el.dataset.detail] = el.innerHTML.trim();

      return acc;
    },
    { planet }
  );

  return details;
}

// ...........

let currentPlanetIndex = 0;
let currentPlanet = getDetails("mercury");

function selectPlanet(planet) {
  const prevPlanet = currentPlanet;
  const elActive = document.querySelector("[data-active]");

  delete elActive.dataset.active;

  const elPlanet = elPlanets[planet];

  elPlanet.dataset.active = true;
  currentPlanet = getDetails(elPlanet.dataset.planet);

  console.log(prevPlanet, currentPlanet);

  const elHoursDetail = elPlanet.querySelector('[data-detail="hours"]');
  animate.fromTo(
    {
      from: +prevPlanet.hours,
      to: +currentPlanet.hours,
    },
    (value) => {
      elHoursDetail.innerHTML = Math.round(value);
    }
  );

  const elTiltDetail = elPlanet.querySelector('[data-detail="tilt"]');
  animate.fromTo(
    {
      from: +prevPlanet.tilt,
      to: +currentPlanet.tilt,
    },
    (value) => {
      elTiltDetail.innerHTML = value.toFixed(2);
    }
  );

  const elGravityDetail = elPlanet.querySelector('[data-detail="gravity"]');

  animate.fromTo(
    {
      from: +prevPlanet.gravity,
      to: +currentPlanet.gravity,
    },
    (value) => {
      elGravityDetail.innerHTML = value.toFixed(1);
    }
  );
}

function selectPlanetByIndex(i) {
  currentPlanetIndex = i;
  elApp.style.setProperty("--active", i);
  selectPlanet(planetKeys[i]);
}

// document.body.addEventListener('click', () => {
//   currentPlanetIndex = (currentPlanetIndex + 1) % planetKeys.length;

//   selectPlanet(planetKeys[currentPlanetIndex]);
// });

/* ---------------------------------- */

function animate(duration, fn) {
  const start = performance.now();
  const ticks = Math.ceil(duration / 16.666667);
  let progress = 0; // between 0 and 1, +/-

  function tick(now) {
    if (progress >= 1) {
      fn(1);
      return;
    }

    const elapsed = now - start;
    progress = elapsed / duration;

    // callback
    fn(progress); // number between 0 and 1

    requestAnimationFrame(tick); // every 16.6666667 ms
  }

  tick(start);
}

function easing(progress) {
  return (1 - Math.cos(progress * Math.PI)) / 2;
}

const animationDefaults = {
  duration: 1000,
  easing,
};

animate.fromTo = ({ from, to, easing, duration }, fn) => {
  easing = easing || animationDefaults.easing;
  duration = duration || animationDefaults.duration;

  const delta = +to - +from;

  return animate(duration, (progress) => fn(from + easing(progress) * delta));
};

/* ---------------------------------- */

const svgNS = "http://www.w3.org/2000/svg";
const elSvgNav = document.querySelector(".planet-nav svg");

const elTspans = [...document.querySelectorAll("tspan")];
const length = elTspans.length - 1;

elSvgNav.style.setProperty("--length", length);

// Getting the length for distributing the text along the path
const elNavPath = document.querySelector("#navPath");
const elLastTspan = elTspans[length];
const navPathLength =
  elNavPath.getTotalLength() - elLastTspan.getComputedTextLength();

elTspans.forEach((tspan, i) => {
  let percent = i / length;

  tspan.setAttribute("x", percent * navPathLength);
  tspan.setAttributeNS(svgNS, "x", percent * navPathLength);

  tspan.addEventListener("click", (e) => {
    e.preventDefault();
    selectPlanetByIndex(i);
  });
});

document.getElementById("myButton").onclick = function () {
  location.href = "../../index.html";
};
document.getElementById("myButton2").onclick = function () {
  location.href = "../html/page3.html";
};

const text = document.getElementById("text");
const title = document.getElementById("title");
const text2 = document.getElementById("text2");
const title2 = document.getElementById("title2");
const text3 = document.getElementById("text3");
const title3 = document.getElementById("title3");
const text4 = document.getElementById("text4");
const title4 = document.getElementById("title4");
const text5 = document.getElementById("text5");
const title5 = document.getElementById("title5");
const text6 = document.getElementById("text6");
const title6 = document.getElementById("title6");
const text7 = document.getElementById("text7");
const title7 = document.getElementById("title7");
const text8 = document.getElementById("text8");
const title8 = document.getElementById("title8");

text.onmouseover = function () {
  text.innerHTML =
    "Mercury is the closest planet to the Sun and the least massive in the Solar System. Its distance from the Sun is between 0.31 and 0.47 astronomical units, which corresponds to an eccentricity";
  title.innerHTML = "Mercury";
};

text.onmouseout = function () {
  text.innerHTML = "Place your mouse here if u want more information.";
  title.innerHTML = "Mercury";
};

text2.onmouseover = function () {
  text2.innerHTML =
    "Venus is the second planet in the Solar System in order of distance from the Sun, and the sixth largest in both mass and diameter. It owes its name to the Roman goddess of love. Venus orbits the Sun every 224.7 Earth days.";
  title2.innerHTML = "Venus";
};

text2.onmouseout = function () {
  text2.innerHTML = "Place your mouse here if u want more information.";
  title2.innerHTML = "Venus";
};

text3.onmouseover = function () {
  text3.innerHTML =
    "Earth is the third planet in order of distance from the Sun and the fifth largest in the Solar System by both mass and diameter. Moreover, it is the only celestial object known to harbor life. It orbits the Sun in 365.256 solar days — one sidereal year — and completes one rotation relative to the Sun in 23 h 56 min 4 s — one sidereal day — slightly less than its 24-hour solar day because of this displacement around the Suna. The axis of rotation of the Earth has an inclination of 23°, which causes the appearance of the seasons.";
  title3.innerHTML = "Earth";
};

text3.onmouseout = function () {
  text3.innerHTML = "Place your mouse here if u want more information.";
  title3.innerHTML = "Earth";
};

text4.onmouseover = function () {
  text4.innerHTML =
    "Mars is the fourth planet in the Solar System in ascending order of distance from the Sun and the second in ascending order of size and mass. Its distance from the Sun is between 1.381 and 1.666 AU, with an orbital period of 669.58 Martian days.";
  title4.innerHTML = "Mars";
};

text4.onmouseout = function () {
  text4.innerHTML = "Place your mouse here if u want more information.";
  title4.innerHTML = "Mars";
};

text5.onmouseover = function () {
  text5.innerHTML =
    "Jupiter is the fifth planet in the Solar System in order of distance from the Sun, and the largest in size and mass ahead of Saturn, which is like it a gas giant planet.";
  title5.innerHTML = "Jupiter";
};

text5.onmouseout = function () {
  text5.innerHTML = "Place your mouse here if u want more information.";
  title5.innerHTML = "Jupiter";
};

text6.onmouseover = function () {
  text6.innerHTML =
    "Saturn is the sixth planet in the Solar System in order of distance from the Sun, and the second largest in size and mass after Jupiter, which is like it a gas giant planet.";
  title6.innerHTML = "Saturn";
};

text6.onmouseout = function () {
  text6.innerHTML = "Place your mouse here if u want more information.";
  title6.innerHTML = "Saturn";
};
text7.onmouseover = function () {
  text7.innerHTML =
    "Uranus is the seventh planet in the Solar System in order of distance from the Sun. It orbits around it at a distance of about 19.2 astronomical units, with a period of revolution of 84.05 Earth years.";
  title7.innerHTML = "Uranus";
};

text7.onmouseout = function () {
  text7.innerHTML = "Place your mouse here if u want more information.";
  title7.innerHTML = "Uranus";
};
text8.onmouseover = function () {
  text8.innerHTML =
    "Neptune is the eighth planet in order of distance from the Sun and the farthest known from the Solar System. It orbits the Sun at a distance of about 30.1 au, with an orbital eccentricity half that of Earth and a period of revolution of 164.79 years.";
  title8.innerHTML = "Neptune";
};

text8.onmouseout = function () {
  text8.innerHTML = "Place your mouse here if u want more information.";
  title8.innerHTML = "Neptune";
};
