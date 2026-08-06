const RES = {
  composeCourse: ["Android Basics with Compose", "Official self-paced course covering Kotlin and modern Android UI.", "https://developer.android.com/courses/android-basics-compose/course"],
  composeTutorial: ["Jetpack Compose tutorial", "Create composables, previews, layouts, and interactive UI.", "https://developer.android.com/develop/ui/compose/tutorial"],
  modifiers: ["Compose modifiers", "Learn how modifiers size, position, decorate, and handle interaction.", "https://developer.android.com/develop/ui/compose/modifiers"],
  layouts: ["Compose layouts", "Rows, columns, boxes, constraints, and custom layouts.", "https://developer.android.com/develop/ui/compose/layouts/basics"],
  material: ["Material 3 in Compose", "Material components, theming, typography, and color.", "https://developer.android.com/develop/ui/compose/designsystems/material3"],
  state: ["State in Compose", "remember, mutable state, state hoisting, and observable state.", "https://developer.android.com/develop/ui/compose/state"],
  textInput: ["Text fields in Compose", "TextField, input state, transformations, and keyboard options.", "https://developer.android.com/develop/ui/compose/text/user-input"],
  lists: ["Lists and grids", "Build efficient scrolling content with LazyColumn and LazyRow.", "https://developer.android.com/develop/ui/compose/lists"],
  interaction: ["Handling user interactions", "Clicks, gestures, indication, and accessible interaction.", "https://developer.android.com/develop/ui/compose/touch-input/user-interactions/handling-interactions"],
  navigation: ["Navigation with Compose", "Define destinations, navigate, and pass arguments.", "https://developer.android.com/develop/ui/compose/navigation"],
  viewmodel: ["ViewModel overview", "Store and manage screen-level UI state across configuration changes.", "https://developer.android.com/topic/libraries/architecture/viewmodel"],
  architecture: ["Guide to app architecture", "UI and data layers, repositories, state holders, and UDF.", "https://developer.android.com/topic/architecture"],
  uiLayer: ["UI layer", "Model UI state and expose it through state holders such as ViewModels.", "https://developer.android.com/topic/architecture/ui-layer"],
  coroutines: ["Kotlin coroutines on Android", "Use structured concurrency for asynchronous work.", "https://developer.android.com/kotlin/coroutines"],
  lifecycle: ["Collect flows safely", "Collect Flow from the UI while respecting lifecycle state.", "https://developer.android.com/kotlin/flow/stateflow-and-sharedflow"],
  networking: ["Connect to the network", "Networking fundamentals, permissions, threading, and security.", "https://developer.android.com/develop/connectivity/network-ops/connecting"],
  retrofit: ["Retrofit documentation", "Define type-safe HTTP APIs and convert responses.", "https://square.github.io/retrofit/"],
  dataLayer: ["Data layer", "Repositories, data sources, business logic, and source-of-truth patterns.", "https://developer.android.com/topic/architecture/data-layer"],
  datastore: ["DataStore", "Persist small key-value or typed data using coroutines and Flow.", "https://developer.android.com/topic/libraries/architecture/datastore"],
  room: ["Save data with Room", "Entities, DAOs, databases, queries, and observable data.", "https://developer.android.com/training/data-storage/room"],
  testing: ["Test your app", "Android testing fundamentals, local tests, and instrumented tests.", "https://developer.android.com/training/testing"],
  composeTesting: ["Test Compose layouts", "Find nodes, perform actions, and assert UI state.", "https://developer.android.com/develop/ui/compose/testing"],
  gestures: ["Gestures in Compose", "Understand gesture modifiers and pointer input.", "https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures"],
  accessibility: ["Accessibility in Compose", "Semantics, touch targets, descriptions, and testing.", "https://developer.android.com/develop/ui/compose/accessibility"],
  kotlinCollections: ["Kotlin collections", "Lists, sets, maps, transformations, and filtering.", "https://kotlinlang.org/docs/collections-overview.html"],
  kotlinConditions: ["Kotlin conditions and loops", "Use if, when, ranges, and loops for application logic.", "https://kotlinlang.org/docs/control-flow.html"]
};

