const species = [
  {
    name: "Gray Wolf",
    category: "Mammals",
    icon: "🐺",
    region: "Upper Peninsula",
    description: "A powerful predator that roams northern forests and remote wilderness areas.",
    sound: { frequencies: [180, 220, 170, 210], wave: "sawtooth" }
  },
  {
    name: "White-tailed Deer",
    category: "Mammals",
    icon: "🦌",
    region: "Statewide",
    description: "Known for quiet woodland movement and sudden alarm calls in open grasslands.",
    sound: { frequencies: [170, 150, 130, 120], wave: "triangle" }
  },
  {
    name: "Red Fox",
    category: "Mammals",
    icon: "🦊",
    region: "Across Michigan",
    description: "A curious scavenger that is most active at dusk and in the edge habitats between forest and field.",
    sound: { frequencies: [420, 380, 350, 330], wave: "square" }
  },
  {
    name: "American Robin",
    category: "Birds",
    icon: "🐦",
    region: "Woodlands",
    description: "A familiar spring singer that fills neighborhoods and forests with bright, melodic calls.",
    sound: { frequencies: [660, 780, 720, 680], wave: "sine" }
  },
  {
    name: "Great Blue Heron",
    category: "Birds",
    icon: "🪶",
    region: "Wetlands",
    description: "Tall and patient, often scanning marshes and lakes for fish as the day begins.",
    sound: { frequencies: [170, 200, 190, 180], wave: "triangle" }
  },
  {
    name: "Sandhill Crane",
    category: "Birds",
    icon: "🦩",
    region: "Prairies & wetlands",
    description: "A striking migratory bird known for resonant calls over open marshes and grasslands.",
    sound: { frequencies: [320, 300, 260, 240], wave: "sine" }
  },
  {
    name: "Monarch Butterfly",
    category: "Insects",
    icon: "🦋",
    region: "Meadows",
    description: "A migrating pollinator whose bright patterning is matched by the fluttering energy of summer meadows.",
    sound: { frequencies: [1200, 980, 900, 860], wave: "sawtooth" }
  },
  {
    name: "Cicada",
    category: "Insects",
    icon: "🪲",
    region: "Warm woodland edges",
    description: "The summer chorus rises quickly as the sun warms the trees and air across Michigan.",
    sound: { frequencies: [1500, 1700, 1600, 1500], wave: "square" }
  },
  {
    name: "Firefly",
    category: "Insects",
    icon: "✨",
    region: "Dusk fields",
    description: "A gentle evening glow often paired with soft, still air and warm twilight hours.",
    sound: { frequencies: [980, 940, 910, 860], wave: "triangle" }
  }
];

const grid = document.getElementById("speciesGrid");
const filterButtons = document.querySelectorAll(".filter-button");
let activeAudioContext = null;
let activeOscillators = [];

function renderSpecies(currentFilter = "all") {
  const visibleSpecies = currentFilter === "all"
    ? species
    : species.filter((item) => item.category === currentFilter);

  grid.innerHTML = visibleSpecies
    .map(
      (item) => `
        <article class="species-card">
          <div class="card-visual" aria-hidden="true">${item.icon}</div>
          <div class="card-body">
            <div class="meta-row">
              <span>${item.category}</span>
              <span>${item.region}</span>
            </div>
            <h4>${item.name}</h4>
            <p>${item.description}</p>
            <button class="play-button" type="button" data-species-name="${item.name}">
              Play sound
            </button>
          </div>
        </article>
      `
    )
    .join("");
}

function getAudioContext() {
  if (!activeAudioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) {
      return null;
    }
    activeAudioContext = new AudioCtx();
  }

  if (activeAudioContext.state === "suspended") {
    activeAudioContext.resume();
  }

  return activeAudioContext;
}

function stopCurrentSound() {
  activeOscillators.forEach((oscillator) => {
    try {
      oscillator.stop();
    } catch {
      // Ignore attempts to stop oscillators that have already been stopped.
    }
  });
  activeOscillators = [];
}

function playSpeciesSound(item) {
  const audioContext = getAudioContext();
  if (!audioContext) {
    alert("Audio playback is not supported in this browser.");
    return;
  }

  stopCurrentSound();

  const startTime = audioContext.currentTime;

  item.sound.frequencies.forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const segmentStart = startTime + index * 0.18;

    oscillator.type = item.sound.wave;
    oscillator.frequency.setValueAtTime(frequency, segmentStart);

    gainNode.gain.setValueAtTime(0.0001, segmentStart);
    gainNode.gain.exponentialRampToValueAtTime(0.08, segmentStart + 0.03);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, segmentStart + 0.18);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start(segmentStart);
    oscillator.stop(segmentStart + 0.2);
    activeOscillators.push(oscillator);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const { filter } = button.dataset;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderSpecies(filter);
  });
});

grid.addEventListener("click", (event) => {
  const button = event.target.closest(".play-button");
  if (!button) {
    return;
  }

  const speciesName = button.dataset.speciesName;
  const selected = species.find((item) => item.name === speciesName);
  if (selected) {
    playSpeciesSound(selected);
  }
});

renderSpecies();
