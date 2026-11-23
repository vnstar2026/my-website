
/*
  THE NGUYEN FILES — MEDIA SETUP

  1. Your portrait URL is already connected below.
  2. Add your introductory film URL when ready.
  3. Add slideshow image URLs in the numbered entries.
  4. No image-upload form is displayed to visitors.
*/

const SITE_MEDIA = {
  portrait: "https://cdn.phototourl.com/anon/2026-11-23-4e35d84b-a0a4-478f-9376-52500a0ed4cc.jpg",
  introVideo: "PASTE_YOUR_INTRO_VIDEO_URL_HERE"
};


// --------------------------------------------------
// 01. CLUE ARCHIVE
// --------------------------------------------------

const clues = [
  {
    title: "The Beginning",
    tag: "ORIGIN",
    heading: "A story shaped by more than one place.",
    text: "From Vietnam to the United States, new places brought new questions. This first clue is about the experiences, people, and small moments that shaped the way I see the world.",
    evidence: "EVIDENCE 001 · WHERE IT BEGAN",
    pieces: [0, 5]
  },
  {
    title: "The Scientist",
    tag: "RESEARCH",
    heading: "Looking closer at the living world.",
    text: "From hippocampal activity and neural communication to the tumor microenvironment and natural biomaterials, I am drawn to the patterns that connect biology, computation, and health.",
    evidence: "EVIDENCE 002 · QUESTIONS IN THE LAB",
    pieces: [1, 4]
  },
  {
    title: "The Innovator",
    tag: "IDEAS",
    heading: "Turning questions into things people can use.",
    text: "Some ideas begin with a problem that feels close to home. HomeHealth grew from an interest in environmental health, prevention, and making useful health information easier to reach.",
    evidence: "EVIDENCE 003 · IDEAS IN MOTION",
    pieces: [2, 7]
  },
  {
    title: "The Founder",
    tag: "BUILDING",
    heading: "Building something bigger than myself.",
    text: "Lotus Biomed Vanguard and The Gréne Vietnam began with a simple belief: students can create meaningful opportunities for other students and communities when they build together.",
    evidence: "EVIDENCE 004 · THE THINGS WE BUILD",
    pieces: [3, 6]
  },
  {
    title: "The Impact",
    tag: "COMMUNITY",
    heading: "Knowledge means more when it travels.",
    text: "Tutoring, student publishing, science challenges, environmental projects, and healthcare volunteering have shown me that learning can become a shared resource—not something kept to ourselves.",
    evidence: "EVIDENCE 005 · PEOPLE & PURPOSE",
    pieces: [8, 9]
  },
  {
    title: "The Milestones",
    tag: "MOMENTUM",
    heading: "A collection of firsts, lessons, and milestones.",
    text: "Competitions, academic experiences, laboratory training, and leadership roles mark different points along the way. Each one represents practice, persistence, and another reason to keep exploring.",
    evidence: "EVIDENCE 006 · MILESTONES ALONG THE WAY",
    pieces: [10, 11, 12]
  },
  {
    title: "The Person",
    tag: "BEYOND THE WORK",
    heading: "There is always more to the picture.",
    text: "Outside research and organizing, there is photography, dance, traditional Vietnamese music, detective fiction, languages, and an enduring curiosity about how things fit together.",
    evidence: "EVIDENCE 007 · THE PERSON BEHIND THE WORK",
    pieces: [13, 14, 15]
  }
];


// --------------------------------------------------
// 02. MAIN WORLD — VISUAL CHAPTERS
// --------------------------------------------------