const levels = [
  { name: "Compose Fundamentals", color: "#3ddc84" },
  { name: "State", color: "#55b8ff" },
  { name: "Text Input", color: "#ffb55e" },
  { name: "Layout", color: "#be83ff" },
  { name: "Lists", color: "#ff779f" },
  { name: "Navigation", color: "#55d7cd" },
  { name: "Architecture", color: "#8aa4ff" },
  { name: "Coroutines", color: "#e69aff" },
  { name: "Networking", color: "#ff8b73" },
  { name: "Real Android", color: "#81c784" }
];

const exercises = [
  [1,0,"Hello Android","Create your first Compose screen and center a greeting.",["@Composable","Text","Modifier"],["Create an Empty Activity project using Compose.","Display “Hello Lance!” in the center of the screen.","Use MaterialTheme and no XML layouts."],"Make the text bold, blue, and 30sp.",["composeCourse","composeTutorial","modifiers"]],
  [2,0,"Dynamic Greeting","Render UI from a Kotlin value instead of hardcoded text.",["val","string templates","recomposition"],["Declare a name variable.","Display it using a Kotlin string template.","Change the value and confirm the preview or app updates."],"Extract the greeting into a reusable composable that accepts a name parameter.",["composeTutorial"]],
  [3,0,"Business Card","Arrange related information with basic Compose layouts.",["Column","Spacer","typography"],["Display a name and Android Developer title.","Add email and phone labels.","Use spacing, alignment, and at least two Material text styles."],"Add a circular initial avatar and make the card adapt to narrow screens.",["layouts","material"]],
  [4,0,"Color Challenge","Style a card using modifiers and Material design values.",["background","padding","shape"],["Create a blue card with white text.","Add rounded corners and internal padding.","Keep colors and typography in the theme where practical."],"Add a subtle elevation and support dark theme.",["modifiers","material"]],
  [5,1,"Counter","Introduce mutable UI state through a simple interaction.",["remember","mutableStateOf","Button"],["Show “Clicked 0 times.”","Increase the count by one after every press.","Keep the state inside the composable for now."],"Use rememberSaveable so the value survives recreation.",["state"]],
  [6,1,"Reset Counter","Let multiple events update the same piece of state.",["events","state updates","Row"],["Keep the increment button.","Add a Reset button that returns the count to zero.","Arrange both actions clearly."],"Disable Reset while the counter is already zero.",["state","layouts"]],
  [7,1,"Step Counter","Generalize state changes instead of repeating logic.",["parameters","event handlers","state hoisting"],["Change the counter so it increases by five.","Move the step amount into a variable.","Display the step amount in the UI."],"Create reusable + and − controls that receive event lambdas.",["state"]],
  [8,1,"Counter Maximum","Derive UI behavior from state and enforce a limit.",["derived values","conditions","enabled"],["Stop the counter at 100.","Disable increment at the maximum.","Show “Maximum reached” only when appropriate."],"Add a progress indicator representing 0–100.",["state","kotlinConditions"]],
  [9,2,"Live Greeting","Connect text input to state and update UI immediately.",["TextField","value","onValueChange"],["Add a name TextField.","Show “Hello ____” below it.","Update the greeting as the user types."],"Trim accidental leading spaces without breaking normal typing.",["textInput","state"]],
  [10,2,"Character Counter","Derive information from the current input value.",["String.length","supporting text","derived state"],["Add a multiline text field.","Display the current character count.","Update it on every edit."],"Add a 140-character limit and visually warn near the maximum.",["textInput","state"]],
  [11,2,"Minimum Length","Control whether an action is available based on validation.",["validation","enabled","UI feedback"],["Create a text field and Submit button.","Disable Submit until at least five characters are entered.","Explain the requirement near the field."],"Show an error only after the user attempts to submit.",["textInput","state"]],
  [12,2,"Login Validation","Model multiple fields and independent validation rules.",["password input","KeyboardOptions","validation"],["Add username and password fields.","Require a nonblank username and an eight-character password.","Only allow login when both are valid."],"Add show/hide password behavior and field-specific error messages.",["textInput","state"]],
  [13,3,"Profile Layout","Build a responsive vertical profile composition.",["Box","Column","alignment"],["Create an avatar, name, occupation, and button.","Center the content.","Use sensible spacing and touch target sizes."],"Switch to a horizontal layout when enough width is available.",["layouts","accessibility"]],
  [14,3,"Settings Screen","Combine rows, icons, labels, and switches into a familiar UI.",["Row","Switch","weight"],["Create at least four settings rows.","Each row needs a title and control.","Align labels and controls consistently."],"Group settings under section headers and add content descriptions.",["layouts","material","accessibility"]],
  [15,3,"Calculator Keypad","Recreate a precise grid layout before adding behavior.",["grid","weight","aspectRatio"],["Build calculator display and keypad visuals.","Include digits, operators, clear, and equals.","Do not implement calculations yet."],"Make 0 span two columns and keep every other key square.",["layouts","material"]],
  [16,4,"Fruit List","Render collection data efficiently with LazyColumn.",["LazyColumn","items","List"],["Store Apple, Banana, and Orange in a list.","Render each value with LazyColumn.","Use item padding and dividers or cards."],"Move the row UI into a reusable FruitRow composable.",["lists","kotlinCollections"]],
  [17,4,"One Hundred Items","Learn lazy rendering and stable item identity.",["items","ranges","keys"],["Display Item 1 through Item 100.","Use a generated collection or range.","Keep scrolling smooth."],"Add a button that scrolls back to the top.",["lists","kotlinCollections"]],
  [18,4,"Alternating Rows","Use list position to derive presentation.",["itemsIndexed","modulo","styling"],["Alternate row backgrounds by index.","Keep text readable in light and dark themes.","Do not store a color on every item."],"Add sticky headers every 20 items.",["lists","material"]],
  [19,4,"Selectable List","Respond to row clicks and expose selection state.",["clickable","selection","state hoisting"],["Make each fruit row tappable.","Display the selected fruit above the list.","Visually mark the selected row."],"Support clearing the selection and accessibility-selected semantics.",["lists","interaction","accessibility"]],
  [20,5,"Two Screens","Create a navigation graph and move between destinations.",["NavHost","NavController","composable route"],["Create Home and Profile destinations.","Navigate from Home to Profile.","Support system back navigation."],"Add a top app bar with an Up button on Profile.",["navigation"]],
  [21,5,"Pass a Name","Send simple data to a destination safely.",["route arguments","encoding","back stack"],["Start with a name on Home.","Navigate to Profile with the name.","Display the passed value."],"Handle a missing name with a useful fallback.",["navigation"]],
  [22,5,"Player Details","Navigate using an ID rather than passing an entire object.",["IDs","arguments","lookup"],["Navigate with player ID 17.","Look up the matching player from a list or repository.","Display Player #17 and other details."],"Show a not-found screen for an unknown ID.",["navigation","kotlinCollections"]],
  [23,6,"ViewModel Counter","Move screen state out of the composable.",["ViewModel","StateFlow","viewModel()"],["Move the counter value into a ViewModel.","Expose immutable observable state.","Send increment events to the ViewModel."],"Write a local unit test for increment and reset.",["viewmodel","uiLayer","testing"]],
  [24,6,"Stateless Screen","Separate stateful orchestration from reusable UI.",["state hoisting","UiState","event lambdas"],["Create a stateful route composable.","Create a stateless screen composable.","Pass state down and events up."],"Represent screen actions with a sealed interface.",["architecture","uiLayer"]],
  [25,6,"Survive Rotation","Understand what configuration changes preserve and destroy.",["configuration change","ViewModel lifecycle","rememberSaveable"],["Rotate the emulator after changing state.","Confirm ViewModel state survives.","Document which kinds of state belong in ViewModel versus rememberSaveable."],"Also preserve a transient text-field value with SavedStateHandle.",["viewmodel","state"]],
  [26,7,"Delayed Result","Run asynchronous work without blocking the main thread.",["viewModelScope","launch","delay"],["Add a Load button.","Wait two seconds without freezing the UI.","Display Finished after the delay."],"Allow the operation to be cancelled.",["coroutines","viewmodel"]],
  [27,7,"Loading State","Represent asynchronous progress explicitly in the UI.",["sealed state","loading","success"],["Show Loading during the delay.","Show Finished afterward.","Do not use a separate unrelated Boolean when one state model is clearer."],"Add an Idle state and a Retry event.",["coroutines","uiLayer"]],
  [28,7,"Prevent Duplicate Work","Coordinate controls with in-flight coroutine state.",["job","enabled","idempotence"],["Disable Load while work is running.","Ensure repeated taps cannot start duplicate requests.","Restore the control after completion or cancellation."],"Display elapsed loading time without blocking.",["coroutines","state"]],
  [29,8,"First API Call","Fetch and display one piece of remote data.",["HTTP","suspend","permission"],["Choose a public JSON API.","Request one object on a background thread through a repository.","Display one useful field in Compose."],"Add a refresh button and log the response code safely.",["networking","retrofit","dataLayer"]],
  [30,8,"Network UI States","Build resilient loading, success, and error presentation.",["Result","error handling","retry"],["Model loading, success, and error states.","Show useful UI for each.","Let the user retry after failure."],"Differentiate offline, timeout, HTTP, and parsing failures.",["networking","retrofit","uiLayer"]],
  [31,9,"In-Memory To-Do App","Combine state, lists, input, and events into a complete feature.",["CRUD","UiState","LazyColumn"],["Create, complete, and delete tasks.","Keep data in memory only.","Use a ViewModel and stateless screen."],"Add filters for All, Active, and Completed.",["architecture","lists","viewmodel"]],
  [32,9,"Persist Preferences","Use DataStore for small durable application state.",["DataStore","Flow","preferences"],["Save a user preference or simple app setting.","Restore it when the app launches.","Observe updates as a Flow."],"Add a theme preference that controls the app’s light/dark mode.",["datastore","lifecycle"]],
  [33,9,"Room To-Do Database","Replace in-memory tasks with structured local persistence.",["Entity","DAO","RoomDatabase"],["Define a task entity and DAO.","Insert, update, query, and delete tasks.","Observe the task list from Room."],"Add a migration after introducing a priority field.",["room","dataLayer"]],
  [34,9,"Search Tasks","Transform database or state flows based on a query.",["Flow","combine","debounce"],["Add a search field.","Filter tasks by title.","Keep search state in the ViewModel."],"Debounce the search and highlight matching text.",["room","lifecycle","coroutines"]],
  [35,9,"Swipe to Delete","Add gesture-driven deletion with a recovery path.",["swipe gesture","Snackbar","undo"],["Swipe a task to remove it.","Show a Snackbar with Undo.","Restore the correct item when Undo is selected."],"Add a confirmation threshold and accessible non-gesture delete action.",["gestures","accessibility","room"]]
].map(([id,level,title,summary,concepts,requirements,stretch,resources]) => ({id,level,title,summary,concepts,requirements,stretch,resources}));

