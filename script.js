const display = document.getElementById("display");

const sounds = {
  Q: "Heater 1",
  W: "Heater 2",
  E: "Heater 3",
  A: "Heater 4",
  S: "Clap",
  D: "Open Hi-Hat",
  Z: "Kick n Hat",
  X: "Kick",
  C: "Closed Hi-Hat"
};

function playSound(letter) {
  const audio = document.getElementById(letter);

  if (!audio) {
    return;
  }

  audio.currentTime = 0;
  audio.play();

  display.textContent = sounds[letter];
  
  const pad = audio.parentElement;

  pad.classList.add("active");

  setTimeout(() => {
    pad.classList.remove("active");
  }, 150);
}

const drumPads = document.querySelectorAll(".drum-pad");

drumPads.forEach((pad) => {
  pad.addEventListener("click", () => {
    const letter = pad.textContent.trim();
    playSound(letter);
  });
});

document.addEventListener("keydown", (event) => {
  const letter = event.key.toUpperCase();

  playSound(letter);
});