const chapters = [
  {
    name: "Research",
    kicker: "01 / RESEARCH",
    title: "The questions\n beneath the surface.",
    description: "A look inside the laboratories, datasets, and biological questions that have shaped my research journey.",
    slides: [
      "Hippocampal networks & neural communication",
      "Spatial AI and the pancreatic tumor microenvironment",
      "Natural biomaterials and antibacterial research",
      "Learning the language of biotechnology"
    ]
  },
  {
    name: "Ideas & Projects",
    kicker: "02 / IDEAS & PROJECTS",
    title: "From questions\n to possibilities.",
    description: "Independent ideas, prototypes, and experiments that explore how science and technology can meet everyday needs.",
    slides: [
      "HomeHealth — environmental health, made more accessible",
      "Computational analysis of neuronal avalanche patterns",
      "Small experiments, bigger questions",
      "Making an idea tangible"
    ]
  },
  {
    name: "Founding",
    kicker: "03 / FOUNDING",
    title: "Build what\nyou wish existed.",
    description: "The organizations and initiatives I helped create, and the communities that continue to grow through shared effort.",
    slides: [
      "Lotus Biomed Vanguard — Lab to Life",
      "The Gréne Vietnam — community and sustainability",
      "A team across borders",
      "From a first idea to a growing community"
    ]
  },
  {
    name: "Community",
    kicker: "04 / COMMUNITY",
    title: "Learning is\nbetter shared.",
    description: "Science education, mentorship, outreach, and community projects that connect knowledge with people.",
    slides: [
      "Victoria Tutoring and peer mentorship",
      "Lotus Journal — student voices in biomedicine",
      "STEM Challenge 2026",
      "Little Moments and community engagement"
    ]
  },
  {
    name: "Leadership",
    kicker: "05 / LEADERSHIP",
    title: "Make room\nfor others to lead.",
    description: "A visual record of organizing, collaboration, and the teams and school communities I have been lucky to work with.",
    slides: [
      "Sci-HOSA at Mater Dei",
      "Mater Dei Key Club",
      "The Institute of Viéce",
      "Planning, teamwork, and the moments between"
    ]
  },
  {
    name: "Recognition",
    kicker: "06 / RECOGNITION",
    title: "Milestones,\nnot finish lines.",
    description: "Selected competition experiences, recognitions, and academic milestones—each one part of a longer learning process.",
    slides: [
      "Innovation and research competitions",
      "Academic competitions and honors",
      "Presentations, certificates, and celebrations",
      "Lessons that stay after the result"
    ]
  },
  {
    name: "Healthcare",
    kicker: "07 / HEALTHCARE",
    title: "Where science\nmeets people.",
    description: "Experiences that have brought me closer to patients, healthcare teams, biomedical technology, and the human side of care.",
    slides: [
      "Breast Cancer Network Vietnam",
      "St. Mary Medical Center — biomedical and radiology exposure",
      "Biochemistry and pharmaceutical science training",
      "The people behind the science"
    ]
  },
  {
    name: "Life & Interests",
    kicker: "08 / LIFE & INTERESTS",
    title: "The person\nbeyond the projects.",
    description: "A few other pieces of my world: the places, creative practices, languages, and stories that keep me curious.",
    slides: [
      "Photography and collecting moments",
      "Dance and traditional Vietnamese music",
      "Detective fiction, books, and unanswered questions",
      "Vietnamese, English, and Chinese"
    ]
  }
];


// --------------------------------------------------
// 03. NUMBERED PHOTO REFERENCES
// --------------------------------------------------

let photoNumber = 2;

chapters.forEach(chapter => {
  chapter.slides = chapter.slides.map(caption => ({
    caption,
    photoNo: photoNumber++,
    src: ""
  }));
});


// --------------------------------------------------
// 04. GENERAL HELPERS
// --------------------------------------------------

const $ = (selector, root = document) =>
  root.querySelector(selector);

const $$ = (selector, root = document) =>
  Array.from(root.querySelectorAll(selector));

const validUrl = value =>
  typeof value === "string" &&
  value.trim() !== "" &&
  !value.startsWith("PASTE_");

const toast = message => {
  const el = $("#toast");
  if (!el) return;

  el.textContent = message;
  el.classList.add("show");

  clearTimeout(toast.timer);

  toast.timer = setTimeout(() => {
    el.classList.remove("show");
  }, 2300);
};