const challenges = [
  {
    "slug": "stopwatch",
    "title": "Stopwatch",
    "description": "Start, pause, reset, and preserve elapsed time across rotation.",
    "image": "assets/challenges/stopwatch.svg"
  },
  {
    "slug": "tip-calculator",
    "title": "Tip Calculator",
    "description": "Calculate tip and total, validate input, and support split bills.",
    "image": "assets/challenges/tip-calculator.svg"
  },
  {
    "slug": "shopping-list",
    "title": "Shopping List",
    "description": "Add, edit, check off, sort, and persist shopping items.",
    "image": "assets/challenges/shopping-list.svg"
  },
  {
    "slug": "baseball-pitch-counter",
    "title": "Baseball Pitch Counter",
    "description": "Track balls, strikes, outs, pitch count, and inning resets.",
    "image": "assets/challenges/baseball-pitch-counter.svg"
  },
  {
    "slug": "batting-lineup-manager",
    "title": "Batting Lineup Manager",
    "description": "Reorder players, assign positions, and rotate innings.",
    "image": "assets/challenges/batting-lineup-manager.svg"
  },
  {
    "slug": "gamecast-score-bug",
    "title": "Gamecast Score Bug",
    "description": "Recreate a compact live-score component from memory.",
    "image": "assets/challenges/gamecast-score-bug.svg"
  },
  {
    "slug": "android-calculator",
    "title": "Android Calculator",
    "description": "Implement keypad behavior, operations, formatting, and state.",
    "image": "assets/challenges/android-calculator.svg"
  },
  {
    "slug": "google-keep-mini",
    "title": "Google Keep Mini",
    "description": "Build notes with colors, search, pinning, and local persistence.",
    "image": "assets/challenges/google-keep-mini.svg"
  },
  {
    "slug": "settings-clone",
    "title": "Settings Clone",
    "description": "Recreate a polished settings screen with working preferences.",
    "image": "assets/challenges/settings-clone.svg"
  },
  {
    "slug": "play-store-home",
    "title": "Play Store Home",
    "description": "Build a responsive app catalog with carousels and detail navigation.",
    "image": "assets/challenges/play-store-home.svg"
  }
];

