const params = new URLSearchParams(location.search);
const lesson = exercises.find(item => item.id === Number(params.get("id"))) || exercises[0];
document.title = `${String(lesson.id).padStart(3,"0")} ${lesson.title} · Android by Doing`;
document.querySelector("#lessonLevel").textContent = `Lesson ${String(lesson.id).padStart(3,"0")} · ${levels[lesson.level].name}`;
document.querySelector("#lessonTitle").textContent = lesson.title;
document.querySelector("#lessonSummary").textContent = lesson.summary;
document.querySelector("#lessonObjective").textContent = lesson.summary;
document.querySelector("#lessonConcepts").innerHTML = lesson.concepts.map(c=>`<span>${c}</span>`).join("");
document.querySelector("#lessonRequirements").innerHTML = lesson.requirements.map(r=>`<li>${r}</li>`).join("");
document.querySelector("#lessonStretch").textContent = lesson.stretch;
document.querySelector("#lessonResources").innerHTML = lesson.resources.map(key=>{const [title,description,url]=RES[key];return `<a class="resource-link" href="${url}" target="_blank" rel="noreferrer"><div><strong>${title}</strong><br><span>${description}</span></div><b aria-hidden="true">↗</b></a>`}).join("");
const image=document.querySelector("#lessonImage"); image.src=`assets/lessons/${String(lesson.id).padStart(3,"0")}.svg`; image.alt=`Visual target for the ${lesson.title} Android exercise`;
let progress=new Set(JSON.parse(localStorage.getItem("androidByDoingProgress")||"[]")); const complete=document.querySelector("#lessonComplete"); complete.checked=progress.has(lesson.id);
function updateCompletion(){document.querySelector("#completionHeading").textContent=complete.checked?"Lesson complete. Nice work.":"Ready to build this lesson?";}
complete.addEventListener("change",()=>{complete.checked?progress.add(lesson.id):progress.delete(lesson.id);localStorage.setItem("androidByDoingProgress",JSON.stringify([...progress]));updateCompletion();}); updateCompletion();
const preferredTheme=localStorage.getItem("androidByDoingTheme")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.body.classList.toggle("dark",preferredTheme==="dark");const toggle=document.querySelector("#themeToggle");toggle.textContent=preferredTheme==="dark"?"☀":"☾";toggle.addEventListener("click",()=>{const dark=document.body.classList.toggle("dark");toggle.textContent=dark?"☀":"☾";localStorage.setItem("androidByDoingTheme",dark?"dark":"light")});