// --------------------------------------------------
// 05. SCREEN NAVIGATION
// --------------------------------------------------

function showScreen(id) {
  $$(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  const target = $("#" + id);

  if (target) {
    target.classList.add("active");
  }

  document.body.classList.toggle(
    "world-mode",
    id === "world"
  );

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

$("#solveEntry").addEventListener("click", async () => {
  showScreen("case");

  renderClues();
  selectClue(0);

  if (!puzzleInitialized) {
    await initPuzzle();
    puzzleInitialized = true;
  }
});

$("#worldEntry").addEventListener("click", () => {
  enterWorld();
});

$("#exitCase").addEventListener("click", () => {
  showScreen("home");
});

$("#continueWorld").addEventListener("click", () => {
  $("#filmScreen").classList.remove("active");

  $("#filmScreen").setAttribute(
    "aria-hidden",
    "true"
  );

  enterWorld();
});

function enterWorld() {
  $("#filmScreen").classList.remove("active");

  showScreen("world");
  renderChapters();
}


// --------------------------------------------------
// 06. CLUE INTERFACE
// --------------------------------------------------

let activeClue = 0;
let collected = new Set();
let placed = new Set();

let puzzlePieces = [];
let dragPiece = null;
let dragOffset = { x: 0, y: 0 };

let puzzleInitialized = false;

const COLS = 4;
const ROWS = 4;


function renderClues() {
  const list = $("#clueList");

  list.innerHTML = "";

  clues.forEach((clue, index) => {
    const button = document.createElement("button");

    button.className = "clue-item";
    button.dataset.index = index;

    button.innerHTML = `
      <span class="clue-no">0${index + 1}</span>
      <span class="clue-name">${clue.title}</span>
      <span class="clue-state">
        ${collected.has(index) ? "✓" : index === activeClue ? "OPEN" : "—"}
      </span>
    `;

    button.addEventListener("click", () => {
      selectClue(index);
    });

    list.appendChild(button);
  });

  updateProgress();
}


function selectClue(index) {
  activeClue = index;

  const clue = clues[index];

  $("#activeClueNumber").textContent =
    `CLUE 0${index + 1} / ${clue.tag}`;

  $("#activeClueTitle").textContent =
    clue.heading;

  $("#activeClueText").textContent =
    clue.text;

  $("#activeClueEvidence").textContent =
    clue.evidence;

  const button = $("#collectClue");

  button.disabled = collected.has(index);

  button.innerHTML = collected.has(index)
    ? "CLUE COLLECTED ✓"
    : 'COLLECT THIS CLUE <span>↗</span>';

  $("#caseHint").textContent =
    collected.has(index)
      ? "EVIDENCE ADDED TO THE CASE"
      : "READ THE CLUE, THEN COLLECT ITS PIECES";

  renderClues();
}


$("#collectClue").addEventListener("click", () => {
  if (collected.has(activeClue)) return;

  collected.add(activeClue);

  clues[activeClue].pieces.forEach(index => {
    unlockPiece(index);
  });

  selectClue(activeClue);
  updateProgress();

  toast(
    `${clues[activeClue].title.toUpperCase()} — PIECES RELEASED`
  );

  if (placed.size === 16) {
    finishCase();
  }
});


function updateProgress() {
  const count = collected.size;

  $("#clueCount").textContent =
    `${String(count).padStart(2, "0")} / 07`;

  $("#progressText").textContent =
    `${Math.round(count / 7 * 100)}%`;

  $("#progressFill").style.width =
    `${count / 7 * 100}%`;

  $("#clueList")
    .querySelectorAll(".clue-item")
    .forEach((button, index) => {

      button.classList.toggle(
        "selected",
        index === activeClue
      );

      button.classList.toggle(
        "done",
        collected.has(index)
      );

      const state = $(".clue-state", button);

      if (state) {
        state.textContent = collected.has(index)
          ? "✓"
          : index === activeClue
            ? "OPEN"
            : "—";
      }
    });
}


// --------------------------------------------------
// 07. JIGSAW PUZZLE EDGE GENERATION
// --------------------------------------------------

const edgeH = Array.from(
  { length: ROWS - 1 },
  () => Array.from(
    { length: COLS },
    () => Math.random() < 0.5 ? 1 : -1
  )
);

const edgeV = Array.from(
  { length: ROWS },
  () => Array.from(
    { length: COLS - 1 },
    () => Math.random() < 0.5 ? 1 : -1
  )
);


function drawJigsawPath(
  ctx,
  w,
  h,
  top,
  right,
  bottom,
  left,
  tab
) {
  const x = tab;
  const y = tab;

  const ww = w - 2 * tab;
  const hh = h - 2 * tab;

  const midX = x + ww / 2;
  const midY = y + hh / 2;

  const r = tab * 0.72;

  ctx.beginPath();
  ctx.moveTo(x, y);

  // TOP EDGE
  if (top === 0) {
    ctx.lineTo(x + ww, y);
  } else {
    const s = -top;

    ctx.lineTo(midX - r * 1.45, y);

    ctx.bezierCurveTo(
      midX - r * 1.1, y,
      midX - r * 1.2, y + s * tab * 0.55,
      midX - r * 0.55, y + s * tab * 0.58
    );

    ctx.bezierCurveTo(
      midX - r * 0.15, y + s * tab * 0.6,
      midX - r * 0.35, y + s * tab,
      midX, y + s * tab
    );

    ctx.bezierCurveTo(
      midX + r * 0.35, y + s * tab,
      midX + r * 0.15, y + s * tab * 0.6,
      midX + r * 0.55, y + s * tab * 0.58
    );

    ctx.bezierCurveTo(
      midX + r * 1.2, y + s * tab * 0.55,
      midX + r * 1.1, y,
      midX + r * 1.45, y
    );

    ctx.lineTo(x + ww, y);
  }

  // RIGHT EDGE
  if (right === 0) {
    ctx.lineTo(x + ww, y + hh);
  } else {
    const s = right;

    ctx.lineTo(x + ww, midY - r * 1.45);

    ctx.bezierCurveTo(
      x + ww, midY - r * 1.1,
      x + ww + s * tab * 0.55, midY - r * 1.2,
      x + ww + s * tab * 0.58, midY - r * 0.55
    );

    ctx.bezierCurveTo(
      x + ww + s * tab * 0.6, midY - r * 0.15,
      x + ww + s * tab, midY - r * 0.35,
      x + ww + s * tab, midY
    );

    ctx.bezierCurveTo(
      x + ww + s * tab, midY + r * 0.35,
      x + ww + s * tab * 0.6, midY + r * 0.15,
      x + ww + s * tab * 0.58, midY + r * 0.55
    );

    ctx.bezierCurveTo(
      x + ww + s * tab * 0.55, midY + r * 1.2,
      x + ww, midY + r * 1.1,
      x + ww, midY + r * 1.45
    );

    ctx.lineTo(x + ww, y + hh);
  }

  // BOTTOM EDGE
  if (bottom === 0) {
    ctx.lineTo(x, y + hh);
  } else {
    const s = bottom;

    ctx.lineTo(midX + r * 1.45, y + hh);

    ctx.bezierCurveTo(
      midX + r * 1.1, y + hh,
      midX + r * 1.2, y + hh + s * tab * 0.55,
      midX + r * 0.55, y + hh + s * tab * 0.58
    );

    ctx.bezierCurveTo(
      midX + r * 0.15, y + hh + s * tab * 0.6,
      midX + r * 0.35, y + hh + s * tab,
      midX, y + hh + s * tab
    );

    ctx.bezierCurveTo(
      midX - r * 0.35, y + hh + s * tab,
      midX - r * 0.15, y + hh + s * tab * 0.6,
      midX - r * 0.55, y + hh + s * tab * 0.58
    );

    ctx.bezierCurveTo(
      midX - r * 1.2, y + hh + s * tab * 0.55,
      midX - r * 1.1, y + hh,
      midX - r * 1.45, y + hh
    );

    ctx.lineTo(x, y + hh);
  }

  // LEFT EDGE
  if (left === 0) {
    ctx.lineTo(x, y);
  } else {
    const s = -left;

    ctx.lineTo(x, midY + r * 1.45);

    ctx.bezierCurveTo(
      x, midY + r * 1.1,
      x + s * tab * 0.55, midY + r * 1.2,
      x + s * tab * 0.58, midY + r * 0.55
    );

    ctx.bezierCurveTo(
      x + s * tab * 0.6, midY + r * 0.15,
      x + s * tab, midY + r * 0.35,
      x + s * tab, midY
    );

    ctx.bezierCurveTo(
      x + s * tab, midY - r * 0.35,
      x + s * tab * 0.6, midY - r * 0.15,
      x + s * tab * 0.58, midY - r * 0.55
    );

    ctx.bezierCurveTo(
      x + s * tab * 0.55, midY - r * 1.2,
      x, midY - r * 1.1,
      x, midY - r * 1.45
    );

    ctx.lineTo(x, y);
  }

  ctx.closePath();
}


function edgeFor(row, col, side) {
  if (side === "top") {
    return row === 0 ? 0 : -edgeH[row - 1][col];
  }

  if (side === "bottom") {
    return row === ROWS - 1 ? 0 : edgeH[row][col];
  }

  if (side === "left") {
    return col === 0 ? 0 : -edgeV[row][col - 1];
  }

  return col === COLS - 1 ? 0 : edgeV[row][col];
}


function pieceEdges(index) {
  const row = Math.floor(index / COLS);
  const col = index % COLS;

  return {
    top: edgeFor(row, col, "top"),
    right: edgeFor(row, col, "right"),
    bottom: edgeFor(row, col, "bottom"),
    left: edgeFor(row, col, "left")
  };
}


// --------------------------------------------------
// 08. PORTRAIT IMAGE LOADING
// --------------------------------------------------

function makePortrait() {
  return new Promise(resolve => {
    const img = new Image();

    img.onload = () => {
      console.log(
        "Portrait loaded successfully:",
        img.width,
        img.height
      );

      resolve(img);
    };

    img.onerror = () => {
      console.error(
        "Portrait could not be loaded:",
        SITE_MEDIA.portrait
      );

      resolve(null);
    };

    if (validUrl(SITE_MEDIA.portrait)) {
      // Deliberately do not set crossOrigin here.
      // This allows the browser to load the image even if
      // the hosting server does not provide CORS headers.
      img.src = SITE_MEDIA.portrait;
    } else {
      resolve(null);
    }
  });
}


let portraitImage = null;


// --------------------------------------------------
// 09. FALLBACK PORTRAIT
// --------------------------------------------------

function fallbackPortrait() {
  const canvas = document.createElement("canvas");

  canvas.width = 1000;
  canvas.height = 750;

  const ctx = canvas.getContext("2d");

  const gradient = ctx.createLinearGradient(
    0, 0, 1000, 750
  );

  gradient.addColorStop(0, "#718a77");
  gradient.addColorStop(0.55, "#344d3d");
  gradient.addColorStop(1, "#17291f");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1000, 750);

  ctx.fillStyle = "rgba(225,231,210,.18)";

  ctx.beginPath();
  ctx.arc(500, 270, 115, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.ellipse(
    500, 680, 250, 290, 0, Math.PI, Math.PI * 2
  );
  ctx.fill();

  ctx.fillStyle = "#e8ebdd";
  ctx.font = "italic 42px Georgia";
  ctx.textAlign = "center";

  ctx.fillText(
    "YOUR PORTRAIT GOES HERE",
    500,
    700
  );

  return canvas;
}


// --------------------------------------------------
// 10. BUILD INDIVIDUAL PUZZLE PIECES
// --------------------------------------------------

function buildPiece(index) {
  const board = $("#puzzleBoard");
  const rect = board.getBoundingClientRect();

  const cellW = rect.width / COLS;
  const cellH = rect.height / ROWS;

  const tab = Math.min(cellW, cellH) * 0.19;

  const width = cellW + tab * 2;
  const height = cellH + tab * 2;

  const scale = 2;

  const canvas = document.createElement("canvas");

  canvas.width = width * scale;
  canvas.height = height * scale;

  const ctx = canvas.getContext("2d");

  ctx.scale(scale, scale);

  const row = Math.floor(index / COLS);
  const col = index % COLS;

  const edges = pieceEdges(index);

  drawJigsawPath(
    ctx,
    width,
    height,
    edges.top,
    edges.right,
    edges.bottom,
    edges.left,
    tab
  );

  ctx.save();
  ctx.clip();

  if (portraitImage) {
    const imageWidth = portraitImage.width;
    const imageHeight = portraitImage.height;

    const cover = Math.max(
      rect.width / imageWidth,
      rect.height / imageHeight
    );

    const drawWidth = imageWidth * cover;
    const drawHeight = imageHeight * cover;

    const offsetX = (rect.width - drawWidth) / 2;
    const offsetY = (rect.height - drawHeight) / 2;

    ctx.drawImage(
      portraitImage,
      offsetX - col * cellW + tab,
      offsetY - row * cellH + tab,
      drawWidth,
      drawHeight
    );

  } else {
    const fallback = fallbackPortrait();

    ctx.drawImage(
      fallback,
      -col * cellW + tab,
      -row * cellH + tab,
      rect.width,
      rect.height
    );
  }

  ctx.restore();

  ctx.strokeStyle = "rgba(239,242,224,.72)";
  ctx.lineWidth = 1.5;

  ctx.stroke();

  return {
    canvas,
    index,
    tab,
    cellW,
    cellH,
    width,
    height
  };
}


// --------------------------------------------------
// 11. INITIALIZE PUZZLE BOARD
// --------------------------------------------------

async function initPuzzle() {
  portraitImage = await makePortrait();

  const board = $("#puzzleBoard");

  board.innerHTML = "";

  for (let i = 0; i < 16; i++) {
    const cell = document.createElement("div");

    cell.className = "puzzle-cell";
    cell.dataset.index = i;

    board.appendChild(cell);
  }

  puzzlePieces = Array.from(
    { length: 16 },
    (_, index) => buildPiece(index)
  );

  updatePieceCount();
}


// --------------------------------------------------
// 12. CANVAS COPYING
// --------------------------------------------------

function copyCanvas(source) {
  const copy = document.createElement("canvas");

  copy.width = source.width;
  copy.height = source.height;

  const ctx = copy.getContext("2d");

  ctx.drawImage(source, 0, 0);

  return copy;
}


// --------------------------------------------------
// 13. UNLOCK PUZZLE PIECES
// --------------------------------------------------

function unlockPiece(index) {
  if ($(`#piece-${index}`)) return;

  const piece = puzzlePieces[index];

  if (!piece) return;

  const card = document.createElement("div");

  card.className = "piece-card";
  card.id = `piece-${index}`;
  card.dataset.index = index;

  card.appendChild(copyCanvas(piece.canvas));

  card.addEventListener(
    "pointerdown",
    startDrag
  );

  $("#pieceTray")
    .querySelector(".tray-empty")
    ?.remove();

  $("#pieceTray").appendChild(card);

  updatePieceCount();
}


// --------------------------------------------------
// 14. UPDATE PUZZLE COUNTERS
// --------------------------------------------------

function updatePieceCount() {
  const available = $$(".piece-card:not(.placed)", $("#pieceTray")).length;

  $("#trayCount").textContent =
    `${available} READY`;

  $("#pieceCount").textContent =
    placed.size;
}


// --------------------------------------------------
// 15. DRAG AND DROP
// --------------------------------------------------

function startDrag(event) {
  if (placed.has(Number(event.currentTarget.dataset.index))) {
    return;
  }

  event.preventDefault();

  const card = event.currentTarget;

  dragPiece = card;

  card.classList.add("dragging");

  const rect = card.getBoundingClientRect();

  dragOffset.x = event.clientX - rect.left;
  dragOffset.y = event.clientY - rect.top;

  card.style.position = "fixed";
  card.style.zIndex = "100";

  card.style.width = rect.width + "px";
  card.style.height = rect.height + "px";

  card.style.left = rect.left + "px";
  card.style.top = rect.top + "px";

  document.addEventListener(
    "pointermove",
    moveDrag
  );

  document.addEventListener(
    "pointerup",
    endDrag,
    { once: true }
  );
}


function moveDrag(event) {
  if (!dragPiece) return;

  dragPiece.style.left =
    (event.clientX - dragOffset.x) + "px";

  dragPiece.style.top =
    (event.clientY - dragOffset.y) + "px";
}


function endDrag(event) {
  if (!dragPiece) return;

  const card = dragPiece;

  document.removeEventListener(
    "pointermove",
    moveDrag
  );

  card.classList.remove("dragging");

  const board = $("#puzzleBoard");
  const rect = board.getBoundingClientRect();

  const inside =
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;

  const index = Number(card.dataset.index);

  if (inside) {
    const col = Math.min(
      COLS - 1,
      Math.max(
        0,
        Math.floor(
          (event.clientX - rect.left) /
          rect.width * COLS
        )
      )
    );

    const row = Math.min(
      ROWS - 1,
      Math.max(
        0,
        Math.floor(
          (event.clientY - rect.top) /
          rect.height * ROWS
        )
      )
    );

    const target = row * COLS + col;

    if (target === index) {
      placePiece(index, card);
    } else {
      toast("Not quite — try another position.");
      resetCard(card);
    }

  } else {
    resetCard(card);
  }

  dragPiece = null;
}


function resetCard(card) {
  card.style.position = "";
  card.style.zIndex = "";
  card.style.width = "";
  card.style.height = "";
  card.style.left = "";
  card.style.top = "";
}


// --------------------------------------------------
// 16. PLACE PUZZLE PIECE
// --------------------------------------------------

function placePiece(index, card) {
  const board = $("#puzzleBoard");

  const cell = $(
    `.puzzle-cell[data-index="${index}"]`,
    board
  );

  const piece = puzzlePieces[index];

  if (!cell || !piece || placed.has(index)) return;

  const canvas = copyCanvas(piece.canvas);

  canvas.style.position = "absolute";

  canvas.style.width =
    `calc(100% + ${piece.tab * 2}px)`;

  canvas.style.height =
    `calc(100% + ${piece.tab * 2}px)`;

  canvas.style.left =
    `-${piece.tab}px`;

  canvas.style.top =
    `-${piece.tab}px`;

  canvas.style.maxWidth = "none";
  canvas.style.zIndex = "2";

  cell.classList.add("occupied");

  cell.appendChild(canvas);

  card.classList.add("placed");

  placed.add(index);

  updatePieceCount();

  if (placed.size === 16) {
    if (collected.size === 7) {
      finishCase();
    } else {
      toast(
        "Portrait almost complete — collect every clue."
      );
    }
  }
}


// --------------------------------------------------
// 17. FINAL FILM
// --------------------------------------------------

function finishCase() {
  if (placed.size !== 16 || collected.size !== 7) {
    return;
  }

  $("#filmScreen").classList.add("active");

  $("#filmScreen").setAttribute(
    "aria-hidden",
    "false"
  );

  const video = $("#introVideo");

  if (validUrl(SITE_MEDIA.introVideo)) {
    video.src = SITE_MEDIA.introVideo;

    video.classList.add("ready");

    $("#videoPlaceholder").style.display = "none";

    video.play().catch(() => {
      console.log(
        "Automatic playback was blocked. The visitor can press play."
      );
    });

  } else {
    video.classList.remove("ready");

    $("#videoPlaceholder").style.display = "flex";
  }
}


// --------------------------------------------------
// 18. VISUAL CHAPTERS AND SLIDESHOW
// --------------------------------------------------

let activeChapter = 0;
let activeSlide = 0;


function renderChapters() {
  const tabs = $("#chapterTabs");

  tabs.innerHTML = "";

  chapters.forEach((chapter, index) => {
    const button = document.createElement("button");

    button.className =
      "chapter-tab" +
      (index === activeChapter ? " active" : "");

    button.textContent =
      `0${index + 1} / ${chapter.name.toUpperCase()}`;

    button.addEventListener("click", () => {
      activeChapter = index;
      activeSlide = 0;

      renderChapters();
      renderSlide();
    });

    tabs.appendChild(button);
  });

  renderSlide();
}


function renderSlide() {
  const chapter = chapters[activeChapter];

  const slide = chapter.slides[activeSlide];

  $("#slideCategory").textContent =
    chapter.kicker;

  $("#slideIndex").textContent =
    `ẢNH ${String(slide.photoNo).padStart(2, "0")} / ${String(activeSlide + 1).padStart(2, "0")}`;

  $("#slideCount").textContent =
    `${String(activeSlide + 1).padStart(2, "0")} — ${String(chapter.slides.length).padStart(2, "0")}`;

  $("#slideTitle").innerHTML =
    chapter.title.replace("\n", "<br>");

  $("#slideDescription").textContent =
    chapter.description;

  $("#slidePlaceholderTitle").textContent =
    slide.caption;

  $("#slidePlaceholderSub").textContent =
    slide.src
      ? ""
      : "PASTE IMAGE URL IN THE NUMBERED MEDIA ENTRY IN SCRIPT.JS";

  const area = $("#slideImageArea");

  area.style.backgroundImage = slide.src
    ? `linear-gradient(0deg,rgba(15,28,21,.32),rgba(15,28,21,.04)),url("${slide.src}")`
    : "";

  area.classList.toggle(
    "has-image",
    !!slide.src
  );

  $("#slidePlaceholderSub").style.display =
    slide.src ? "none" : "block";

  $("#slideDots").innerHTML = "";

  chapter.slides.forEach((_, index) => {
    const dot = document.createElement("span");

    dot.className =
      "slide-dot" +
      (index === activeSlide ? " active" : "");

    $("#slideDots").appendChild(dot);
  });
}


$("#prevSlide").addEventListener("click", () => {
  activeSlide =
    (activeSlide - 1 + chapters[activeChapter].slides.length) %
    chapters[activeChapter].slides.length;

  renderSlide();
});


$("#nextSlide").addEventListener("click", () => {
  activeSlide =
    (activeSlide + 1) %
    chapters[activeChapter].slides.length;

  renderSlide();
});


// --------------------------------------------------
// 19. MAIN INTRODUCTION PORTRAIT
// --------------------------------------------------

function setHeroPortrait() {
  const portrait = $("#heroPortrait");

  if (portrait && validUrl(SITE_MEDIA.portrait)) {
    portrait.style.backgroundImage =
      `url("${SITE_MEDIA.portrait}")`;

    portrait.classList.add("has-image");
  }
}


// --------------------------------------------------
// 20. BACK TO TOP
// --------------------------------------------------

$("#backToTop").addEventListener("click", event => {
  event.preventDefault();

  showScreen("home");
});


// --------------------------------------------------
// 21. INITIAL PAGE LOAD
// --------------------------------------------------

window.addEventListener("load", () => {
  setHeroPortrait();

  $("#pieceTray").innerHTML = `
    <div class="tray-empty">
      Collect your first clue to release the puzzle pieces.
    </div>
  `;

  console.log("THE NGUYEN FILES — Website initialized.");
});