const els = {
  grid: document.querySelector("#exerciseGrid"), challengeGrid: document.querySelector("#challengeGrid"),
  search: document.querySelector("#searchInput"), level: document.querySelector("#levelFilter"), incomplete: document.querySelector("#incompleteFilter"),
  completed: document.querySelector("#completedCount"), bar: document.querySelector("#progressBar"), track: document.querySelector(".progress-track"),
  message: document.querySelector("#progressMessage"), empty: document.querySelector("#emptyState"), dialog: document.querySelector("#exerciseDialog"),
  dialogContent: document.querySelector("#dialogContent"), theme: document.querySelector("#themeToggle")
};

let progress = new Set(JSON.parse(localStorage.getItem("androidByDoingProgress") || "[]"));
let incompleteOnly = false;

levels.forEach((level,index) => els.level.insertAdjacentHTML("beforeend", `<option value="${index}">${level.name}</option>`));

function resourceHtml(key) {
  const [title,description,url] = RES[key];
  return `<a class="resource-link" href="${url}" target="_blank" rel="noreferrer"><div><strong>${title}</strong><br><span>${description}</span></div><b aria-hidden="true">↗</b></a>`;
}

function renderExercises() {
  const query = els.search.value.trim().toLowerCase();
  const selectedLevel = els.level.value;
  const filtered = exercises.filter(ex => {
    const matchesText = [ex.title, ex.summary, ...ex.concepts, levels[ex.level].name].join(" ").toLowerCase().includes(query);
    const matchesLevel = selectedLevel === "all" || Number(selectedLevel) === ex.level;
    const matchesProgress = !incompleteOnly || !progress.has(ex.id);
    return matchesText && matchesLevel && matchesProgress;
  });
  els.grid.innerHTML = filtered.map(ex => `
    <article class="exercise-card ${progress.has(ex.id) ? "completed" : ""}" data-id="${ex.id}">
      <div class="exercise-card-body">
        <div class="card-top"><span class="lesson-number">${String(ex.id).padStart(3,"0")}</span><span class="level-pill">${levels[ex.level].name}</span></div>
        <h3>${ex.title}</h3><p>${ex.summary}</p>
        <div class="concept-list">${ex.concepts.map(c=>`<span>${c}</span>`).join("")}</div>
        <div class="card-actions"><a class="open-exercise" href="lesson.html?id=${ex.id}">View lesson →</a>
        <label class="complete-label"><input type="checkbox" data-complete="${ex.id}" ${progress.has(ex.id)?"checked":""}> Done</label></div>
      </div>
    </article>`).join("");
  els.empty.hidden = filtered.length > 0;
}

