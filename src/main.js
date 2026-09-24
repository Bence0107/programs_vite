import { programs } from './data/data';
import './style.css';
import { renderCateg, renderFooter, renderPrograms } from './ui/render';
import { createIcons, icons } from 'lucide';
createIcons({ icons });

renderPrograms(programs);
renderCateg(programs);
renderFooter(programs);

window.onCategClick = function onCategClick(e) {
  if (e.target.tagName != "BUTTON") return;
  document.querySelectorAll("button").forEach(button => button.classList.remove("activeBtn"));
  e.target.classList.add("activeBtn");
  const selectedCateg = e.target.textContent;
  const filteredPrograms = programs.filter(obj => obj.category == selectedCateg);
  selectedCateg == "összes" ? renderPrograms(programs) : renderPrograms(filteredPrograms);
  document.querySelector(".btn").classList.remove("activeBtn");
}

window.availablePrograms = function availablePrograms() {
  const filteredPrograms = programs.filter(obj => obj.capacity > obj.participants);
  renderPrograms(filteredPrograms);
  document.querySelectorAll("button").forEach(button => button.classList.remove("activeBtn"));
  document.querySelector(".btn").classList.add("activeBtn");
}