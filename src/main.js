import { programs } from './data/data'
import './style.css'
import { renderCateg, renderPrograms } from './ui/render'

renderPrograms(programs)
renderCateg(programs)

window.onCategClick = function onCategClick(e) {
  console.log(e.target.textContent);
  const selectedCateg = e.target.textContent;
  const filteredPrograms = programs.filter(obj => obj.category == selectedCateg);
  selectedCateg == "összes" ? renderPrograms(programs) : renderPrograms(filteredPrograms);
}