function updateProgress() {
  const count = progress.size;
  const pct = Math.round(count / exercises.length * 100);
  els.completed.textContent = count;
  els.bar.style.width = `${pct}%`;
  els.track.setAttribute("aria-valuenow", String(count));
  els.message.textContent = count === 0 ? "Start small. Exercise 001 is waiting." : count === exercises.length ? "Curriculum complete. Time to build something entirely your own." : count < 10 ? "Momentum beats intensity. Keep going." : count < 25 ? "You are building real Android instincts now." : "The finish line is close. Stay deliberate.";
  localStorage.setItem("androidByDoingProgress", JSON.stringify([...progress]));
}

function openExercise(id) {
  const ex = exercises.find(e=>e.id===id);
  els.dialogContent.innerHTML = `<div class="dialog-body">
    <span class="lesson-number">LESSON ${String(ex.id).padStart(3,"0")} · ${levels[ex.level].name}</span>
    <h2>${ex.title}</h2><p class="dialog-intro">${ex.summary}</p>
    <section class="dialog-section"><h3>What you need to learn</h3><div class="concept-list">${ex.concepts.map(c=>`<span>${c}</span>`).join("")}</div></section>
    <section class="dialog-section"><h3>Learning resources</h3>${ex.resources.map(resourceHtml).join("")}</section>
    <section class="dialog-section"><h3>Your exercise</h3><ul>${ex.requirements.map(r=>`<li>${r}</li>`).join("")}</ul></section>
    <section class="dialog-section"><h3>Stretch goal</h3><p>${ex.stretch}</p></section>
    <label class="dialog-complete"><input type="checkbox" data-complete="${ex.id}" ${progress.has(ex.id)?"checked":""}> Mark this exercise complete</label>
  </div>`;
  els.dialog.showModal();
}



