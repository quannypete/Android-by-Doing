const challenges = [
  {
    "slug": "stopwatch",
    "title": "Stopwatch",
    "description": "Start, pause, reset, and preserve elapsed time across rotation.",
    "learn": "Compose state, coroutines, lifecycle-aware state, and saved state.",
    "requirements": [
      "Display elapsed time with hundredths of a second.",
      "Provide Start, Pause, and Reset controls.",
      "Prevent duplicate timers from running.",
      "Preserve elapsed time across device rotation.",
      "Keep timing logic outside the composable."
    ],
    "principles": [
      "Use monotonic time rather than counting delay calls.",
      "Model running and paused states explicitly.",
      "Format elapsed milliseconds for display."
    ],
    "skills": "Compose state \u00b7 Coroutines \u00b7 ViewModel",
    "image": "assets/challenges/stopwatch.svg"
  },
  {
    "slug": "tip-calculator",
    "title": "Tip Calculator",
    "description": "Calculate tip and total, validate input, and support split bills.",
    "learn": "Input handling, validation, derived state, formatting, and adaptive layouts.",
    "requirements": [
      "Accept a bill amount and tip percentage.",
      "Display tip amount and final total.",
      "Support splitting the bill between multiple people.",
      "Reject invalid or negative input gracefully.",
      "Format monetary values consistently."
    ],
    "principles": [
      "Keep raw input separate from calculated values.",
      "Make all totals derived from one UI state.",
      "Test rounding and empty-input behavior."
    ],
    "skills": "Text input \u00b7 Validation \u00b7 Derived state",
    "image": "assets/challenges/tip-calculator.svg"
  },
  {
    "slug": "shopping-list",
    "title": "Shopping List",
    "description": "Add, edit, check off, sort, and persist shopping items.",
    "learn": "CRUD flows, Room, list interactions, dialogs, filtering, and persistence.",
    "requirements": [
      "Add new shopping items.",
      "Edit an existing item.",
      "Mark items purchased or unpurchased.",
      "Sort or filter the list.",
      "Persist all changes locally."
    ],
    "principles": [
      "Use stable IDs for every item.",
      "Expose data from a repository as Flow.",
      "Support an empty state and undo delete."
    ],
    "skills": "Room \u00b7 Flow \u00b7 CRUD \u00b7 LazyColumn",
    "image": "assets/challenges/shopping-list.svg"
  },
  {
    "slug": "baseball-pitch-counter",
    "title": "Baseball Pitch Counter",
    "description": "Track balls, strikes, outs, pitch count, and inning resets.",
    "learn": "Domain modeling, event-driven state, rules, and durable game state.",
    "requirements": [
      "Track balls, strikes, outs, and total pitches.",
      "Automatically reset the count after a walk or strikeout.",
      "Advance the inning after three outs.",
      "Allow correction of accidental taps.",
      "Preserve the active game state."
    ],
    "principles": [
      "Represent every tap as a domain event.",
      "Keep baseball rules out of composables.",
      "Add a compact game summary."
    ],
    "skills": "State machine \u00b7 ViewModel \u00b7 Saved state",
    "image": "assets/challenges/baseball-pitch-counter.svg"
  },
  {
    "slug": "batting-lineup-manager",
    "title": "Batting Lineup Manager",
    "description": "Reorder players, assign positions, and rotate innings.",
    "learn": "Drag-and-drop lists, structured data, validation, and multi-screen flows.",
    "requirements": [
      "Create and edit a player roster.",
      "Reorder the batting lineup.",
      "Assign defensive positions by inning.",
      "Prevent invalid duplicate assignments.",
      "Save and reopen lineups."
    ],
    "principles": [
      "Separate roster, batting order, and defensive assignments.",
      "Show warnings without blocking experimentation.",
      "Export a lineup as shareable text."
    ],
    "skills": "Drag and drop \u00b7 Room \u00b7 Navigation",
    "image": "assets/challenges/batting-lineup-manager.svg"
  },
  {
    "slug": "gamecast-score-bug",
    "title": "Gamecast Score Bug",
    "description": "Recreate a compact live-score component from memory.",
    "learn": "Dense Compose layouts, responsive design, animation, and reusable UI state.",
    "requirements": [
      "Show two teams, scores, game status, and period or inning.",
      "Include possession, bases, or another sport-specific indicator.",
      "Handle pregame, live, delayed, and final states.",
      "Adapt cleanly to narrow widths.",
      "Build from memory rather than copying production code."
    ],
    "principles": [
      "Create preview data for every game state.",
      "Animate score changes subtly.",
      "Keep the component reusable across sports."
    ],
    "skills": "Compose layout \u00b7 Animation \u00b7 Previews",
    "image": "assets/challenges/gamecast-score-bug.svg"
  },
  {
    "slug": "android-calculator",
    "title": "Android Calculator",
    "description": "Implement keypad behavior, operations, formatting, and state.",
    "learn": "State machines, expression rules, numeric formatting, and edge cases.",
    "requirements": [
      "Support digits, decimal input, and four basic operations.",
      "Implement clear, delete, equals, and repeated operations.",
      "Handle division by zero safely.",
      "Format large and decimal results cleanly.",
      "Survive configuration changes."
    ],
    "principles": [
      "Avoid using eval-style expression execution.",
      "Model pending operations explicitly.",
      "Write unit tests before adding advanced operators."
    ],
    "skills": "State machine \u00b7 Unit tests \u00b7 Formatting",
    "image": "assets/challenges/android-calculator.svg"
  },
  {
    "slug": "google-keep-mini",
    "title": "Google Keep Mini",
    "description": "Build notes with colors, search, pinning, and local persistence.",
    "learn": "Room relationships, search, grid layouts, state restoration, and polish.",
    "requirements": [
      "Create, edit, and delete notes.",
      "Assign a color to each note.",
      "Pin important notes above others.",
      "Search note titles and body text.",
      "Persist notes locally."
    ],
    "principles": [
      "Use an adaptive grid layout.",
      "Autosave edits safely.",
      "Add archived and deleted states."
    ],
    "skills": "Room \u00b7 Search \u00b7 Adaptive grid",
    "image": "assets/challenges/google-keep-mini.svg"
  },
  {
    "slug": "settings-clone",
    "title": "Settings Clone",
    "description": "Recreate a polished settings screen with working preferences.",
    "learn": "Preference modeling, DataStore, accessibility, theming, and navigation.",
    "requirements": [
      "Build grouped settings sections.",
      "Include switches, list choices, and navigation rows.",
      "Persist changed preferences.",
      "Reflect settings immediately in the app.",
      "Support accessibility and dark theme."
    ],
    "principles": [
      "Use typed preference models.",
      "Provide summaries for current values.",
      "Make full rows clickable where appropriate."
    ],
    "skills": "DataStore \u00b7 Accessibility \u00b7 Material 3",
    "image": "assets/challenges/settings-clone.svg"
  },
  {
    "slug": "play-store-home",
    "title": "Play Store Home",
    "description": "Build a responsive app catalog with carousels and detail navigation.",
    "learn": "Nested lazy layouts, image loading, navigation, adaptive UI, and data layers.",
    "requirements": [
      "Create horizontal app carousels grouped by category.",
      "Show app artwork, title, rating, and category.",
      "Navigate to an app-detail screen.",
      "Handle loading, empty, and error states.",
      "Adapt to phone and tablet widths."
    ],
    "principles": [
      "Use fake repository data first.",
      "Avoid nesting same-direction scrolling containers.",
      "Add shared element-style visual continuity."
    ],
    "skills": "Lazy layouts \u00b7 Navigation \u00b7 Adaptive UI",
    "image": "assets/challenges/play-store-home.svg"
  }
];
const params = new URLSearchParams(location.search);
const challenge = challenges.find(item => item.slug === params.get("id")) || challenges[0];
document.title = `${challenge.title} · Android by Doing`;
document.querySelector("#challengeTitle").textContent = challenge.title;
document.querySelector("#challengeDescription").textContent = challenge.description;
document.querySelector("#challengeLearn").textContent = challenge.learn;
document.querySelector("#challengeSkills").textContent = challenge.skills;
const image = document.querySelector("#challengeImage"); image.src=challenge.image; image.alt=`Concept mockup for the ${challenge.title} Android app`;
document.querySelector("#requirements").innerHTML = challenge.requirements.map(item=>`<li>${item}</li>`).join("");
document.querySelector("#principles").innerHTML = challenge.principles.map(item=>`<li>${item}</li>`).join("");
const preferredTheme = localStorage.getItem("androidByDoingTheme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
document.body.classList.toggle("dark", preferredTheme === "dark");
const toggle=document.querySelector("#themeToggle"); toggle.textContent=preferredTheme === "dark" ? "☀" : "☾";
toggle.addEventListener("click",()=>{const dark=document.body.classList.toggle("dark");toggle.textContent=dark?"☀":"☾";localStorage.setItem("androidByDoingTheme",dark?"dark":"light");});
