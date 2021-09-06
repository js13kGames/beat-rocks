// Hacks - remove later

import { playBGM } from "./audio";
import { makeExplosion, particles } from "./particles";
import { newAsteroid, setLevel, state, titleScreen } from "./state";

window.addEventListener("keypress", (e) => {
  if (e.key === "a") {
    newAsteroid();
  }
  if (e.key === "A") {
    state.asteroids = [];
  }
  if (e.key === "P") {
    particles.push(...makeExplosion([-3, 4]));
  }
  if (e.key === "T") {
    titleScreen();
  }
  if (e.code === "Digit1") {
    state.asteroids = [];
    state.signs = [];
    setLevel(0);
  }
  if (e.code === "Digit2") {
    state.asteroids = [];
    state.signs = [];
    setLevel(1);
  }
  if (e.code === "Digit3") {
    state.asteroids = [];
    state.signs = [];
    setLevel(2);
  }
  if (e.code === "Digit4") {
    state.asteroids = [];
    state.signs = [];
    setLevel(3);
  }
  if (e.code === "Digit5") {
    state.asteroids = [];
    state.signs = [];
    setLevel(4);
  }
  if (e.code === "Digit6") {
    state.asteroids = [];
    state.signs = [];
    setLevel(5);
  }
});

if (state.asteroids.length === 0) {
  newAsteroid();
}