document.addEventListener("change", e => {
  if (!e.target.matches("[data-complete]")) return;
  const id = Number(e.target.dataset.complete);
  e.target.checked ? progress.add(id) : progress.delete(id);
  updateProgress(); renderExercises();
  document.querySelectorAll(`[data-complete="${id}"]`).forEach(box => box.checked = progress.has(id));
});

els.search.addEventListener("input", renderExercises);
els.level.addEventListener("change", renderExercises);
els.incomplete.addEventListener("click", () => { incompleteOnly=!incompleteOnly; els.incomplete.classList.toggle("active", incompleteOnly); els.incomplete.setAttribute("aria-pressed", String(incompleteOnly)); renderExercises(); });
document.querySelector("#closeDialog").addEventListener("click", ()=>els.dialog.close());
els.dialog.addEventListener("click", e => { if(e.target===els.dialog) els.dialog.close(); });
document.querySelector("#resetProgress").addEventListener("click", () => { if(confirm("Reset all completed exercises?")){ progress.clear(); updateProgress(); renderExercises(); }});

const preferredTheme = localStorage.getItem("androidByDoingTheme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
document.body.classList.toggle("dark", preferredTheme === "dark");
els.theme.textContent = preferredTheme === "dark" ? "☀" : "☾";
els.theme.addEventListener("click", () => { const dark = document.body.classList.toggle("dark"); els.theme.textContent=dark?"☀":"☾"; localStorage.setItem("androidByDoingTheme", dark?"dark":"light"); });

els.challengeGrid.innerHTML = challenges.map((challenge,index)=>`<a class="challenge-card" href="challenge.html?id=${challenge.slug}" aria-label="Open ${challenge.title} challenge"><span class="challenge-number">${String(index+1).padStart(2,"0")}</span><img src="${challenge.image}" alt="" loading="lazy"><div><h3>${challenge.title}</h3><p>${challenge.description}</p><span class="challenge-link">View challenge brief →</span></div></a>`).join("");
renderExercises(); updateProgress();
